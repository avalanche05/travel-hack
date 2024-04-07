import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const Header = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1100px)' });

    return (
        <>
            {isTabletOrMobile ? (
                <div className='flex gap-5 justify-between py-1.5 pr-2 pl-4 bg-white'>
                    <div className='flex flex-col justify-center'>
                        <Link to='/'>
                            <div className='flex gap-2'>
                                <div className='flex justify-center items-center py-2'>
                                    <img
                                        loading='lazy'
                                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/3293e46fff20f8abf4cfb1728ed46a8c56e4b9ed2e116af1826efce3b91518cd?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                        className='w-5 aspect-square'
                                    />
                                </div>
                                <div className='shrink-0 my-auto w-0.5 h-5 rounded-sm bg-zinc-300' />
                                <div className='flex gap-2 py-2'>
                                    <div className='flex justify-center items-center'>
                                        <img
                                            loading='lazy'
                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/dd26c8c7f2f56e3bf44b5e778586dad50eeed81d16cd4a2c207aa388954612d3?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                            className='w-16 aspect-[3.23] fill-orange-600'
                                        />
                                    </div>
                                    <img
                                        loading='lazy'
                                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/86a63b4d8c18c9ee065c06d034d735224f7295bee15a7dac2dab95cc422cb941?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                                        className='shrink-0 w-5 aspect-square'
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <Link to='/profile'>
                        <img
                            loading='lazy'
                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/0096057cdd2184878daf34e8d023cbdaec479e00d69a55eba3df5ae647f55175?apiKey=f021ca4e16f44433b9822e9ffa5d2300&'
                            className='shrink-0 max-w-full aspect-[3.03] w-[108px]'
                        />
                    </Link>
                </div>
            ) : (
                <div className='flex justify-center items-center px-16 py-3 bg-white max-md:px-5'>
                    <div className='flex gap-5 justify-between w-full max-w-[1236px] max-md:flex-wrap max-md:max-w-full'>
                        <Link to='/'>
                            <div className='flex gap-5 max-md:flex-wrap'>
                                <div className='flex gap-4 items-center'>
                                    <img
                                        loading='lazy'
                                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/b9d63d1e0ecd7d2eb7d74c46148bb26bbaff4ef180c8b2153fa96a4c7906fef8?'
                                        className='shrink-0 self-stretch my-auto w-7 aspect-square'
                                    />
                                    <div className='shrink-0 self-stretch my-auto w-0.5 h-7 rounded-sm bg-zinc-300' />
                                    <div className='flex gap-4 self-stretch py-2.5'>
                                        <img
                                            loading='lazy'
                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/45da800082926435eda025a1f1a7b65f02376c43d32457b96f997b6e5e35f2e5?'
                                            className='shrink-0 aspect-[3.23] fill-orange-600 w-[91px]'
                                        />
                                        <img
                                            loading='lazy'
                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/f4bd8fbc274a84dde576173e393bfb7a1b1eeae53752e382c5ed71b69dd10a13?'
                                            className='shrink-0 my-auto w-6 aspect-square'
                                        />
                                    </div>
                                </div>
                                <div className='flex gap-0 text-base font-medium leading-6 whitespace-nowrap text-stone-900'>
                                    <div className='flex gap-2 p-3 rounded-lg'>
                                        <img
                                            loading='lazy'
                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/c53807252941ac43423e7ef40de991875278201f07154b1a48c2e2412e0d409b?'
                                            className='shrink-0 w-6 aspect-square'
                                        />
                                        <div>Меню</div>
                                    </div>
                                    <div className='flex gap-2 p-3 rounded-lg'>
                                        <img
                                            loading='lazy'
                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/f0c8a9f273ac700f01b8e62386194f82a15fa80d86b1240fc0402a4105626f1b?'
                                            className='shrink-0 w-6 aspect-square'
                                        />
                                        <div>Бонусы</div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to='/profile'>
                            <div className='flex gap-3 pr-3 text-base font-medium leading-6 text-stone-900 max-md:flex-wrap'>
                                <div className='flex gap-0 max-md:flex-wrap'>
                                    <div className='flex gap-2 p-3 rounded-lg'>
                                        <img
                                            loading='lazy'
                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/37613c5f9129879b475189350925cf5a4e41b203ef45ebd49ec822b045b65fb4?'
                                            className='shrink-0 w-6 aspect-square'
                                        />
                                        <div>Проекты Мостуризм</div>
                                    </div>
                                    <div className='flex gap-2 p-3 rounded-lg'>
                                        <img
                                            loading='lazy'
                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/94be19c93835f088af2aedefce834ef3ceb4e38c16eb6a2386f778256e4e6848?'
                                            className='shrink-0 w-6 aspect-square'
                                        />
                                        <div>Мои планы</div>
                                    </div>
                                    <div className='flex gap-2 p-3 whitespace-nowrap rounded-lg'>
                                        <img
                                            loading='lazy'
                                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/da8dea1763fd004aaaad5f01bb641768c32546f578c02326a0f7b5067968bbd5?'
                                            className='shrink-0 w-6 aspect-square'
                                        />
                                    </div>
                                </div>
                                <img
                                    loading='lazy'
                                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/f151c66ade04f9cf0a7ae2f5f18da6741288cfc629f8de44559db2d01df51ac2?'
                                    className='shrink-0 my-auto w-6 aspect-square'
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
