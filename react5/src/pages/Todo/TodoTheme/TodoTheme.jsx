import React from "react";
import {
    THEME_TODO_LIGHT,
    THEME_TODO_DARK,
} from "../../../constants/todoConstants";

export default function TodoTheme({ themeMode, setThemeMode }) {
    const handleFilter = (e) => {
        const selectedTheme = e.target.value;
        setThemeMode(selectedTheme);
    };

    return (
        <div>
            <label htmlFor="">
                Choose theme mode:{" "}
                <select defaultValue={themeMode} onChange={handleFilter}>
                    <option value={THEME_TODO_LIGHT}>Light</option>
                    <option value={THEME_TODO_DARK}>Dark</option>
                </select>
            </label>
        </div>
    );
}