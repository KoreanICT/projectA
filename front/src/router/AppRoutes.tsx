import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "../cont/Home";
import AdminHome from "../cont/admin/AdminHome";

import Layout from "../layout/Layout";
import AdminLayout from "../layout/admin/AdminLayout";
import MemberManagement from "../cont/admin/member/MemberManagement";
import BoardManagement from "../cont/admin/board/BoardManagement";

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

        // common
        { path: "/", element: <Home /> },


        // admin
        { path: "/admin", element: <AdminHome /> },
        { path: "/admin/memberManagement", element: <MemberManagement /> },
        { path: "/admin/boardManagement", element: <BoardManagement /> },

        // user? auth? account?
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