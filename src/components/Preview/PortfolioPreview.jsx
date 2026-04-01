import React from 'react';
import TemplateOne from '../Templates/TemplateOne';
import TemplateTwo from '../Templates/TemplateTwo';
import TemplateThree from '../Templates/TemplateThree';

const PortfolioPreview = ({ data, template }) => {
  const renderTemplate = () => {
    switch (template) {
      case 'template1':
        return <TemplateOne data={data} />;
      case 'template2':
        return <TemplateTwo data={data} />;
      case 'template3':
        return <TemplateThree data={data} />;
      default:
        return <TemplateOne data={data} />;
    }
  };

  return (
    <div id="portfolio-preview" className="bg-white dark:bg-gray-900 rounded-lg shadow-inner">
      {renderTemplate()}
    </div>
  );
};

export default PortfolioPreview;
