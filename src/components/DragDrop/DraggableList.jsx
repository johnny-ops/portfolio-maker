import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { GripVertical } from 'lucide-react';

const DraggableList = ({ items, onReorder, renderItem, itemKey = 'id' }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    onReorder(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable-list">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`space-y-4 ${snapshot.isDraggingOver ? 'bg-blue-50 dark:bg-blue-900/10 rounded-lg p-2' : ''}`}
          >
            {items.map((item, index) => (
              <Draggable
                key={item[itemKey] || index}
                draggableId={String(item[itemKey] || index)}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className={`${snapshot.isDragging ? 'shadow-2xl scale-105' : ''} transition-all`}
                  >
                    <div className="flex items-start gap-2">
                      <div
                        {...provided.dragHandleProps}
                        className="mt-4 cursor-grab active:cursor-grabbing p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                      >
                        <GripVertical size={20} className="text-gray-400" />
                      </div>
                      <div className="flex-1">
                        {renderItem(item, index)}
                      </div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableList;
