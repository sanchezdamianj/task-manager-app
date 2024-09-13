import { useState } from 'react';
import { TodoTitle } from "../types";

interface Props {
    saveTodo: ({ title }: TodoTitle) => void;
}

export const CreateTask: React.FC<Props> = ({ saveTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (inputValue) {
            saveTodo({ title: inputValue });
            setInputValue('');
        }
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter' && inputValue) {
            saveTodo({ title: inputValue });
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className='new-todo'
                placeholder='What needs to be done?'
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
            />
        </form>
    )
}
