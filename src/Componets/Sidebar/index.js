import React from 'react';
import MenuItem from '../MenuItem';
import SibedarFooter from '../SidebarFooter';
import SibedarHeader from '../SidebarHeader';

const Sibedar = ({menuElemnts}) => (
    <div className="sibebar-container">
        <SibedarHeader></SibedarHeader>
        <div className="sidebar-content"> 
             {
                 menuElemnts.map( (x, i) => ( < MenuItem  key={i} title={ x.title } route={x.route} icon={x.icon} ></MenuItem> ) )
             } 
         </div>
         <SibedarFooter></SibedarFooter>
    </div>
  );

export default Sibedar;
