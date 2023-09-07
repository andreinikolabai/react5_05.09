import React from "react";
import "./style.sass";
import { ITEM_COMPLETED, ITEM_PROGRESS, FILTER_TODO_LIGHT} from "../../../../constants/TodoConstants";

export default function List({ list, deleteTask, completeTask, themeMode }) {
    const itemClass = (item) => {
        const classes = [];

        classes.push(item.completed ? ITEM_COMPLETED : ITEM_PROGRESS);

        return classes.join(" ");
    };

    return list.length ? (
        <div>
            <table className={themeMode === FILTER_TODO_LIGHT ? "light-theme" : "dark-theme"}>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {list.map((item, index) => (
                    <tr key={index} className={itemClass(item)}>
                        <td className={itemClass(item)}>
                            <strong>{item.rating}</strong>
                            {item.title}
                        </td>
                        <td>
                            {itemClass(item) === ITEM_COMPLETED ? (
                                <button onClick={() => deleteTask(index)}>Delete</button>
                            ) : (
                                <button onClick={() => completeTask(index)}>Complete</button>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    ) : null;
}