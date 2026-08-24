import { Route, Routes } from "react-router-dom";
import Home from "../cont/Home";

interface RouteItem {
    path: string;
    element: React.ReactElement;
    private?: boolean;
    role?: string;
}

const AppRoutes: React.FC = () => {
    const routeList = [
        { path: '/', element: <Home /> },
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