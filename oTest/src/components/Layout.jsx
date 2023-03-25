import React from 'react';
import Header from "./Header.jsx";
import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";
const Layout = () => {
    return (
        <>
            <Header/>
            <Box>
                <Outlet/>
            </Box>
            {/*<Footer/>*/}
        </>
    );
};

export default Layout;
