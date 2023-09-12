import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import "./style.sass";
import { ITEM_COMPLETED, ITEM_PROGRESS } from "../../constants/todoConstants";

export default function TodoListItem({
                                         item,
                                         handleItemCompleted,
                                         handleItemDelete,
                                     }) {
    const itemClass = (item) => {
        const classes = [`list__item`];
        classes.push(item.completed ? ITEM_COMPLETED : ITEM_PROGRESS);
        return classes.join(` `);
    };

    return (
        <tr>
            <td className="title-column">
                <ListItemButton
                    onClick={() => handleItemCompleted(item)}
                    sx={{ mb: 1 }}
                    className={itemClass(item)}
                >
                    <strong>{item.rating}</strong> {item.title}
                </ListItemButton>
            </td>
            <td className="action-column">
                {item.completed ? (
                    <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={(e) => handleItemDelete(e, item.id)}
                    >
                        <DeleteIcon style={{ color: 'grey' }} />
                    </IconButton>
                ) : (
                    <IconButton
                        edge="end"
                        aria-label="check-in"
                        onClick={() => handleItemCompleted(item)}
                    >
                        <CheckIcon style={{ color: 'grey' }} />
                    </IconButton>
                )}
            </td>
        </tr>
    );
}