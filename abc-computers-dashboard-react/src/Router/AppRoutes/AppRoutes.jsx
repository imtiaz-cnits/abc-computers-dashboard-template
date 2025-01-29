import { Route, Routes } from 'react-router';
import App from '../../App';
import DashboardLayout from '../../Layouts/DashboardLayout/DashboardLayout';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<App />} />
            <Route path='/dashboard' element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;