import React from 'react'

import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import StaffList from './StaffList';
import Sidenav from '../../components/Sidenav';

export default function AllStaff() {
    return (
        <div>
            <Sidenav/>
            {/* <Box height={90} sx={{ direction: "ltr" }}  /> */}
            <Box sx={{ width: "88%", marginLeft:"170px" }}>
                <div>
                   
                    <Link to='/AddStaff'>
                        <button className='btn btn-primary add-button' >Add Staff</button>
                    </Link>
                </div>

                <StaffList/>
            </Box>
        </div>
    )
}
