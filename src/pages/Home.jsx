import Sidebar from "../components/Sidebar";
import Tasks from "../components/Tasks";

import "./Home.scss";

const nome = "Gabriel";

const Home = () => {
    return (
        <div className="home-container">
            <Sidebar />
            <Tasks />

            <div>{nome}</div>
        </div>
    );
};

export default Home;
