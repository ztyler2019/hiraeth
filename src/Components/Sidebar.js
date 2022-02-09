import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent, SidebarFooter, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import head from '../Images/head.png'

function Sidebar() {
    return(
<div className='sidebar'>
    {/* JUST USE NAVBAR TWICE */}
<ProSidebar>
<SidebarHeader>
    header
  </SidebarHeader>
  <SidebarContent>
  <Menu iconShape="square">
    <MenuItem icon=''>Dashboard</MenuItem>
    <SubMenu title="Components" icon=''>
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
  </SidebarContent>
  <SidebarFooter>
      footer
  </SidebarFooter>
</ProSidebar>
</div>
    )
}
export default Sidebar;