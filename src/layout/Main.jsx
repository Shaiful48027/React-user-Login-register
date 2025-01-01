
import { Outlet } from 'react-router-dom';
import Header from '../assets/components/header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;