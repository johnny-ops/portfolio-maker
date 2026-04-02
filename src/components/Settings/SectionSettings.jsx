import React from 'react';
import { Eye, EyeOff, GripVertical } from 'lucide-react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const SectionSettings = ({ settings, onChange }) => {
  const sections = [
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' }
  ];

  const toggleVisibility = (sectionId) => {
    onChange({
      ...settings,
      sectionVisibility: {
        ...settings.sectionVisibility,
        [sectionId]: !settings.sectionVisibility[sectionId]
      }
    });
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(settings.sectionOrder || sections.map(s => s.id));
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    onChange({
      ...settings,
      sectionOrder: items
    });
  };

  const currentOrder = settings.sectionOrder || sections.map(s => s.id);
  const orderedSections = currentOrder.map(id => sections.find(s => s.id === id)).filter(Boolean);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Section Visibility & Order
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Toggle section visibility and drag to reorder
        </p>

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="sections">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="space-y-2"
              >
                {orderedSections.map((section, index) => (
                  <Draggable key={section.id} draggableId={section.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className={`flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-2 ${
                          snapshot.isDragging ? 'border-blue-500 shadow-lg' : 'border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div {...provided.dragHandleProps} className="cursor-grab active:cursor-grabbing">
                            <GripVertical size={20} className="text-gray-400" />
                          </div>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {section.label}
                          </span>
                        </div>
                        <button
                          onClick={() => toggleVisibility(section.id)}
                          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          {settings.sectionVisibility?.[section.id] !== false ? (
                            <Eye size={20} className="text-green-600" />
                          ) : (
                            <EyeOff size={20} className="text-gray-400" />
                          )}
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Display Options
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Show Contact in Header
            </label>
            <input
              type="checkbox"
              checked={settings.showContactInHeader !== false}
              onChange={(e) => onChange({ ...settings, showContactInHeader: e.target.checked })}
              className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Show Social Links
            </label>
            <input
              type="checkbox"
              checked={settings.showSocialLinks !== false}
              onChange={(e) => onChange({ ...settings, showSocialLinks: e.target.checked })}
              className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Compact Mode
            </label>
            <input
              type="checkbox"
              checked={settings.compactMode || false}
              onChange={(e) => onChange({ ...settings, compactMode: e.target.checked })}
              className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSettings;
