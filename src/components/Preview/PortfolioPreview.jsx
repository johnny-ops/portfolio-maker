import React from 'react';
import TemplateOne from '../Templates/TemplateOne';
import TemplateTwo from '../Templates/TemplateTwo';
import TemplateThree from '../Templates/TemplateThree';
import TemplateFour from '../Templates/TemplateFour';
import TemplateFive from '../Templates/TemplateFive';
import TemplateSix from '../Templates/TemplateSix';
import TemplateSeven from '../Templates/TemplateSeven';
import TemplateEight from '../Templates/TemplateEight';

const PortfolioPreview = ({ data, template }) => {
  const renderTemplate = () => {
    switch (template) {
      case 'template1':
        return <TemplateOne data={data} />;
      case 'template2':
        return <TemplateTwo data={data} />;
      case 'template3':
        return <TemplateThree data={data} />;
      case 'template4':
        return <TemplateFour data={data} />;
      case 'template5':
        return <TemplateFive data={data} />;
      case 'template6':
        return <TemplateSix data={data} />;
      case 'template7':
        return <TemplateSeven data={data} />;
      case 'template8':
        return <TemplateEight data={data} />;
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
