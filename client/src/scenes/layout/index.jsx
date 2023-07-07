import React from 'react';
import { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from "components/navbar";
import Sidebar from "componenets/Sidebar";

const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebaropen, setIsSidebaropen] = useState(true);

  return (
    <Box diplay={isNonMobile ? "flex":"block"} width="100%" height="100%">
        <Sidebar 
            isNonMobile={isNonMobile}
            drawerWidth="250px"
            isSidebaropen={isSidebaropen}
            setIsSidebaropen={isSidebaropen}
        />
        <Box>
            <Navbar 
                isSidebaropen={isSidebaropen}
                setIsSidebaropen={isSidebaropen}
            />
            <Outlet />
        </Box>
    </Box>
  )
}

export default Layout