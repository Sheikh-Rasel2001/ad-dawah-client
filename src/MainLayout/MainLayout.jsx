
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='pt-20'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;