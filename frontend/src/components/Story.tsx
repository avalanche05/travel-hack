import { useState } from 'react';
import { IStory } from '../api/models/IStory';
import { Button, Modal, Steps } from 'antd';

type Props = {
    story: IStory;
    index: number;
};

const Story = ({ story, index }: Props) => {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setOpen(false);
        setCurrent(0);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const next = () => {
        setCurrent(current + 1);
    };

    const items = story.steps.map((item, index) => ({ key: item.id, title: index + 1 }));

    return (
        <>
            <div onClick={showModal} className='flex flex-col justify-center px-2 cursor-pointer'>
                <div className='flex overflow-hidden relative flex-col pt-3 w-full aspect-[0.67]'>
                    <img
                        loading='lazy'
                        srcSet={story.steps[0].image}
                        className='object-cover absolute inset-0 size-full'
                    />
                    <div className='flex relative gap-1 justify-center self-end p-1 text-xs font-medium leading-4 text-black bg-orange-100 rounded-lg'>
                        <div className='my-auto'>+ 2</div>
                        <img
                            loading='lazy'
                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/5a9d4b0d72a72b9758439d921c0e69a4e213a34653cddd34f158ae7fb928a5c0?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                            className='shrink-0 w-6 aspect-square'
                        />
                    </div>
                    <div className='flex relative flex-col pt-8 mt-16 w-full rounded-2xl'>
                        <div className='flex flex-col justify-center px-3 py-4 w-full'>
                            <div className='shrink-0 h-1' />
                            <div className='flex flex-col justify-center self-center p-1 w-14 text-xl leading-6 text-center text-white whitespace-nowrap border-white border-solid border-[3px] rounded-[48px]'>
                                <div className='justify-center items-center px-2 w-full h-10 py-2 bg-stone-900 rounded-[30px]'>
                                    {index + 1}
                                </div>
                            </div>
                            <div className='text-base font-semibold leading-6 text-center text-stone-900'></div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal open={open} onOk={handleOk} onCancel={handleCancel} footer={[]}>
                <div className='py-2'>
                    <Steps current={current} items={items} />

                    <div className='steps-content'>
                        <img
                            loading='lazy'
                            srcSet={story.steps[current].image}
                            className='object-cover w-full h-96'
                        />
                    </div>

                    <div className='text-lg leading-6  text-zinc-800 mt-2 mb-2'>
                        {story.steps[current].title}
                    </div>

                    {story.steps[current].options.map((option) => (
                        <div key={option.id} className='steps-content'>
                            <Button
                                onClick={() => {
                                    if (current === items.length - 1) {
                                        handleOk();
                                    } else {
                                        next();
                                    }
                                }}
                                type={story.steps[current].is_quiz ? 'default' : 'primary'}
                                className='w-full mt-2'
                            >
                                {option.label}
                            </Button>
                        </div>
                    ))}
                </div>
            </Modal>
        </>
    );
};

export default Story;
