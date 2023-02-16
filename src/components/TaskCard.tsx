import { Dispatch, ReactNode, SetStateAction, useState } from 'react';

import { TasksProps } from './Table';

type Props = {
    header: string;
    description: string;
    id: number;
    tasks: TasksProps[];
    setTasks: Dispatch<SetStateAction<TasksProps[]>>;
};

const TaskCard = ({ header, description, id, tasks, setTasks }: Props) => {
    const [isDescriptionShown, setIsDescriptionShown] = useState(false);

    const onHover = () => {
        setIsDescriptionShown(true);
    };

    const onLeave = () => {
        setIsDescriptionShown(false);
    };

    const deleteTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const id = e.currentTarget.id;
        const remainingTasks = tasks.filter((task) => task.id !== Number(id));
        setTasks([...remainingTasks]);
    };

    return (
        <div
            className="relative block max-w-sm  rounded-lg p-2 shadow hover:bg-gray-100"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            key={id}
        >
            <button
                id={`${id}`}
                className=" absolute top-0 right-0 rounded py-1 px-2 text-2xl"
                onClick={deleteTask}
            >
                x
            </button>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 ">{header}</h5>
            {isDescriptionShown && <p className="font-normal text-gray-700">{description}</p>}
        </div>
    );
};

export default TaskCard;
