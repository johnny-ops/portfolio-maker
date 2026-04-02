import React, { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle, X } from 'lucide-react';

const FormValidator = ({ data, onClose, onErrorsChange }) => {
  const [errors, setErrors] = useState([]);
  const [warnings, setWarnings] = useState([]);

  useEffect(() => {
    validateData();
  }, [data]);

  const validateData = () => {
    const newErrors = [];
    const newWarnings = [];

    // Personal Info Validation
    if (!data.personal.fullName || data.personal.fullName.trim() === '') {
      newErrors.push({ section: 'Personal Info', field: 'Full Name', message: 'Full name is required' });
    }
    if (!data.personal.title || data.personal.title.trim() === '') {
      newErrors.push({ section: 'Personal Info', field: 'Title', message: 'Title/Role is required' });
    }
    if (data.personal.email && !isValidEmail(data.personal.email)) {
      newErrors.push({ section: 'Personal Info', field: 'Email', message: 'Invalid email format' });
    }
    if (!data.personal.profileImage) {
      newWarnings.push({ section: 'Personal Info', field: 'Profile Picture', message: 'Consider adding a profile picture' });
    }
    if (!data.personal.bio || data.personal.bio.length < 50) {
      newWarnings.push({ section: 'Personal Info', field: 'Bio', message: 'Bio should be at least 50 characters' });
    }

    // Skills Validation
    if (data.skills.length === 0) {
      newWarnings.push({ section: 'Skills', field: 'Skills List', message: 'Add at least 3-5 skills to showcase your expertise' });
    }
    data.skills.forEach((skill, index) => {
      if (!skill.name || skill.name.trim() === '') {
        newErrors.push({ section: 'Skills', field: `Skill #${index + 1}`, message: 'Skill name is required' });
      }
    });

    // Projects Validation
    if (data.projects.length === 0) {
      newWarnings.push({ section: 'Projects', field: 'Projects List', message: 'Add at least 2-3 projects to showcase your work' });
    }
    data.projects.forEach((project, index) => {
      if (!project.title || project.title.trim() === '') {
        newErrors.push({ section: 'Projects', field: `Project #${index + 1}`, message: 'Project title is required' });
      }
      if (!project.description || project.description.length < 20) {
        newWarnings.push({ section: 'Projects', field: `Project #${index + 1}`, message: 'Add a detailed description (at least 20 characters)' });
      }
      if (!project.image) {
        newWarnings.push({ section: 'Projects', field: `Project #${index + 1}`, message: 'Consider adding a project image' });
      }
    });

    // Experience Validation
    data.experience.forEach((exp, index) => {
      if (!exp.jobTitle || exp.jobTitle.trim() === '') {
        newErrors.push({ section: 'Experience', field: `Experience #${index + 1}`, message: 'Job title is required' });
      }
      if (!exp.company || exp.company.trim() === '') {
        newErrors.push({ section: 'Experience', field: `Experience #${index + 1}`, message: 'Company name is required' });
      }
    });

    // Education Validation
    data.education.forEach((edu, index) => {
      if (!edu.school || edu.school.trim() === '') {
        newErrors.push({ section: 'Education', field: `Education #${index + 1}`, message: 'School name is required' });
      }
      if (!edu.degree || edu.degree.trim() === '') {
        newErrors.push({ section: 'Education', field: `Education #${index + 1}`, message: 'Degree is required' });
      }
    });

    setErrors(newErrors);
    setWarnings(newWarnings);
    onErrorsChange({ errors: newErrors, warnings: newWarnings });
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const completionPercentage = () => {
    const totalFields = 15; // Approximate total important fields
    let completed = 0;

    if (data.personal.fullName) completed++;
    if (data.personal.title) completed++;
    if (data.personal.profileImage) completed++;
    if (data.personal.bio && data.personal.bio.length >= 50) completed++;
    if (data.personal.email) completed++;
    if (data.skills.length >= 3) completed++;
    if (data.projects.length >= 2) completed++;
    if (data.experience.length >= 1) completed++;
    if (data.education.length >= 1) completed++;
    if (data.personal.socialLinks.github) completed++;
    if (data.personal.socialLinks.linkedin) completed++;

    return Math.round((completed / totalFields) * 100);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Portfolio Validation
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <X size={24} />
          </button>
        </div>

        {/* Completion Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Portfolio Completion
            </span>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
              {completionPercentage()}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage()}%` }}
            ></div>
          </div>
        </div>

        {/* Errors */}
        {errors.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
              <AlertCircle size={20} />
              Errors ({errors.length})
            </h3>
            <div className="space-y-2">
              {errors.map((error, index) => (
                <div key={index} className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                  <p className="text-sm font-medium text-red-800 dark:text-red-300">
                    {error.section} - {error.field}
                  </p>
                  <p className="text-sm text-red-600 dark:text-red-400">{error.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Warnings */}
        {warnings.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-yellow-600 dark:text-yellow-400 mb-3 flex items-center gap-2">
              <AlertCircle size={20} />
              Suggestions ({warnings.length})
            </h3>
            <div className="space-y-2">
              {warnings.map((warning, index) => (
                <div key={index} className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                    {warning.section} - {warning.field}
                  </p>
                  <p className="text-sm text-yellow-600 dark:text-yellow-400">{warning.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Success Message */}
        {errors.length === 0 && warnings.length === 0 && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
            <CheckCircle size={48} className="text-green-600 dark:text-green-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
              Portfolio Looks Great!
            </h3>
            <p className="text-sm text-green-600 dark:text-green-400">
              Your portfolio is complete and ready to export.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormValidator;
