import React, { useState, useEffect } from 'react';
import List from './../components/Todo/TodoComponents/List/List';
import ThemeMode from "./Todo/TodoComponents/ThemeMode/ThemeMode";
import Statistics from "./Todo/TodoComponents/Statistics/Statistics";

export default function Todo() {
    const [list, setList] = useState([]);
    const [themeMode, setThemeMode] = useState("light");

    useEffect(() => {
        async function fetchData() {
            try {
                let request = await fetch(
                    "https://61498bf2035b3600175ba32f.mockapi.io/todo"
                );
                let response = await request.json();

                setList(response);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    const handleDeleteTask = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    };

    const handleCompleteTask = (index) => {
        const newList = [...list];
        newList[index].completed = true;
        setList(newList);
    };

    return (
        <>
            <ThemeMode themeMode={themeMode} setThemeMode={setThemeMode} />
            <Statistics list={list} />
            <List
                list={list}
                themeMode={themeMode}
                deleteTask={handleDeleteTask}
                completeTask={handleCompleteTask}
            />
        </>
    );
}