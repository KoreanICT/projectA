import { Route, Routes } from "react-router-dom";
import Home from "../cont/Home";
import {Group_Home} from "../cont/study_group/Group_Home";
import Group_Create from "../cont/study_group/Group_Create";
import { Group_Detail } from "../cont/study_group/Group_Detail";

interface RouteItem {
    path: string;
    element: React.ReactElement;
    private?: boolean;
    role?: string;
}

const AppRoutes: React.FC = () => {
    const routeList = [
        { path: '/', element: <Home /> },


        { path: '/createGroup', element: <Group_Create /> },
        { path: '/homeGroup', element: <Group_Home/> },
        { path: '/group/detail', element: <Group_Detail/> },

    ]
    return (
        <Routes>
            {
                routeList.map((route, idx) => (
                    <Route key={idx} {...route} />
                ))
            }
        </Routes>
    )
}

export default AppRoutes