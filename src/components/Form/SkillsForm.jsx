import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import DraggableList from '../DragDrop/DraggableList';

const SkillsForm = ({ data, onChange }) => {
  const addSkill = () => {
    onChange([...data, { id: Date.now(), name: '', level: 'Intermediate' }]);
  };

  const removeSkill = (index) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const updateSkill = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const renderSkillItem = (skill, index) => (
    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700/50">
      <div className="flex justify-between items-start mb-3">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Skill #{index + 1}
        </span>
        <button
          onClick={() => removeSkill(index)}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <Trash2 size={16} />
        </button>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Skill Name *
          </label>
          <input
            type="text"
            value={skill.name}
            onChange={(e) => updateSkill(index, 'name', e.target.value)}
            placeholder="e.g., React.js, Python, UI/UX Design"
            className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              !skill.name ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'
            }`}
          />
          {!skill.name && (
            <p className="text-xs text-red-500 mt-1">Skill name is required</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Proficiency Level
          </label>
          <select
            value={skill.level}
            onChange={(e) => updateSkill(index, 'level', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Skills</h3>
        <button
          onClick={addSkill}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
        >
          <Plus size={16} />
          Add Skill
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          No skills added yet. Click "Add Skill" to get started.
        </div>
      ) : (
        <DraggableList
          items={data}
          onReorder={onChange}
          renderItem={renderSkillItem}
          itemKey="id"
        />
      )}
    </div>
  );
};

export default SkillsForm;
