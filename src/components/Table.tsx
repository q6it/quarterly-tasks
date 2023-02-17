import { useState } from 'react';

import dayjs, { extend } from 'dayjs';

import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import isoWeek from 'dayjs/plugin/isoWeek';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';

import TaskCard from './TaskCard';
import TaskForm from './TaskForm';
import CustomModal from './CustomModal';

dayjs.extend(quarterOfYear);
dayjs.extend(isoWeek);
dayjs.extend(isLeapYear);
dayjs.extend(isoWeeksInYear);

export interface TasksProps {
    id: number;
    weekIds: number[];
    header: string;
    quarter: number;
    color: string;
    description: string;
}
export interface TaskProps {
    header: string;
    start: string;
    end: string;
    quarter: number;
    description: string;
}

const Table = () => {
    const [task, setTask] = useState<TaskProps>({
        header: '',
        start: '',
        end: '',
        quarter: 1,
        description: '',
    });
    const [tasks, setTasks] = useState<TasksProps[]>([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log('TCL: TaskCard -> isModalOpen', isModalOpen);

    const currentQuarter = dayjs().quarter();
    const [quarter, setQuarter] = useState(currentQuarter);

    const weeks = dayjs().isoWeeksInYear();

    const weeksArray = [];

    for (let i = 1; i < weeks + 1; i++) {
        const weekDate = dayjs().isoWeek(i);
        const week = dayjs(weekDate).week();

        const quarter = dayjs(weekDate).quarter();
        const month = dayjs(weekDate).month();

        weeksArray.push({ id: i, week, quarter, weekDate, month });
    }

    const currentQuarterWeeks = weeksArray.filter((obj) => obj.quarter === quarter);

    const currentQuarterMonths = [
        ...new Set(
            currentQuarterWeeks.map((week) => {
                return dayjs().month(week.month).format('MMMM');
            }),
        ),
    ];

    const handlePrev = () => {
        if (quarter > 1) {
            setQuarter(quarter - 1);
        }
    };

    const handleNext = () => {
        if (quarter < 4) {
            setQuarter(quarter + 1);
        }
    };

    return (
        <>
            <CustomModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                header={task.header}
                description={task.description}
            />
            <TaskForm
                task={task}
                tasks={tasks}
                setTasks={setTasks}
                quarter={quarter}
                currentQuarterWeeks={currentQuarterWeeks}
                setTask={setTask}
                setQuarter={setQuarter}
            />
            <div className="mt-6 flex flex-col">
                <div className="flex flex-row justify-around">
                    {currentQuarterMonths.length &&
                        currentQuarterMonths.map((month) => (
                            <h2
                                key={month}
                                className="mt-0 mb-2 text-4xl font-medium leading-tight text-gray-800"
                            >
                                {month}
                            </h2>
                        ))}
                </div>
                <table className="w-full table-auto text-left">
                    <thead>
                        <tr className="bg-gray-300 text-xs font-medium uppercase tracking-wide text-gray-800">
                            {currentQuarterWeeks.map((week) => (
                                <th key={week.id} className="border border-black p-2">
                                    Week {week.week}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.length !== 0 &&
                            tasks.map(
                                (task) =>
                                    task.quarter === quarter && (
                                        <tr key={task.id}>
                                            {currentQuarterWeeks.map((week) => (
                                                <td
                                                    key={week.id}
                                                    className={`${
                                                        task?.weekIds?.includes(week.id)
                                                            ? task.color
                                                            : ''
                                                    } max-w-xs break-all border border-gray-400 p-2`}
                                                >
                                                    {task?.weekIds?.includes(week.id) &&
                                                        week.id === task?.weekIds[0] && (
                                                            <TaskCard
                                                                header={task.header}
                                                                description={task.description}
                                                                id={task.id}
                                                                tasks={tasks}
                                                                setTasks={setTasks}
                                                                setIsModalOpen={setIsModalOpen}
                                                            />
                                                        )}
                                                </td>
                                            ))}
                                        </tr>
                                    ),
                            )}
                    </tbody>
                </table>
                <div className="mt-5 flex justify-between">
                    <button
                        onClick={handlePrev}
                        className="rounded bg-gray-200 py-2 px-4 font-bold text-slate-800 hover:bg-teal-200"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        className="rounded bg-gray-200 py-2 px-4 font-bold text-slate-800 hover:bg-teal-200"
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default Table;
