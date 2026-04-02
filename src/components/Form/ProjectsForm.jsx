import React, { useRef } from 'react';
import { Plus, Trash2, Upload, X } from 'lucide-react';
import DraggableList from '../DragDrop/DraggableList';
import { validateURL } from '../Validation/FormValidator';

const ProjectsForm = ({ data, onChange }) => {
  const fileInputRefs = useRef({});

  const addProject = () => {
    onChange([
      ...data,
      {
        id: Date.now(),
        title: '',
        description: '',
        technologies: '',
        image: '',
        githubLink: '',
        liveLink: ''
      }
    ]);
  };

  const removeProject = (index) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const updateProject = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const handleImageUpload = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateProject(index, 'image', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index) => {
    updateProject(index, 'image', '');
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index].value = '';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Projects</h3>
        <button
          onClick={addProject}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
        >
          <Plus size={16} />
          Add Project
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          No projects added yet. Click "Add Project" to showcase your work.
        </div>
      ) : (
        <div className="space-y-6">
          {data.map((project, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700/50"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Project #{index + 1}
                </span>
                <button
                  onClick={() => removeProject(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="space-y-3">
                {/* Project Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Image
                  </label>
                  {project.image ? (
                    <div className="relative inline-block">
                      <img
                        src={project.image}
                        alt="Project"
                        className="w-full h-40 object-cover rounded-lg border-2 border-gray-200 dark:border-gray-600"
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                      <Upload size={24} className="text-gray-400" />
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        Upload Project Image
                      </span>
                      <input
                        ref={(el) => (fileInputRefs.current[index] = el)}
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(index, e)}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                {/* Project Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => updateProject(index, 'title', e.target.value)}
                    placeholder="E-commerce Platform"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    value={project.description}
                    onChange={(e) => updateProject(index, 'description', e.target.value)}
                    placeholder="Describe your project..."
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Technologies */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Technologies Used
                  </label>
                  <input
                    type="text"
                    value={project.technologies}
                    onChange={(e) => updateProject(index, 'technologies', e.target.value)}
                    placeholder="React, Node.js, MongoDB (comma separated)"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* GitHub Link */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    GitHub Link
                  </label>
                  <input
                    type="url"
                    value={project.githubLink}
                    onChange={(e) => updateProject(index, 'githubLink', e.target.value)}
                    placeholder="https://github.com/username/project"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Live Demo Link */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Live Demo Link
                  </label>
                  <input
                    type="url"
                    value={project.liveLink}
                    onChange={(e) => updateProject(index, 'liveLink', e.target.value)}
                    placeholder="https://project-demo.com"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsForm;
