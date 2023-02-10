import React from "react";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import TodoListBadge from "../TodoListBadge/TodoListBadge";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <TodoListBadge />
        </div>
    )
}

export default Home;