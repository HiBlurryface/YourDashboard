import React from "react";
import { Outlet } from "react-router";
import Sidebar from '../components/ordinary/Sidebar';

function Layout() {
    return <div className="body__wrapper">
        <Sidebar />
        <div className="main">
            <Outlet />
        </div>
    </div>
}

export default Layout;