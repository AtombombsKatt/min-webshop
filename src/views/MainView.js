import React from 'react';
import SidebarCategories from '../Components/SidebarCategories';

const MainView = ({ children, currentTheme, handleSelectCategory }) => {
  return (
    <div className='mainContent flex'>
      <div className='sidebar p-4 top-0 h-screen'
        style={{
          backgroundColor: currentTheme.sidebarBackgroundColor,
          color: currentTheme.textColor
        }}
      >
        <SidebarCategories onSelectCategory={handleSelectCategory} />
      </div>
      <h1>Full Width View</h1>
      <section className='content flex-1 p-4 w-full'>
        {children}
      </section>
    </div>
  );
};

export default MainView;
