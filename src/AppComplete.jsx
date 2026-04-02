import React, { useState, useEffect } from 'react';
import { Download, Save, Upload, Moon, Sun, Undo2, Redo2, User, LogOut, Eye, ZoomIn, ZoomOut, Maximize2, Cloud, Settings as SettingsIcon, CheckCircle } from 'lucide-react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { PortfolioProvider, usePortfolio } from './contexts/PortfolioContext';
import PersonalInfo from './components/Form/PersonalInfo';
import SkillsForm from './components/Form/SkillsForm';
import ProjectsForm from './components/Form/ProjectsForm';
import ExperienceForm from './components/Form/ExperienceForm';
import EducationForm from './components/Form/EducationForm';
import PortfolioPreview from './components/Preview/PortfolioPreview';
import AuthModal from './components/Auth/AuthModal';
import ThemeColorPicker from './components/ColorPicker/ThemeColorPicker';
import SectionSettings from './components/Settings/SectionSettings';
import FormValidator from './components/Validation/FormValidator';
import { exportToPDF, exportToHTML, exportAsReactComponent } from './utils/exportUtils';

function AppContent() {
  const { currentUser, logout } = useAuth();
  const { portfolioData, setPortfolioData, undo, redo, canUndo, canRedo, saveToFirebase, loading } = usePortfolio();
  
  const [darkMode, setDarkMode] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState(portfolioData.settings?.template || 'template1');
  const [activeTab, setActiveTab] = useState('personal');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [previewZoom, setPreviewZoom] = useState(100);
  const [previewMode, setPreviewMode] = useState('desktop');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  // Update template when changed
  useEffect(() => {
    if (portfolioData.settings) {
      setCurrentTemplate(portfolioData.settings.template);
    }
  }, [portfolioData.settings]);

  // Update specific section
  const updateSection = (section, data) => {
    const newData = { ...portfolioData, [section]: data };
    setPortfolioData(newData);
  };

  // Update settings
  const updateSettings = (newSettings) => {
    const newData = {
      ...portfolioData,
      settings: { ...portfolioData.settings, ...newSettings }
    };
    setPortfolioData(newData);
  };

  // Handle template change
  const handleTemplateChange = (template) => {
    setCurrentTemplate(template);
    updateSettings({ template });
  };

  // Handle theme color change
  const handleColorChange = (color) => {
    updateSettings({ themeColor: color });
  };

  // Save data
  const handleSave = async () => {
    if (currentUser) {
      await saveToFirebase();
    } else {
      localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
      alert('Portfolio saved locally! Login to save to cloud.');
    }
  };

  // Load from file
  const handleLoad = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          setPortfolioData(data);
          alert('Portfolio loaded successfully!');
        } catch (error) {
          alert('Invalid file format');
        }
      };
      reader.readAsText(file);
    }
  };

  // Export functions
  const handleExportPDF = () => exportToPDF('portfolio-preview');
  const handleExportHTML = () => exportToHTML(portfolioData, currentTemplate);
  const handleExportReact = () => exportAsReactComponent(portfolioData, currentTemplate);

  // Zoom controls
  const handleZoomIn = () => setPreviewZoom(Math.min(previewZoom + 10, 200));
  const handleZoomOut = () => setPreviewZoom(Math.max(previewZoom - 10, 50));
  const handleResetZoom = () => setPreviewZoom(100);

  // Preview mode widths
  const getPreviewWidth = () => {
    switch (previewMode) {
      case 'mobile': return '375px';
      case 'tablet': return '768px';
      case 'desktop': return '100%';
      default: return '100%';
    }
  };

  const tabs = [
    { id: 'personal', label: 'Personal Info' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center flex-wrap gap-3">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Portfolio Maker
              </h1>
              
              <div className="flex items-center gap-2 flex-wrap">
                {/* Undo/Redo */}
                <div className="flex gap-1">
                  <button
                    onClick={undo}
                    disabled={!canUndo}
                    className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Undo"
                  >
                    <Undo2 size={18} />
                  </button>
                  <button
                    onClick={redo}
                    disabled={!canRedo}
                    className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Redo"
                  >
                    <Redo2 size={18} />
                  </button>
                </div>

                {/* Template Selector */}
                <select
                  value={currentTemplate}
                  onChange={(e) => handleTemplateChange(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                >
                  <option value="template1">Minimal</option>
                  <option value="template2">Dark Mode</option>
                  <option value="template3">Creative</option>
                  <option value="template4">Glassmorphism</option>
                  <option value="template5">Japanese</option>
                  <option value="template6">Typography</option>
                  <option value="template7">Card Grid</option>
                  <option value="template8">Timeline</option>
                </select>

                {/* Theme Color Picker */}
                <ThemeColorPicker
                  currentColor={portfolioData.settings?.themeColor || '#667eea'}
                  onColorChange={handleColorChange}
                />

                {/* Validation */}
                <button
                  onClick={() => setShowValidation(!showValidation)}
                  className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors text-sm"
                  title="Validate Form"
                >
                  <CheckCircle size={16} />
                </button>

                {/* Save Button */}
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm disabled:opacity-50"
                >
                  {currentUser ? <Cloud size={16} /> : <Save size={16} />}
                  {loading ? 'Saving...' : 'Save'}
                </button>

                {/* Load Button */}
                <label className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors cursor-pointer text-sm">
                  <Upload size={16} />
                  Load
                  <input type="file" accept=".json" onChange={handleLoad} className="hidden" />
                </label>

                {/* Export Dropdown */}
                <div className="relative group">
                  <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                    <Download size={16} />
                    Export
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-gray-200 dark:border-gray-600">
                    <button onClick={handleExportPDF} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-t-lg">
                      Export as PDF
                    </button>
                    <button onClick={handleExportHTML} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                      Export as HTML
                    </button>
                    <button onClick={handleExportReact} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-b-lg">
                      Export as React
                    </button>
                  </div>
                </div>

                {/* Auth Button */}
                {currentUser ? (
                  <button
                    onClick={logout}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => setShowAuthModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm"
                  >
                    <User size={16} />
                    Login
                  </button>
                )}

                {/* Dark Mode Toggle */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-700" />}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Validation Panel */}
        {showValidation && (
          <FormValidator
            data={portfolioData}
            onClose={() => setShowValidation(false)}
            onErrorsChange={setValidationErrors}
          />
        )}

        {/* Main Content */}
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${isFullscreen ? 'fixed inset-0 z-40 bg-gray-50 dark:bg-gray-900 overflow-auto' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${isFullscreen ? 'hidden' : ''}`}>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Build Your Portfolio
              </h2>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 dark:border-gray-700">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Form Content */}
              <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
                {activeTab === 'personal' && (
                  <PersonalInfo
                    data={portfolioData.personal}
                    onChange={(data) => updateSection('personal', data)}
                    errors={validationErrors.personal}
                  />
                )}
                {activeTab === 'skills' && (
                  <SkillsForm
                    data={portfolioData.skills}
                    onChange={(data) => updateSection('skills', data)}
                  />
                )}
                {activeTab === 'projects' && (
                  <ProjectsForm
                    data={portfolioData.projects}
                    onChange={(data) => updateSection('projects', data)}
                  />
                )}
                {activeTab === 'experience' && (
                  <ExperienceForm
                    data={portfolioData.experience}
                    onChange={(data) => updateSection('experience', data)}
                  />
                )}
                {activeTab === 'education' && (
                  <EducationForm
                    data={portfolioData.education}
                    onChange={(data) => updateSection('education', data)}
                  />
                )}
                {activeTab === 'settings' && (
                  <SectionSettings
                    settings={portfolioData.settings}
                    onChange={updateSettings}
                  />
                )}
              </div>
            </div>

            {/* Preview Section */}
            <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${isFullscreen ? 'col-span-2' : ''}`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Live Preview
                </h2>
                
                {/* Preview Controls */}
                <div className="flex items-center gap-2">
                  {/* Preview Mode */}
                  <div className="flex gap-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                    <button
                      onClick={() => setPreviewMode('mobile')}
                      className={`px-3 py-1 rounded text-xs ${previewMode === 'mobile' ? 'bg-white dark:bg-gray-600 shadow' : ''}`}
                      title="Mobile View"
                    >
                      📱
                    </button>
                    <button
                      onClick={() => setPreviewMode('tablet')}
                      className={`px-3 py-1 rounded text-xs ${previewMode === 'tablet' ? 'bg-white dark:bg-gray-600 shadow' : ''}`}
                      title="Tablet View"
                    >
                      📱
                    </button>
                    <button
                      onClick={() => setPreviewMode('desktop')}
                      className={`px-3 py-1 rounded text-xs ${previewMode === 'desktop' ? 'bg-white dark:bg-gray-600 shadow' : ''}`}
                      title="Desktop View"
                    >
                      💻
                    </button>
                  </div>

                  {/* Zoom Controls */}
                  <button onClick={handleZoomOut} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600" title="Zoom Out">
                    <ZoomOut size={16} />
                  </button>
                  <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[3rem] text-center">{previewZoom}%</span>
                  <button onClick={handleZoomIn} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600" title="Zoom In">
                    <ZoomIn size={16} />
                  </button>

                  {/* Fullscreen */}
                  <button
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                    title="Fullscreen"
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>
              </div>

              <div className="overflow-auto max-h-[calc(100vh-200px)] flex justify-center">
                <div
                  style={{
                    width: getPreviewWidth(),
                    transform: `scale(${previewZoom / 100})`,
                    transformOrigin: 'top center',
                    transition: 'transform 0.2s'
                  }}
                >
                  <PortfolioPreview
                    data={portfolioData}
                    template={currentTemplate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Auth Modal */}
        <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <PortfolioProvider>
        <AppContent />
      </PortfolioProvider>
    </AuthProvider>
  );
}

export default App;
