import React from 'react';

const MenuItem = ({ title, icon, route }) => (
    <div className="menu-item-container">
      <i className={`fas fa-${icon}`}></i> {title}
    </div>
  );

export default MenuItem;
