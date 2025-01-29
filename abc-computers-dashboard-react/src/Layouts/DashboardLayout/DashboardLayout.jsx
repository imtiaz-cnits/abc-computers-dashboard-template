
import { Outlet } from 'react-router';
import DashboardNavbar from '../../Components/Dashboard/DashboardNavbar/DashboardNavbar';
import './DashboardLayout.css'

const DashboardLayout = () => {
    return (
        <>
            <DashboardNavbar />
            <Outlet />
        </>
    );
};

export default DashboardLayout;