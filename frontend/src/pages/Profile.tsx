import { Content } from 'antd/es/layout/layout';
import Header from '../components/Header';
import { useMediaQuery } from 'react-responsive';
import { Col, Row, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { StoriesApiServiceInstanse } from '../api/StoriesService';
import { IStory } from '../api/models/IStory';
import Story from '../components/Story';

const Profile = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1100px)' });
    const [stories, setStories] = useState<IStory[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await StoriesApiServiceInstanse.getStories();
                setStories(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

        return () => {
            setStories([]);
        };
    }, []);

    return (
        <>
            <Header />

            <Content className='container mx-auto max-w px-2 mt-10' style={{ maxWidth: '1000px' }}>
                <Row>
                    {!isTabletOrMobile && (
                        <Col span={8}>
                            <div className='flex flex-col self-stretch pb-8 max-w-[288px]'>
                                <div className='flex flex-col px-3 pb-10 w-full whitespace-nowrap'>
                                    <div className='flex gap-4'>
                                        <img
                                            loading='lazy'
                                            srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/ab725fbbece547ffb212f442e8135ea319cdb583c6c97116374045e46730deea?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab725fbbece547ffb212f442e8135ea319cdb583c6c97116374045e46730deea?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab725fbbece547ffb212f442e8135ea319cdb583c6c97116374045e46730deea?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab725fbbece547ffb212f442e8135ea319cdb583c6c97116374045e46730deea?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab725fbbece547ffb212f442e8135ea319cdb583c6c97116374045e46730deea?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab725fbbece547ffb212f442e8135ea319cdb583c6c97116374045e46730deea?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab725fbbece547ffb212f442e8135ea319cdb583c6c97116374045e46730deea?apiKey=f021ca4e16f44433b9822e9ffa5d2300&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab725fbbece547ffb212f442e8135ea319cdb583c6c97116374045e46730deea?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                            className='shrink-0 aspect-square w-[70px]'
                                        />
                                        <div className='flex flex-col flex-1 my-auto'>
                                            <div className='text-xl leading-6 text-stone-900'>
                                                Александр
                                            </div>
                                            <div className='shrink-0 h-1' />
                                            <div className='text-xs leading-5 text-neutral-500'>
                                                sashazol@mail.ru
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col w-full'>
                                    <div className='flex gap-2 p-3 text-base font-medium leading-6 bg-slate-200 rounded-xl text-stone-900'>
                                        <img
                                            loading='lazy'
                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/6cb3cfe400dc6dafb4f5260acd984e39f6f6e0d928ce1c640726d707528e15bd?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                            className='shrink-0 w-6 aspect-square'
                                        />
                                        <div className='flex flex-col flex-1 justify-center'>
                                            <div className='justify-center'>
                                                Билеты и бронирования
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-2 p-3 mt-4 font-medium rounded-xl text-stone-900'>
                                        <img
                                            loading='lazy'
                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/0b1df8d11f7852154b5ff542e04872dbd13f819f19123711e0dd5e9d74f592a6?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                            className='shrink-0 w-6 aspect-square'
                                        />
                                        <div className='flex flex-col flex-1 justify-center'>
                                            <div className='flex gap-2'>
                                                <div className='text-base leading-6'>Бонусы </div>
                                                <div className='flex flex-col justify-center text-xs leading-4 whitespace-nowrap'>
                                                    <div className='flex gap-0 justify-center py-1 pr-1 bg-stone-900 bg-opacity-10 rounded-[30px]'>
                                                        <div className='flex-1'>500</div>
                                                        <img
                                                            loading='lazy'
                                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/941807b9ba372576bbf3d5178a6524941917b83d53d08df097456503b81fe48b?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                            className='shrink-0 w-4 aspect-square'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-2 p-3 mt-4 text-base font-medium leading-6 rounded-xl text-stone-900'>
                                        <img
                                            loading='lazy'
                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/0b1df8d11f7852154b5ff542e04872dbd13f819f19123711e0dd5e9d74f592a6?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                            className='shrink-0 w-6 aspect-square'
                                        />
                                        <div className='flex flex-col flex-1 justify-center'>
                                            <div className='flex gap-2'>
                                                <div>Подписка на страховку</div>
                                                <img
                                                    loading='lazy'
                                                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/f290b4a534dce236cdcf33f4a31996733994368bc83f3e41b87418138571b28a?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                    className='shrink-0 w-6 aspect-square'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-2 p-3 mt-4 font-medium rounded-xl text-stone-900'>
                                        <img
                                            loading='lazy'
                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/97dc25f83b7a3b219a21da80169b58ad93da84bb15f973349a42871fea7b9155?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                            className='shrink-0 w-6 aspect-square'
                                        />
                                        <div className='flex flex-col flex-1 justify-center'>
                                            <div className='flex gap-2'>
                                                <div className='text-base leading-6'>
                                                    Вопросы и ответы
                                                </div>
                                                <div className='flex flex-col justify-center text-xs leading-4 whitespace-nowrap'>
                                                    <div className='justify-center p-1 bg-yellow-400 rounded-[30px]'>
                                                        5
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-2 p-3 mt-4 text-base font-medium leading-6 rounded-xl text-stone-900'>
                                        <img
                                            loading='lazy'
                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/da8dea1763fd004aaaad5f01bb641768c32546f578c02326a0f7b5067968bbd5?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                            className='shrink-0 w-6 aspect-square'
                                        />
                                        <div className='flex flex-col flex-1 justify-center'>
                                            <div className='justify-center'>Личная информация</div>
                                        </div>
                                    </div>
                                    <div className='flex gap-2 p-3 mt-4 rounded-xl leading-[150%]'>
                                        <img
                                            loading='lazy'
                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/b1293ed643c7e08f114a4300e5657f19f3d284f4036ebd8eabea7c2ce4ce48ef?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                            className='shrink-0 self-start w-6 aspect-square'
                                        />
                                        <div className='flex flex-col flex-1'>
                                            <div className='justify-start text-base font-medium whitespace-nowrap text-stone-900'>
                                                Пароль
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    )}

                    <Col span={isTabletOrMobile ? 24 : 16}>
                        <Row>
                            <Col span={24}>
                                <Typography.Title level={2} className='mb-5'>
                                    Предстоящие события
                                </Typography.Title>

                                <div role='status' className='w-full'>
                                    <div className='h-[300px] bg-slate-200 rounded-xl dark:bg-slate-200 w-full mb-3'></div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={24}>
                                <Typography.Title level={2} className='mb-5'>
                                    История заказов
                                </Typography.Title>

                                <div role='status' className='w-full'>
                                    <div className='h-[400px] bg-slate-200 rounded-xl dark:bg-slate-200 w-full mb-3'></div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={24}>
                                <Typography.Title level={2} className='mb-5'>
                                    Может быть интересно
                                </Typography.Title>

                                <div role='status' className='w-full'>
                                    <div className='h-[300px] bg-slate-200 rounded-xl dark:bg-slate-200 w-full mb-3'></div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={24}>
                                <Typography.Title level={2} className='mb-5'>
                                    Смотри истории и зарабатывай бонусы
                                </Typography.Title>

                                <Row wrap={false} className='overflow-x-scroll' gutter={[20, 20]}>
                                    {stories?.map((story, index) => (
                                        <Col span={isTabletOrMobile ? 20 : 8}>
                                            <Story key={story.id} story={story} index={index} />
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Content>
        </>
    );
};

export default Profile;
