import React from "react";
import {
    FILTER_TODO_LIGHT,
    FILTER_TODO_DARK,
} from "../../../../constants/TodoConstants";

export default function ThemeMode({ themeMode, setThemeMode }) {
    const handleFilter = (e) => {
        const selectedTheme = e.target.value;
        setThemeMode(selectedTheme);
    };

    return (
        <div>
            <label htmlFor="">
                Choose theme mode:{" "}
                <select defaultValue={themeMode} onChange={handleFilter}>
                    <option value={FILTER_TODO_LIGHT}>Light</option>
                    <option value={FILTER_TODO_DARK}>Dark</option>
                </select>
            </label>
        </div>
    );
}