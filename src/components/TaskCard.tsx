import { Dispatch, ReactNode, SetStateAction, useState } from 'react';

import { TasksProps } from './Table';

type Props = {
    header: string;
    description: string;
    id: number;
    tasks: TasksProps[];
    setTasks: Dispatch<SetStateAction<TasksProps[]>>;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

const TaskCard = ({ header, description, id, tasks, setTasks, setIsModalOpen }: Props) => {
    const [isDescriptionShown, setIsDescriptionShown] = useState(false);

    // const onHover = () => {
    //     setIsDescriptionShown(true);
    // };

    // const onLeave = () => {
    //     setIsDescriptionShown(false);
    // };

    const deleteTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const id = e.currentTarget.id;
        const remainingTasks = tasks.filter((task) => task.id !== Number(id));
        setTasks([...remainingTasks]);
    };

    const handleModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div
            className="relative mb-2 block w-44 rounded-lg border border-gray-200 bg-slate-100 p-4 shadow"
            // onMouseEnter={onHover}
            // onMouseLeave={onLeave}
        >
            <button
                id={`${id}`}
                className=" absolute top-0 right-0 rounded py-2 px-4 text-base"
                onClick={deleteTask}
            >
                x
            </button>
            <h5 className="w-24 text-sm font-bold tracking-tight text-gray-900">{header}</h5>
            <p className="m-0 w-24 font-normal text-gray-700">
                {description.length >= 50 ? description.slice(0, 50) + ' ...' : description}
            </p>
            <button
                type="button"
                className="mt-2 mr-2 mb-2 rounded-lg border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-teal-800 dark:bg-gray-600 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                onClick={handleModal}
            >
                More info&hellip;
            </button>
            {/* {isDescriptionShown && <p className="font-normal text-gray-700">{description}</p>} */}
        </div>
    );
};

export default TaskCard;
