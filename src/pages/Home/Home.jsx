import { Outlet } from "react-router-dom";
import Links from "../../components/Home/Links/Links";
import Navbar from "../../components/shared/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex">
                <div className="w-96 mr-4">
                    <Links></Links>
                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;