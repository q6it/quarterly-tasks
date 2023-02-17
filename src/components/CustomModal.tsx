import { Dispatch, SetStateAction, memo } from 'react';
import dayjs from 'dayjs';
import Modal from 'react-modal';

type CustomModalProps = {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    header: string;
    description: string;
    startDate: string;
    endDate: string;
};

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        paddingTop: '1rem',
    },
};

Modal.setAppElement('#root');

const CustomModal = memo(
    ({
        isModalOpen,
        setIsModalOpen,
        header,
        description,
        startDate,
        endDate,
    }: CustomModalProps) => {
        const handleClose = () => {
            setIsModalOpen(false);
        };

        return (
            <Modal isOpen={isModalOpen} style={customStyles} contentLabel="Example Modal">
                <div
                    className="fade h-full w-full"
                    id="modal"
                    tabIndex={100}
                    aria-labelledby="exampleModalCenterTitle"
                    aria-modal="true"
                    role="dialog"
                >
                    <div className="modal-dialog modal-dialog-centered pointer-events-none relative w-auto">
                        <div className="modal-content pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding p-1 text-current outline-none">
                            <div className="modal-header flex flex-shrink-0 flex-col  rounded-t-md border-b border-gray-200 py-2">
                                <h5
                                    className="break-words text-xl font-medium leading-normal text-gray-800"
                                    id="modal-header"
                                >
                                    {header}
                                </h5>
                                <p className="my-2 text-xs text-slate-500">
                                    {dayjs(startDate).format('MMM DD')} -{' '}
                                    {dayjs(endDate).format('MMM DD')}
                                </p>
                            </div>
                            <div className="modal-body relative my-2 max-w-xs p-1">
                                <p>{description}</p>
                            </div>
                            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t border-gray-200 pt-6">
                                <button
                                    type="button"
                                    className="inline-block rounded bg-teal-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg"
                                    data-bs-dismiss="modal"
                                    onClick={handleClose}
                                >
                                    Close
                                </button>
                                {/* <button
                                   type="button"
                                   className="ml-1 inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                               >
                                   Save changes
                               </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    },
);

export default CustomModal;
