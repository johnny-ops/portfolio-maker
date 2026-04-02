import React, { useState, useEffect } from 'react';
import { Download, Save, Upload, Moon, Sun } from 'lucide-react';
import PersonalInfo from './components/Form/PersonalInfo';
import SkillsForm from './components/Form/SkillsForm';
import ProjectsForm from './components/Form/ProjectsForm';
import ExperienceForm from './components/Form/ExperienceForm';
import EducationForm from './components/Form/EducationForm';
import PortfolioPreview from './components/Preview/PortfolioPreview';
import { exportToPDF, exportToHTML } from './utils/exportUtils';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState('template1');
  const [activeTab, setActiveTab] = useState('personal');
  
  const [portfolioData, setPortfolioData] = useState(() => {
    const saved = localStorage.getItem('portfolioData');
    return saved ? JSON.parse(saved) : {
      personal: {
        fullName: '',
        title: '',
        profileImage: '',
        bio: '',
        location: '',
        email: '',
        phone: '',
        socialLinks: {
          github: '',
          linkedin: '',
          portfolio: '',
          twitter: ''
        }
      },
      skills: [],
      projects: [],
      experience: [],
      education: []
    };
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
  }, [portfolioData]);

  // Update specific section of portfolio data
  const updateSection = (section, data) => {
    setPortfolioData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  // Save data to localStorage
  const handleSave = () => {
    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
    alert('Portfolio saved successfully!');
  };

  // Load data from file
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
          alert('Error loading file. Please ensure it\'s a valid JSON file.');
        }
      };
      reader.readAsText(file);
    }
  };

  // Export to PDF
  const handleExportPDF = () => {
    exportToPDF('portfolio-preview');
  };

  // Export to HTML
  const handleExportHTML = () => {
    exportToHTML(portfolioData, currentTemplate);
  };

  const tabs = [
    { id: 'personal', label: 'Personal Info' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' }
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Portfolio Maker
              </h1>
              
              <div className="flex items-center gap-3">
                {/* Template Selector */}
                <select
                  value={currentTemplate}
                  onChange={(e) => setCurrentTemplate(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                >
                  <option value="template1">Minimal</option>
                  <option value="template2">Dark Mode</option>
                  <option value="template3">Creative</option>
                </select>

                {/* Action Buttons */}
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  <Save size={16} />
                  Save
                </button>

                <label className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors cursor-pointer text-sm">
                  <Upload size={16} />
                  Load
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleLoad}
                    className="hidden"
                  />
                </label>

                <div className="relative group">
                  <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                    <Download size={16} />
                    Export
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <button
                      onClick={handleExportPDF}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-t-lg"
                    >
                      Export as PDF
                    </button>
                    <button
                      onClick={handleExportHTML}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-b-lg"
                    >
                      Export as HTML
                    </button>
                  </div>
                </div>

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

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
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
              </div>
            </div>

            {/* Preview Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Live Preview
              </h2>
              <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
                <PortfolioPreview
                  data={portfolioData}
                  template={currentTemplate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
