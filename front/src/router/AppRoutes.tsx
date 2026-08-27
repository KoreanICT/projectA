import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "../cont/Home";
import AdminHome from "../cont/admin/AdminHome";

import Layout from "../layout/Layout";
import AdminLayout from "../layout/admin/AdminLayout";

interface RouteItem {
    path: string;
    element: React.ReactElement;
    private?: boolean;
    role?: string;
}

const AppRoutes: React.FC = () => {
    const { pathname } = useLocation();

    const isManage = pathname.startsWith("/admin");

    const routeList: RouteItem[] = [
        { path: "/", element: <Home /> },
        { path: "/admin", element: <AdminHome /> },
    ];

    return (
        <>
            {isManage ? (
                <AdminLayout>
                    <Routes>
                        {routeList.map((route, idx) => (
                            <Route key={idx} {...route} />
                        ))}
                    </Routes>
                </AdminLayout>
            ) : (
                <Layout>
                    <Routes>
                        {routeList.map((route, idx) => (
                            <Route key={idx} {...route} />
                        ))}
                    </Routes>
                </Layout>
            )}
        </>
    );
};

export default AppRoutes;