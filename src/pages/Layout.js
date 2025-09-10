import React from "react";
import { Outlet, useMatches } from "react-router";
import Sidebar from '../components/ordinary/sidebar/Sidebar.js';

function Layout() {
    const matches = useMatches()
    const breadcrumbs = matches
        .filter((m) => m.handle && m.handle.breadcrumb)
        .map((m) => {
            const label =
                typeof m.handle.breadcrumb === "function"
                    ? m.handle.breadcrumb(m)
                    : m.handle.breadcrumb;

            return label;
        });

    return <div className="body__wrapper">
        <Sidebar />
        <div className="main">
            <h2 className="main__title">
                {breadcrumbs}
            </h2>
            <Outlet />
        </div>
    </div>
}

export default Layout;