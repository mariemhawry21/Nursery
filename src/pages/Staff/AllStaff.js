import React from 'react'

import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import StaffList from './StaffList';

import PersistentDrawerLeft from '../../components/Drawer';
import SidebarIcon from '../../components/SidebarIcon';
import OnlyDrawer from '../../components/OnlyDrawer';

export default function AllStaff() {
    return (
        <div style={{  backgroundColor:"#FBFBFB"}}>
            {/* <PersistentDrawerLeft/> */}
            <SidebarIcon />
      <OnlyDrawer/>
            {/* <Box height={90} sx={{ direction: "ltr" }}  /> */}
            <Box sx={{ width: "87%", marginLeft:"170px", height:"617px"   }}>
                <div>
                   
                    <Link to='/AddStaff'>
                        <button className='btn btn-primary add-button' style={{marginBottom:"-10px", background:"#225C8B"}} >Add Staff</button>
                    </Link>
                </div>

                <StaffList/>
            </Box>
        </div>
    )
}
