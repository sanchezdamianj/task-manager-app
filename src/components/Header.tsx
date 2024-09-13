import { TodoTitle } from "../types";
import { CreateTask } from "./CreateTask";

interface Props {
    onAddTodo: ({ title }: TodoTitle) => void;
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {


    return (
        <header className='header'>
            <h1>Task to do</h1>
            <CreateTask saveTodo={onAddTodo} />
        </header>
    )
}
