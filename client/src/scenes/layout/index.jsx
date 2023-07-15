import React from 'react';
import { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from "components/Navbar";
import Sidebar from "componenets/Sidebar";
import { useGetUserQuery } from 'state/api';

const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebaropen, setIsSidebaropen] = useState(true);
    const userId = useSelector((state) => state.global.userId);
    const { data } = useGetUserQuery(userId);
    console.log("data", data);

  return (
    <Box diplay={isNonMobile ? "flex":"block"} width="100%" height="100%">
        <Sidebar 
            user = {data || {}} // to prevent undefined data behaviour
            isNonMobile={isNonMobile}
            drawerWidth="250px"
            isSidebaropen={isSidebaropen}
            setIsSidebaropen={isSidebaropen}
        />
        <Box>
            <Navbar 
                user = { data || {}}
                isSidebaropen={isSidebaropen}
                setIsSidebaropen={isSidebaropen}
            />
            <Outlet />
        </Box>
    </Box>
  )
}

export default Layout