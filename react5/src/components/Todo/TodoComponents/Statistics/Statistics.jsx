import React from "react";

export default function Statistics({list}) {
    const completedTasks = list.filter((item) => item.completed).length;
    const inProgressTasks = list.filter((item) => !item.completed).length;

    return (
        <div>
            <ul>
                <li>All tasks: {list.length}</li>
                <li>Completed tasks: {completedTasks}</li>
                <li>In progress tasks: {inProgressTasks}</li>
            </ul>
        </div>
    );
}