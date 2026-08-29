import { Route, Routes } from "react-router-dom";
import Home from "../cont/Home";
import Group_Detail from "../cont/study_group/Group_Detail";
import {Group_Home} from "../cont/study_group/Group_Home";
import Document from "../cont/study_group/Document";
import Group_Outline from "../cont/study_group/Group_Outline";
import Group_Create from "../cont/study_group/Group_Create";

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
        { path: '/detailGroup', element: <Group_Detail /> },
        { path: '/homeGroup', element: <Group_Home/> },
        { path: '/document', element: <Document/> },
        { path: '/outline', element: <Group_Outline/> },

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