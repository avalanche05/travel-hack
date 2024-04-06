import { Button } from 'antd';
import { IEvent } from '../api/models/IEvent';
import { Link } from 'react-router-dom';

type Props = {
    event: IEvent;
};

const Event = ({ event }: Props) => {
    return (
        <div>
            <Link to={`/places-details/${event.id}`}>
                <div className='flex flex-col rounded-3xl bg-neutral-100'>
                    <div className='flex overflow-hidden relative flex-col justify-between px-4 w-full rounded-2xl aspect-[1.65]'>
                        <img
                            loading='lazy'
                            srcSet={event.image}
                            className='object-cover absolute inset-0 size-full'
                        />
                        <div className='flex relative flex-col'>
                            <div className='flex flex-col justify-center items-start'>
                                <div className='shrink-0 w-px h-4 bg-white' />
                            </div>
                            <div className='flex gap-2'>
                                <div className='flex flex-col flex-wrap flex-1 content-center'>
                                    <div className='flex gap-2 px-0.5'>
                                        <div className='justify-center items-center p-2 w-10 h-10 text-xs font-medium leading-4 text-white whitespace-nowrap bg-teal-700 rounded-lg'>
                                            8.8
                                        </div>
                                        <div className='flex justify-center items-center p-1 bg-orange-100 rounded-lg max-w-[160px]'>
                                            <img
                                                loading='lazy'
                                                srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/1c51f81f20ceec6e726a5b6a03c533bf3d125a6e106f3338328a9f8d3f3e4bcb?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c51f81f20ceec6e726a5b6a03c533bf3d125a6e106f3338328a9f8d3f3e4bcb?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c51f81f20ceec6e726a5b6a03c533bf3d125a6e106f3338328a9f8d3f3e4bcb?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c51f81f20ceec6e726a5b6a03c533bf3d125a6e106f3338328a9f8d3f3e4bcb?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c51f81f20ceec6e726a5b6a03c533bf3d125a6e106f3338328a9f8d3f3e4bcb?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c51f81f20ceec6e726a5b6a03c533bf3d125a6e106f3338328a9f8d3f3e4bcb?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c51f81f20ceec6e726a5b6a03c533bf3d125a6e106f3338328a9f8d3f3e4bcb?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c51f81f20ceec6e726a5b6a03c533bf3d125a6e106f3338328a9f8d3f3e4bcb?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                className='aspect-[2.22] w-[88px]'
                                            />
                                        </div>
                                        <div className='flex justify-center items-center px-2 py-1 w-10 h-10 bg-orange-100 rounded-lg'>
                                            <img
                                                loading='lazy'
                                                src='https://cdn.builder.io/api/v1/image/assets/TEMP/b67987e43e99caa49d4de4a36cc6a86e825866cf66c17504ad1cc6fe6f39987a?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                className='w-6 aspect-square'
                                            />
                                        </div>
                                        <div className='flex justify-center items-center p-1 w-10 h-10 bg-orange-100 rounded-lg'>
                                            <img
                                                loading='lazy'
                                                src='https://cdn.builder.io/api/v1/image/assets/TEMP/5a9d4b0d72a72b9758439d921c0e69a4e213a34653cddd34f158ae7fb928a5c0?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                className='w-6 aspect-square'
                                            />
                                        </div>
                                        <div className='flex justify-center items-center p-1 bg-orange-100 rounded-lg'>
                                            <img
                                                loading='lazy'
                                                srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/31e0e40c84d7690fcf7685478ad08d7e6e90327aadf0b616af92a1034b6fcc11?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/31e0e40c84d7690fcf7685478ad08d7e6e90327aadf0b616af92a1034b6fcc11?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31e0e40c84d7690fcf7685478ad08d7e6e90327aadf0b616af92a1034b6fcc11?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/31e0e40c84d7690fcf7685478ad08d7e6e90327aadf0b616af92a1034b6fcc11?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/31e0e40c84d7690fcf7685478ad08d7e6e90327aadf0b616af92a1034b6fcc11?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31e0e40c84d7690fcf7685478ad08d7e6e90327aadf0b616af92a1034b6fcc11?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/31e0e40c84d7690fcf7685478ad08d7e6e90327aadf0b616af92a1034b6fcc11?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/31e0e40c84d7690fcf7685478ad08d7e6e90327aadf0b616af92a1034b6fcc11?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                className='w-14 aspect-[2.78]'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center px-1 mt-2 w-10 h-10 bg-orange-100 rounded-lg'>
                                        <img
                                            loading='lazy'
                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/ace2a50c086ce0f1fa91b86080db6f2bfbde1e147da8030924338aa7163e9239?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                            className='w-full aspect-square'
                                        />
                                    </div>
                                </div>
                                <div className='flex justify-center items-center self-start px-2 w-10 h-10 rounded-lg backdrop-blur-sm bg-stone-900 bg-opacity-30'>
                                    <img
                                        loading='lazy'
                                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/87b5b1261b66603c0e005eefb242f6fad43a833712fe1fd6572bfe80f075c9f7?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                        className='w-6 aspect-square'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex relative flex-col justify-center mt-32'>
                            <div className='flex flex-col'>
                                <div className='shrink-0 self-center w-12 h-1.5' />
                                <div className='flex flex-col justify-center items-start'>
                                    <div className='shrink-0 w-px h-2 bg-white' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between px-4 w-full'>
                        <div className='flex flex-col'>
                            <div className='flex flex-col justify-center items-start'>
                                <div className='shrink-0 w-px h-4 bg-white' />
                            </div>
                            <div className='text-xl leading-6 text-ellipsis text-stone-900'>
                                {event.title}
                            </div>
                            <div className='flex flex-col justify-center items-start'>
                                <div className='shrink-0 w-px h-2 bg-white' />
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-col justify-center text-xs leading-5 text-stone-900'>
                                    <div className='flex flex-col justify-center'>
                                        <div className='flex gap-1'>
                                            <img
                                                loading='lazy'
                                                src='https://cdn.builder.io/api/v1/image/assets/TEMP/875314e31e8e9b1494a857db7e2d7437684ad896f4a8b41345577859cb7e508e?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                className='shrink-0 self-start w-4 aspect-square'
                                            />
                                            <div className='flex-1 text-ellipsis'>
                                                ул. Большая Грузинская, 1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='shrink-0 h-1' />
                                <div className='flex flex-wrap gap-3 content-start'>
                                    <div className='flex gap-1'>
                                        <div className='flex justify-center items-center self-start'>
                                            <img
                                                loading='lazy'
                                                src='https://cdn.builder.io/api/v1/image/assets/TEMP/41082a07141bd725725b2ec97e0759c9b4d599a5ea49d17ac552c88fa05afb70?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                className='w-4 aspect-square'
                                            />
                                        </div>
                                        <div className='text-xs leading-5 text-stone-900'>
                                            Зоопарк
                                        </div>
                                    </div>
                                    <div className='flex flex-1 gap-1 text-xs leading-5 whitespace-nowrap text-stone-900'>
                                        <img
                                            loading='lazy'
                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/f91d574c9b2fb67830d8e7c9342b508518f06cd9a4b286fad1e4c5225a9afe5a?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                            className='shrink-0 self-start w-4 aspect-square'
                                        />
                                        <div className='flex-1 text-ellipsis'>Баррикадная</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col mt-14'>
                            <div className='flex flex-col justify-center font-medium text-center'>
                                <Button style={{ height: 'auto' }} type='primary'>
                                    <div className='flex flex-col'>
                                        <div className='text-base leading-6 text-stone-900'>
                                            от 5 400 ₽
                                        </div>
                                        <div className='text-xs leading-4 text-stone-900 text-opacity-50'>
                                            Купить билеты
                                        </div>
                                    </div>
                                </Button>
                            </div>
                            <div className='flex flex-col justify-center items-start'>
                                <div className='shrink-0 w-px h-4 bg-white' />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Event;
