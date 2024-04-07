import { Content } from 'antd/es/layout/layout';
import Header from '../components/Header';
import { Button, Col, Row, Typography } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { EventsApiServiceInstanse } from '../api/EventsService';
import { IEvent } from '../api/models';
import { useMediaQuery } from 'react-responsive';

const PlacesDetails = () => {
    const { placeId } = useParams();
    const [placeData, setPlaceData] = useState<IEvent | null>(null);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1100px)' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!placeId) {
                    return;
                }

                const data = await EventsApiServiceInstanse.getEvent(placeId);
                setPlaceData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

        return () => {
            setPlaceData(null);
        };
    }, [placeId]);

    return (
        <div>
            <Header />

            {placeData ? (
                <Content className='container mx-auto max-w px-2' style={{ maxWidth: '1000px' }}>
                    <div className='flex flex-col'>
                        <div className='shrink-0 w-px h-6 bg-white' />
                        <div className='flex gap-1 pr-20 text-sm leading-5 max-md:flex-wrap max-md:pr-5'>
                            <div className='flex gap-1'>
                                <div className='text-sky-600 text-ellipsis'>
                                    <Row>
                                        <Typography.Title level={2} className='mb-5'>
                                            Выставка «Золото сарматских вождей» в ГМИИ им. А.С.
                                            Пушкина
                                        </Typography.Title>
                                    </Row>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center w-px'>
                            <div className='shrink-0 h-6 bg-white' />
                        </div>
                        <div className='flex flex-col justify-center w-full max-md:max-w-full'>
                            <div className='flex flex-col justify-center w-full max-md:max-w-full'>
                                <div className='w-full max-md:max-w-full'>
                                    <div className='flex gap-5 flex-wrap max-md:flex-col max-md:gap-0'>
                                        <div className='flex flex-col max-md:ml-0 max-md:w-full'>
                                            <div className='flex flex-col grow justify-center max-md:mt-3 max-md:max-w-full'>
                                                <div className='flex flex-col justify-center items-start max-md:pr-5 max-md:max-w-full'>
                                                    <div className='shrink-0 w-px h-4 bg-white' />
                                                </div>
                                                <div className='flex flex-wrap gap-4 content-start pr-20 text-base font-medium leading-6 text-stone-900 max-md:pr-5'>
                                                    <div className='flex gap-2 whitespace-nowrap'>
                                                        <img
                                                            loading='lazy'
                                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/ddfa77e113c93777fd2faadc9ded216390f6de0f5e162d783aa474da8164a51f?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                            className='shrink-0 self-start w-5 aspect-[0.91]'
                                                        />
                                                        <div className='justify-center'>
                                                            Выставка
                                                        </div>
                                                    </div>
                                                    <div className='flex gap-2'>
                                                        <img
                                                            loading='lazy'
                                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/c37a40a375cd5de844f496824bbb9ec9b14645dd9b22fbb2937c8cddd6fd75de?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                            className='shrink-0 self-start w-5 aspect-[0.91]'
                                                        />
                                                        <div className='justify-center'>
                                                            10 января — 31 декабря
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-wrap gap-2 content-start text-xs leading-4 text-teal-700'>
                                                        <div className='justify-center px-2 py-1 whitespace-nowrap rounded-md border border-teal-700 border-solid'>
                                                            Аудиогид
                                                        </div>
                                                        <div className='flex gap-2'>
                                                            <div className='justify-center px-2 py-1 rounded-md border border-teal-700 border-solid'>
                                                                Пушкинская карта
                                                            </div>
                                                            <div className='flex flex-col justify-center'>
                                                                <div className='flex gap-1 justify-center px-2 py-1 rounded-md border border-teal-700 border-solid'>
                                                                    <img
                                                                        loading='lazy'
                                                                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/d2c9ad85e050a39db40eddec5ecd4799645b9d7a7cd1f6c036b373982667b2b2?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                                        className='shrink-0 w-4 aspect-square'
                                                                    />
                                                                    <div>Повышенные бонусы</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col ml-5 max-md:ml-0 max-md:w-full'>
                                            <div className='flex gap-3 max-md:mt-3'>
                                                <div className='flex flex-col justify-center'>
                                                    <div className='flex gap-3'>
                                                        <Link to={`/orders/${placeData.id}`}>
                                                            <Button type='primary'>
                                                                <div className='text-base leading-6 text-stone-900'>
                                                                    Купить блиеты
                                                                </div>
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className='flex gap-3'>
                                                    <div className='flex justify-center items-center px-3 w-12 h-12 rounded-xl bg-neutral-100'>
                                                        <img
                                                            loading='lazy'
                                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/51bb2b91042436deffa7563b7579277687b74628691f8e790ea9780ac74d9a2a?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                            className='w-6 aspect-square'
                                                        />
                                                    </div>
                                                    <div className='flex gap-4 px-5'>
                                                        <div className='justify-center px-4 py-3 text-lg font-medium leading-6 text-white whitespace-nowrap bg-teal-700 rounded-xl shadow-lg'>
                                                            8.8
                                                        </div>
                                                        <div className='my-auto text-sm leading-6 text-stone-900'>
                                                            На основе <br />
                                                            40 оценок
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img
                            loading='lazy'
                            srcSet={placeData.image}
                            className='w-full aspect-[1.23] mt-5'
                        />
                    </div>

                    <Row className='mt-10' gutter={[20, 20]}>
                        <Col span={isTabletOrMobile ? 24 : 16}>
                            <div role='status' className='w-full'>
                                <div className='h-40 bg-slate-200 rounded-xl dark:bg-slate-200 w-full'></div>
                                <div className='h-40 bg-slate-200 rounded-xl dark:bg-slate-200 w-full mt-10'></div>
                                <div className='h-40 bg-slate-200 rounded-xl dark:bg-slate-200 w-full mt-10'></div>
                            </div>

                            <Row className='mt-10'>
                                <Col span={24}>
                                    <div className='flex flex-col items-start relative'>
                                        <div className='flex flex-col self-stretch pt-4 w-full max-md:max-w-full'>
                                            <div className='flex flex-col justify-center p-6 rounded-xl bg-neutral-100 max-md:px-5 max-md:max-w-full'>
                                                <div className='flex flex-col justify-center max-md:max-w-full'>
                                                    <div className='flex flex-col max-md:max-w-full'>
                                                        <Typography.Title
                                                            level={4}
                                                            className='mb-5'
                                                        >
                                                            Защитите свою покупку от непредвиденных
                                                            ситуаций
                                                        </Typography.Title>
                                                        <div className='flex flex-col justify-center items-start max-md:pr-5 max-md:max-w-full' />
                                                        <div className='text-sm leading-5 text-stone-900 text-opacity-50 max-md:max-w-full'>
                                                            Вернём 100% стоимости билета при наличии
                                                            страховки
                                                        </div>
                                                        <div className='flex flex-col justify-center items-start max-md:pr-5 max-md:max-w-full' />
                                                        <div className='flex flex-col max-md:max-w-full'>
                                                            <div className='suggestions mt-2 mb-1'>
                                                                <div className='text-sm leading-5 text-stone-900 max-md:max-w-full'>
                                                                    Неожиданно изменились планы на
                                                                    день мероприятия?
                                                                </div>

                                                                <div className='text-sm leading-5 text-stone-900 max-md:max-w-full'>
                                                                    Дедлайны по учёбе не дадют выйти
                                                                    из дома?
                                                                </div>
                                                            </div>

                                                            <div className='flex flex-col justify-center items-start border-b border-solid border-zinc-300 max-md:pr-5 max-md:max-w-full'>
                                                                <div className='shrink-0 w-px h-2 bg-white' />
                                                            </div>
                                                            <div className='flex flex-col justify-center items-start max-md:pr-5 max-md:max-w-full'>
                                                                <div className='shrink-0 w-px h-2 bg-white' />
                                                            </div>
                                                        </div>
                                                        <div className='flex gap-0 self-start text-sm leading-5 text-sky-600'>
                                                            <div>Узнать подробнее</div>
                                                            <img
                                                                loading='lazy'
                                                                src='https://cdn.builder.io/api/v1/image/assets/TEMP/545bd933896b2e26822ba7d8ccdf531dfca6af41d13bb3cfc4eb5780caf436e6?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                                className='shrink-0 my-auto w-4 aspect-square'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='absolute top-[-15px] right-[-5px]'>
                                            <svg
                                                width='96'
                                                height='96'
                                                viewBox='0 0 96 96'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <g filter='url(#filter0_d_2119_43504)'>
                                                    <path
                                                        d='M80 35.9972C80 38.7039 76.022 40.8419 75.3344 43.3326C74.6468 45.9085 77.0392 49.7582 75.7151 52.0156C74.3911 54.2731 69.8562 54.1651 68.0036 55.9961C66.151 57.8271 66.2987 62.3876 64.0256 63.7125C61.7524 65.0374 57.9222 62.6435 55.3479 63.3315C52.8588 63.9968 50.7164 68 48.017 68C45.3177 68 43.181 64.0196 40.6919 63.3315C38.1119 62.6435 34.2646 65.0374 32.0085 63.7125C29.7524 62.3876 29.8604 57.8555 28.0305 55.9961C26.2007 54.1367 21.6431 54.2902 20.319 52.0156C18.9949 49.7411 21.3873 45.9085 20.6997 43.3326C19.978 40.8249 16 38.7039 16 35.9972C16 33.2904 19.978 31.1581 20.6656 28.6674C21.3532 26.0915 18.9607 22.2362 20.2848 19.9844C21.6089 17.7326 26.1382 17.8349 27.9964 16.0039C29.8547 14.1729 29.7013 9.61244 31.9744 8.28752C34.2476 6.9626 38.0778 9.35655 40.6578 8.6685C43.1469 8.0032 45.2836 4 47.983 4C50.6823 4 52.8247 7.98045 55.3138 8.6685C57.8881 9.35655 61.7354 6.9626 63.9915 8.28752C66.2476 9.61244 66.1396 14.1445 67.9695 16.0039C69.7993 17.8634 74.357 17.7098 75.6811 19.9844C77.0052 22.2589 74.6127 26.0915 75.3003 28.6674C75.9652 31.1581 79.9659 33.2961 79.9659 35.9972'
                                                        fill='#007470'
                                                    />
                                                    <path
                                                        d='M45 35.5001L47 37.5001L51.5 33.0001M56 36.0001C56 40.9086 50.646 44.4785 48.698 45.615C48.4766 45.7442 48.3659 45.8087 48.2097 45.8422C48.0884 45.8682 47.9116 45.8682 47.7903 45.8422C47.6341 45.8087 47.5234 45.7442 47.302 45.615C45.354 44.4785 40 40.9086 40 36.0001V31.2177C40 30.4182 40 30.0184 40.1308 29.6748C40.2463 29.3713 40.434 29.1004 40.6777 28.8856C40.9535 28.6426 41.3278 28.5022 42.0764 28.2215L47.4382 26.2108C47.6461 26.1328 47.75 26.0938 47.857 26.0784C47.9518 26.0647 48.0482 26.0647 48.143 26.0784C48.25 26.0938 48.3539 26.1328 48.5618 26.2108L53.9236 28.2215C54.6722 28.5022 55.0465 28.6426 55.3223 28.8856C55.566 29.1004 55.7537 29.3713 55.8692 29.6748C56 30.0184 56 30.4182 56 31.2177V36.0001Z'
                                                        stroke='white'
                                                        stroke-width='2'
                                                        stroke-linecap='round'
                                                        stroke-linejoin='round'
                                                    />
                                                </g>
                                                <defs>
                                                    <filter
                                                        id='filter0_d_2119_43504'
                                                        x='0'
                                                        y='0'
                                                        width='96'
                                                        height='96'
                                                        filterUnits='userSpaceOnUse'
                                                        color-interpolation-filters='sRGB'
                                                    >
                                                        <feFlood
                                                            flood-opacity='0'
                                                            result='BackgroundImageFix'
                                                        />
                                                        <feColorMatrix
                                                            in='SourceAlpha'
                                                            type='matrix'
                                                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                                            result='hardAlpha'
                                                        />
                                                        <feOffset dy='12' />
                                                        <feGaussianBlur stdDeviation='8' />
                                                        <feColorMatrix
                                                            type='matrix'
                                                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0'
                                                        />
                                                        <feBlend
                                                            mode='normal'
                                                            in2='BackgroundImageFix'
                                                            result='effect1_dropShadow_2119_43504'
                                                        />
                                                        <feBlend
                                                            mode='normal'
                                                            in='SourceGraphic'
                                                            in2='effect1_dropShadow_2119_43504'
                                                            result='shape'
                                                        />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <div role='status' className='w-full'>
                                <div className='h-40 bg-slate-200 rounded-xl dark:bg-slate-200 w-full mt-10'></div>
                                <div className='h-40 bg-slate-200 rounded-xl dark:bg-slate-200 w-full mt-10'></div>
                            </div>
                        </Col>

                        <Col span={isTabletOrMobile ? 24 : 8}>
                            <div className='flex flex-col justify-center px-4 rounded-2xl bg-neutral-100 w-full'>
                                <div className='flex flex-col justify-center items-start'>
                                    <div className='shrink-0 w-px h-4 bg-white' />
                                </div>
                                <div className='flex flex-col justify-center text-base font-medium leading-6 text-stone-900'>
                                    <div className='flex flex-col justify-center'>
                                        <div className='flex gap-2 px-4 py-3 bg-white rounded-xl border border-solid border-zinc-300'>
                                            <img
                                                loading='lazy'
                                                src='https://cdn.builder.io/api/v1/image/assets/TEMP/130bf218a13c694aff197b64cce268aab950fc40e50589b2499a42ebdb03ba31?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                className='shrink-0 w-6 aspect-square'
                                            />
                                            <div className='flex flex-col flex-1 justify-center items-start'>
                                                <div className='justify-center'>20 мая</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-start'>
                                    <div className='shrink-0 w-px h-4 bg-white' />
                                </div>
                                <div className='flex flex-col justify-center text-base font-medium leading-6 text-stone-900'>
                                    <div className='flex flex-col justify-center'>
                                        <div className='flex gap-2 px-4 py-3 bg-white rounded-xl border border-solid border-zinc-300'>
                                            <img
                                                loading='lazy'
                                                src='https://cdn.builder.io/api/v1/image/assets/TEMP/069824597bf1e22fbf82a5febe15fa45855ec398b8451a2f0f1ae8afb091d315?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                className='shrink-0 w-6 aspect-square'
                                            />
                                            <div className='flex flex-col flex-1 justify-center'>
                                                <div className='justify-center'>14:30 — 16:00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-start'>
                                    <div className='shrink-0 w-px h-4 bg-white' />
                                </div>
                                <div className='flex flex-col justify-center text-base font-medium leading-6 whitespace-nowrap text-stone-900'>
                                    <div className='flex flex-col justify-center'>
                                        <div className='flex gap-2 px-4 py-3 bg-white rounded-xl border border-solid border-zinc-300'>
                                            <img
                                                loading='lazy'
                                                src='https://cdn.builder.io/api/v1/image/assets/TEMP/52cc14ceb69060f573e66e79768f6ac761a2cda9d17633979fed091f6d5693d9?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                                className='shrink-0 w-6 aspect-square'
                                            />
                                            <div className='flex flex-col flex-1 justify-center items-start'>
                                                <div className='justify-center'>Взрослый</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-start'>
                                    <div className='shrink-0 w-px h-4 bg-white' />
                                </div>
                                <div className='flex flex-col justify-center text-base font-medium leading-6 text-center text-stone-900'>
                                    <Link to={`/orders/${placeData.id}`}>
                                        <Button className='text-stone-900 w-full' type='primary'>
                                            <div className='text-base leading-6 text-stone-900'>
                                                Купить блиеты
                                            </div>
                                        </Button>
                                    </Link>
                                </div>
                                <div className='flex flex-col justify-center items-start'>
                                    <div className='shrink-0 w-px h-4 bg-white' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Content>
            ) : null}
        </div>
    );
};

export default PlacesDetails;
