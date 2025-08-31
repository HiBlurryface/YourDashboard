import React from "react";
import { Outlet } from "react-router";
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/ordinary/sidebar/Sidebar.js';

function Layout() {
    const location = useLocation().pathname.substr(1);

    return <div className="body__wrapper">
        <Sidebar />
        <div className="main">
            <h2 className="main__title">
                {location}
            </h2>
            <Outlet />
        </div>
    </div>
}

export default Layout;