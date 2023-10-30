import React from 'react';

const ModeSwitch = ({ isDarkMode, toggleMode }) => {
  return (
    <div className="mode-switch">
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleMode} />
        <span className="slider round"></span>
      </label>
      <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
  );
};

export default ModeSwitch;
