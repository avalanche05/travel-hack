import { Button, Checkbox, Col, Row, Typography, message } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EventsApiServiceInstanse } from '../api/EventsService';
import { IEvent } from '../api/models';
import { Content } from 'antd/es/layout/layout';
import { useMediaQuery } from 'react-responsive';
import Header from '../components/Header';
import { PurchaseApiServiceInstanse } from '../api/PurchaseService';
import { useStores } from '../hooks/useStores';

const Order = () => {
    const { eventId } = useParams();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1100px)' });
    const [event, setEvent] = useState<IEvent | null>(null);
    const [messageApi, contextHolder] = message.useMessage();
    const [withInsurance, setWithInsurance] = useState(false);
    const { rootStore } = useStores();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!eventId) {
                    return;
                }

                const data = await EventsApiServiceInstanse.getEvent(eventId);
                setEvent(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

        return () => {
            setEvent(null);
        };
    }, [eventId]);

    const postPurchase = () => {
        if (!event) {
            return;
        }

        PurchaseApiServiceInstanse.postPurchase({
            insurance_price: withInsurance ? event.price / 10 : null,
            event_id: event.id,
            bearer_token: rootStore.user.id,
        })
            .then(() => {
                messageApi.success('Мероприятие оплачено');

                setTimeout(() => {
                    window.location.href = '/profile';
                }, 100);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            {contextHolder}

            <Header />

            <Content className='container mx-auto max-w px-2 mt-10' style={{ maxWidth: '1000px' }}>
                <Row>
                    <Col>
                        <Typography.Title level={2} className='mb-5'>
                            Данные заказа
                        </Typography.Title>
                    </Col>
                </Row>

                <Row gutter={[20, 40]}>
                    <Col span={isTabletOrMobile ? 24 : 16}>
                        <div className='flex flex-col items-start max-w-[605px]'>
                            <div className='flex flex-col justify-center w-px bg-white'>
                                <div className='shrink-0 h-10 bg-white' />
                            </div>
                            <div className='self-stretch w-full max-md:max-w-full'>
                                <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
                                    <div className='flex flex-col w-[21%] max-md:ml-0 max-md:w-full'>
                                        <div className='flex overflow-hidden relative flex-col justify-center items-center aspect-square w-[120px] max-md:mt-5'>
                                            <img
                                                loading='lazy'
                                                srcSet={event?.image}
                                                className='object-cover absolute inset-0 size-full'
                                            />
                                            <img
                                                loading='lazy'
                                                srcSet={event?.image}
                                                className='w-full aspect-square'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full'>
                                        <div className='flex flex-col self-stretch px-5 my-auto max-md:mt-6 max-md:max-w-full'>
                                            <div className='text-2xl leading-7 text-stone-900 max-md:max-w-full'>
                                                <Typography.Title level={3}>
                                                    {event?.title}
                                                </Typography.Title>
                                            </div>
                                            <div className='flex flex-col justify-center mt-2 max-w-[997px] max-md:max-w-full'>
                                                <div className='flex gap-2 max-md:flex-wrap'>
                                                    <div className='flex overflow-hidden relative flex-col justify-center items-center self-start w-5 aspect-[0.91]'>
                                                        <img
                                                            loading='lazy'
                                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/5afe48371b99e30bd5b69e9312e79d1fb3018f9e43407fc9dc28905ee76b458e?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                            className='object-cover absolute inset-0 size-full'
                                                        />
                                                        <img
                                                            loading='lazy'
                                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/233a0c13348e734dcef2fbe6c9b355e7e33f75fbf7df41c69670c0aaf63b4011?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                            className='w-full aspect-[0.91]'
                                                        />
                                                    </div>
                                                    <div className='flex flex-col text-base font-medium leading-6 text-stone-900 max-md:max-w-full'>
                                                        <div className='max-md:max-w-full'>
                                                            ул. Большая Дмитровка, д. 6, стр. 8
                                                        </div>
                                                        <div className='z-10 shrink-0 -mt-6 h-6 max-md:max-w-full' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center w-px bg-white'>
                                <div className='shrink-0 h-8 bg-white' />
                            </div>
                        </div>

                        <div className='flex flex-col self-stretch px-4 rounded-xl bg-red-600 bg-opacity-10'>
                            <div className='flex flex-col justify-center items-start max-md:pr-5 max-md:max-w-full'>
                                <div className='shrink-0 w-px h-4 bg-white' />
                            </div>
                            <div className='flex gap-3 text-base font-medium leading-6 text-stone-900 max-md:flex-wrap'>
                                <img
                                    loading='lazy'
                                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/ea2f8a01bba566d2bf71d2b11e51a60875226d5c2ec0112e4187ac30b42bba0a?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                    className='shrink-0 self-start w-6 aspect-square'
                                />
                                <div className='flex-1 max-md:max-w-full'>
                                    Пожалуйста, заполните все поля. С собой возьмите паспорта
                                    взрослых участников и свидетельства о рождении детей до 14 лет
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-start max-md:pr-5 max-md:max-w-full'>
                                <div className='shrink-0 w-px h-4 bg-white' />
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <div className='flex flex-col justify-center w-px bg-white'>
                                <div className='shrink-0 h-8 bg-white' />
                            </div>
                            <div className='flex flex-col justify-center w-full max-md:max-w-full'>
                                <div className='flex flex-col w-full max-md:max-w-full'>
                                    <div className='flex flex-col justify-center w-full max-md:max-w-full'>
                                        <div className='flex flex-col justify-center w-full max-md:max-w-full'>
                                            <div className='flex flex-col justify-center w-full max-md:max-w-full'>
                                                <div className='flex gap-4 max-md:flex-wrap'>
                                                    <div className='flex flex-col  text-xl leading-6 whitespace-nowrap text-stone-900'>
                                                        <div className='max-w-[500px]'>
                                                            Взрослый
                                                        </div>
                                                        <div className='z-10 shrink-0 -mt-7 h-7' />
                                                    </div>
                                                    <div className='flex flex-col flex-1 justify-center max-md:max-w-full'>
                                                        <div className='flex gap-4 max-md:flex-wrap max-md:max-w-full'>
                                                            <div className='flex flex-col my-auto'>
                                                                <div className='z-10 shrink-0 h-px border border-dashed bg-zinc-300 border-zinc-300' />
                                                                <div className='shrink-0 h-px border border-dashed bg-zinc-300 border-zinc-300' />
                                                            </div>
                                                            <div className='flex flex-col justify-center'>
                                                                <div className='flex gap-4 px-5'>
                                                                    <div className='my-auto text-xl leading-6 text-right text-ellipsis text-stone-900'>
                                                                        1 000 ₽
                                                                    </div>
                                                                    <div className='flex flex-col justify-center items-center p-2 w-7 h-7 bg-gray-200 rounded-lg'>
                                                                        <div className='flex justify-center items-center px-1.5 w-7 h-7 bg-gray-200 rounded-lg'>
                                                                            <div className='flex overflow-hidden relative flex-col justify-center items-center w-4 aspect-square'>
                                                                                <img
                                                                                    loading='lazy'
                                                                                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/e752289596311345c60a4fd790ac282a7bbf1c7050e7baaf25b1beb52bc1cdc2?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                                                    className='object-cover absolute inset-0 size-full'
                                                                                />
                                                                                <img
                                                                                    loading='lazy'
                                                                                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/e752289596311345c60a4fd790ac282a7bbf1c7050e7baaf25b1beb52bc1cdc2?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                                                    className='w-full aspect-square'
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center w-full max-md:max-w-full'></div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center w-full max-md:max-w-full'>
                                <div className='flex flex-col justify-center w-full max-md:max-w-full'>
                                    <div className='flex flex-col justify-center w-full max-md:max-w-full'>
                                        <div className='flex flex-col justify-center w-full max-md:max-w-full'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center w-px'>
                                <div className='flex flex-col justify-center bg-white'>
                                    <div className='flex flex-col justify-center'>
                                        <div className='shrink-0 h-4 bg-white' />
                                    </div>
                                </div>
                            </div>
                            <div role='status' className='w-full'>
                                <div className='h-10 bg-slate-200 rounded-lg dark:bg-slate-200 w-full mb-3'></div>
                                <div className='h-10 bg-slate-200 rounded-lg dark:bg-slate-200 w-full mb-3'></div>
                                <div className='h-10 bg-slate-200 rounded-lg dark:bg-slate-200 w-full mb-3'></div>
                                <div className='h-10 bg-slate-200 rounded-lg dark:bg-slate-200 w-full mb-3'></div>
                                <div className='h-10 bg-slate-200 rounded-lg dark:bg-slate-200 w-full mb-3'></div>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center p-5 bg-white rounded-xl border border-gray-200 border-solid mt-4'>
                            <div className='flex flex-col justify-center max-md:max-w-full'>
                                <div className='flex gap-5 flex-wrap justify-between max-md:flex-wrap max-md:max-w-full'>
                                    <div className='flex flex-col justify-center items-start self-start text-xl leading-7 whitespace-nowrap text-stone-900 max-md:max-w-full'>
                                        <div className='flex gap-2'>
                                            <Checkbox
                                                onChange={(e) => {
                                                    setWithInsurance(e.target.checked);
                                                }}
                                            />
                                            <div>Страховка</div>
                                        </div>
                                        <div className='text-sm break-words leading-5 text-black mt-3'>
                                            Вернём деньги, если вы не сможете{' '}
                                            {isTabletOrMobile && <br />} посетить мероприятиеx
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <div className='flex flex-col'>
                                            <div className='self-end text-lg leading-7 text-stone-900'>
                                                448 ₽
                                            </div>
                                            <div className='flex gap-1 justify-center mt-2 text-xs font-semibold leading-6 text-center text-teal-700'>
                                                <div className='flex gap-0 pr-1 pl-2 rounded-lg bg-teal-700 bg-opacity-10'>
                                                    <div className='text-ellipsis'>+ 100</div>
                                                    <img
                                                        loading='lazy'
                                                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/bfaace2aee8dfbc7869bf108028f589b92aa003dba1e36459bdf39d7efbceabc?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                        className='shrink-0 my-auto w-4 aspect-square'
                                                    />
                                                </div>
                                                <img
                                                    loading='lazy'
                                                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/3d1d093e5bc55c2005bdcd9c6f8405241bb4bba9ff320621a6f80fff2f065622?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                    className='shrink-0 my-auto w-5 aspect-square'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col span={isTabletOrMobile ? 24 : 8}>
                        <div className='flex flex-col justify-center'>
                            <div className='flex flex-col w-full'>
                                <div className='flex flex-col justify-center w-full'>
                                    <div className='flex flex-col w-full'>
                                        <div className='flex flex-col justify-center w-full'>
                                            <div className='flex flex-col w-full'>
                                                <div className='w-full text-xl leading-6 text-stone-900'>
                                                    Информация
                                                </div>
                                                <div className='flex flex-col justify-center w-full'>
                                                    <div className='flex flex-col justify-center items-start w-full'>
                                                        <div className='flex flex-col justify-center w-px bg-white'>
                                                            <div className='shrink-0 h-4 bg-white' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col justify-center w-full'>
                                                    <div className='flex flex-col justify-center w-full'>
                                                        <div className='flex flex-col justify-center w-full'>
                                                            <div className='flex gap-2 pr-20'>
                                                                <div className='flex flex-col justify-center'>
                                                                    <div className='flex justify-center items-center py-0.5'>
                                                                        <div className='flex overflow-hidden relative flex-col justify-center items-center w-4 aspect-square'>
                                                                            <img
                                                                                loading='lazy'
                                                                                src='https://cdn.builder.io/api/v1/image/assets/TEMP/83ccb7233729964521d7e9bbd1ef9c9ffdc9417fa8aa914ff5336d873cc5f9a4?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                                                className='object-cover absolute inset-0 size-full'
                                                                            />
                                                                            <img
                                                                                loading='lazy'
                                                                                src='https://cdn.builder.io/api/v1/image/assets/TEMP/83ccb7233729964521d7e9bbd1ef9c9ffdc9417fa8aa914ff5336d873cc5f9a4?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                                                className='w-full aspect-square'
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='flex flex-col justify-center text-sm font-medium leading-4 text-stone-900'>
                                                                    <div className='justify-center py-0.5'>
                                                                        3 участника
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center w-full'>
                                            <div className='flex flex-col justify-center items-end px-16 w-full'>
                                                <div className='flex flex-col justify-center w-px bg-white'>
                                                    <div className='shrink-0 h-6 bg-white' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center w-full'>
                                            <div className='flex flex-col w-full'>
                                                <div className='w-full text-xl leading-6 text-stone-900'>
                                                    Дата и время
                                                </div>
                                                <div className='flex flex-col justify-center w-full'>
                                                    <div className='flex flex-col justify-center items-start w-full'>
                                                        <div className='flex flex-col justify-center w-px bg-white'>
                                                            <div className='shrink-0 h-4 bg-white' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col justify-center w-full'>
                                                    <div className='flex flex-col w-full'>
                                                        <div className='flex flex-col justify-center w-full'>
                                                            <div className='flex gap-2 pr-20'>
                                                                <div className='flex flex-col justify-center'>
                                                                    <div className='flex justify-center items-center py-0.5'>
                                                                        <div className='flex overflow-hidden relative flex-col justify-center items-center w-4 aspect-square'>
                                                                            <img
                                                                                loading='lazy'
                                                                                src='https://cdn.builder.io/api/v1/image/assets/TEMP/2bc075f62695f36995b0fe046b08cd185bb27826c06c8baf0b0bfa12135e0933?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                                                className='object-cover absolute inset-0 size-full'
                                                                            />
                                                                            <img
                                                                                loading='lazy'
                                                                                src='https://cdn.builder.io/api/v1/image/assets/TEMP/2bc075f62695f36995b0fe046b08cd185bb27826c06c8baf0b0bfa12135e0933?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                                                className='w-full aspect-square'
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='flex flex-col justify-center text-sm font-medium leading-5'>
                                                                    <div className='flex gap-1'>
                                                                        <div className='text-stone-900'>
                                                                            23 мая
                                                                        </div>
                                                                        <div className='text-neutral-500'>
                                                                            Сб
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-col justify-center w-full'>
                                                            <div className='flex flex-col justify-center items-start w-full'>
                                                                <div className='flex flex-col justify-center w-px bg-white'>
                                                                    <div className='shrink-0 h-2 bg-white' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-col justify-center w-full'>
                                                            <div className='flex gap-2 pr-20'>
                                                                <div className='flex flex-col justify-center'>
                                                                    <div className='flex justify-center items-center py-0.5'>
                                                                        <div className='flex overflow-hidden relative flex-col justify-center items-center w-4 aspect-square'>
                                                                            <img
                                                                                loading='lazy'
                                                                                src='https://cdn.builder.io/api/v1/image/assets/TEMP/842f9f7821d02eda9cda95c1e523a4ce2879ddeddb4eac42df49c6c45754cbc9?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                                                className='object-cover absolute inset-0 size-full'
                                                                            />
                                                                            <img
                                                                                loading='lazy'
                                                                                src='https://cdn.builder.io/api/v1/image/assets/TEMP/842f9f7821d02eda9cda95c1e523a4ce2879ddeddb4eac42df49c6c45754cbc9?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                                                className='w-full aspect-square'
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='flex flex-col text-sm font-medium leading-5 text-stone-900'>
                                                                    <div>13:00 — 14:00</div>
                                                                    <div className='z-10 shrink-0 -mt-5 h-5' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center w-full'>
                                    <div className='flex flex-col justify-center items-end px-16 w-full'>
                                        <div className='flex flex-col justify-center w-px bg-white'>
                                            <div className='shrink-0 h-6 bg-white' />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center w-full'>
                                    <div className='flex flex-col w-full'>
                                        <div className='flex flex-col justify-center w-full text-base font-medium leading-6 text-center whitespace-nowrap text-stone-900'>
                                            <div className='flex flex-col justify-center w-full bg-yellow-400 rounded-xl'>
                                                <div className='flex flex-col justify-center w-full'>
                                                    <Button onClick={postPurchase} type='primary'>
                                                        <div className='text-base leading-6 text-stone-900'>
                                                            Оплатить
                                                        </div>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center w-full'>
                                            <div className='flex flex-col justify-center items-end px-16 w-full'>
                                                <div className='flex flex-col justify-center w-px bg-white'>
                                                    <div className='shrink-0 h-6 bg-white' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center w-full text-xs leading-5 text-sky-600'>
                                            <div className='w-full'>
                                                Нажимая на кнопку, вы даете согласие на
                                                <span className='text-sky-600'>
                                                    обработку персональных данных,
                                                </span>{' '}
                                                а также принимаете условия{' '}
                                                <span className='text-sky-600'>
                                                    пользовательского соглашения, политики
                                                    конфиденциальности
                                                </span>{' '}
                                                и{' '}
                                                <span className='text-sky-600'>
                                                    публичной оферты
                                                </span>
                                            </div>
                                            <div className='z-10 mt-0 w-full min-h-[54px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Content>
        </>
    );
};

export default Order;
