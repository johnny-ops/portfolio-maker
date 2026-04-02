import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { Palette, X } from 'lucide-react';

const ThemeColorPicker = ({ currentColor, onColorChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const presetColors = [
    '#667eea', // Purple
    '#f56565', // Red
    '#48bb78', // Green
    '#4299e1', // Blue
    '#ed8936', // Orange
    '#9f7aea', // Violet
    '#38b2ac', // Teal
    '#ed64a6', // Pink
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
      >
        <Palette size={16} />
        <span className="w-6 h-6 rounded border-2 border-gray-300" style={{ backgroundColor: currentColor }}></span>
        Theme
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 z-50 border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Theme Color</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={20} />
            </button>
          </div>

          <HexColorPicker color={currentColor} onChange={onColorChange} />

          <div className="mt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Presets</p>
            <div className="grid grid-cols-4 gap-2">
              {presetColors.map((color) => (
                <button
                  key={color}
                  onClick={() => onColorChange(color)}
                  className="w-10 h-10 rounded border-2 border-gray-300 dark:border-gray-600 hover:scale-110 transition-transform"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="mt-4">
            <input
              type="text"
              value={currentColor}
              onChange={(e) => onColorChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
              placeholder="#667eea"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeColorPicker;
