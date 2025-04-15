
import React, { useState, useEffect } from 'react';

interface SegmentedTabProps {
  options: string[];
  activeTab?: string;
  onChange?: (option: string) => void;
}

export const SegmentedTabs: React.FC<SegmentedTabProps> = ({ 
  options, 
  activeTab,
  onChange 
}) => {
  const [selected, setSelected] = useState<string>(activeTab || options[0]);

  const handleChange = (option: string) => {
    setSelected(option);
    if (onChange) {
      onChange(option);
    }
  };

  useEffect(() => {
    if (activeTab && activeTab !== selected) {
      setSelected(activeTab);
    }
  }, [activeTab, selected]);

  return (
    <div className="tab-container">
      {options.map((option, index) => (
        <React.Fragment key={option}>
          <input
            type="radio"
            id={`tab-${index + 1}`}
            name="tabs"
            className={`tab tab--${index + 1}`}
            checked={selected === option}
            onChange={() => handleChange(option)}
          />
          <label 
            htmlFor={`tab-${index + 1}`} 
            className={`tab_label ${selected === option ? 'active' : ''}`}
          >
            {option}
          </label>
        </React.Fragment>
      ))}
      <span className="indicator"></span>
    </div>
  );
};
