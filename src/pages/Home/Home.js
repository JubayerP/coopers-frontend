import React from "react";
import Banner from "../Banner/Banner";
import List from "../List/List";
import TodoList from "../List/List";
import Modal from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import TodoListBadge from "../TodoListBadge/TodoListBadge";
import TodoLists from "../TodoLists/TodoLists";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <TodoListBadge />
            {/* <TodoLists /> */}
            <List />
            <Modal />
            {/* <TodoList /> */}
        </div>
    )
}

export default Home;