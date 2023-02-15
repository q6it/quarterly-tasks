import React, { Dispatch, SetStateAction } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import weekOfYear from 'dayjs/plugin/weekOfYear';
dayjs.extend(weekOfYear);

import { TaskProps, TasksProps } from './Table';

type Props = {
    task: {
        text: string;
        start: string;
        end: string;
        quarter: number;
        description: string;
    };
    tasks: TasksProps[];
    setTasks: Dispatch<SetStateAction<TasksProps[]>>;
    currentQuarterWeeks: {
        id: number;
        week: number;
        quarter: number;
        weekDate: Dayjs;
        month: number;
    }[];
    quarter: number;
    setTask: Dispatch<SetStateAction<TaskProps>>;
    setQuarter: Dispatch<SetStateAction<number>>;
};

const TaskForm = ({
    task,
    tasks,
    setTasks,
    currentQuarterWeeks,
    quarter,
    setTask,
    setQuarter,
}: Props) => {
    const addRow = () => {
        if (tasks.length === 10 || !task.start || !task.end || !task.text) return;

        const startWeek = dayjs(task.start).week();
        const endWeek = dayjs(task.end).week();
        const startEndDiff = dayjs(task.end).diff(dayjs(task.start));

        if (startEndDiff < 0) return;

        const weekData = currentQuarterWeeks.filter(
            (x) => x.week <= endWeek && x.week >= startWeek,
        );

        let weekIds = weekData.map((week) => week.id);

        const id = tasks.length !== 0 ? tasks[tasks?.length - 1].id + 1 : 1;

        setTasks([
            ...tasks,
            { ...task, id, weekIds, text: task.text, quarter, color: 'bg-teal-500' },
        ]);
    };

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({ ...task, text: e.currentTarget.value });
    };

    const changeStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextQuarter = dayjs(e.currentTarget.value).quarter();

        setQuarter(nextQuarter);

        setTask({ ...task, start: e.currentTarget.value });
    };

    const changeEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({ ...task, end: e.currentTarget.value });
    };

    const changeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTask({ ...task, description: e.currentTarget.value });
    };

    return (
        <>
            <div className="m-auto flex max-w-md flex-col">
                <div className="mt-6 flex flex-col">
                    <div className="mt-6 flex items-center justify-between">
                        <label
                            htmlFor="task-input"
                            className="form-label w-55 inline-block text-gray-700"
                        >
                            Task name
                        </label>
                        <input
                            type="text"
                            className=" text-basefont-normal text-gray-700transition w-9/12 rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 ease-in-out focus:border-blue-300 focus:bg-white focus:text-gray-700 focus:outline-none"
                            id="task-input"
                            placeholder="Add task name here"
                            onChange={onNameChange}
                        />
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <div>
                            <label
                                htmlFor="task-start"
                                className="form-label mb-2 inline-block text-gray-700"
                            >
                                Start
                            </label>
                            <input
                                id="task-start"
                                type="date"
                                className="border-gray-300bg-white text-basefont-normal text-gray-700transition ml-2 rounded border border-solid bg-clip-padding px-3 py-1.5 ease-in-out focus:border-blue-300 focus:bg-white focus:text-gray-700 focus:outline-none"
                                onChange={changeStartDate}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="task-end"
                                className="form-label mb-2 inline-block text-gray-700"
                            >
                                End
                            </label>
                            <input
                                id="task-end"
                                type="date"
                                className="ml-2 rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5  text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-300 focus:bg-white focus:text-gray-700 focus:outline-none"
                                onChange={changeEndDate}
                            />
                        </div>
                    </div>
                </div>
                <textarea
                    className="form-control mt-6 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-300 focus:bg-white focus:text-gray-700 focus:outline-none"
                    id="task-description"
                    placeholder="Task description message"
                    onChange={changeDescription}
                ></textarea>
            </div>
            <button
                onClick={addRow}
                className="mt-4 rounded bg-teal-500  py-2 px-4 font-medium text-white hover:bg-teal-700"
            >
                Add task
            </button>
        </>
    );
};

export default TaskForm;
