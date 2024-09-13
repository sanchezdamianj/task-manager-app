import React from "react";
import { Filters } from "./Filter";
import { type FilterValue } from "../types";


interface Props {
    activeCount: number;
    completedCount: number;
    filterSelected: FilterValue;
    onClearCompleted: () => void;
    handleFilterChange: (filter: FilterValue) => void;
}

export const Footer: React.FC<Props> = ({
    activeCount = 0,
    completedCount = 0,
    filterSelected,
    handleFilterChange,
    onClearCompleted
}) => {
    return (
        <footer className='footer'>
            <span className='todo-count'
            >
                <strong>{activeCount}</strong> Pending tasks
            </span>
            <Filters
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />
            {completedCount > 0 && (
                <button
                    className='clear-completed'
                    onClick={onClearCompleted}
                >
                    Clear completed tasks
                </button>
            )}
        </footer>
    )
}
