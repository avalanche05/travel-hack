import { IPurchase } from '../api/models';

type Props = {
    purchase: IPurchase;
};

const Purchase = ({ purchase }: Props) => {
    return (
        <>
            <div className='flex flex-col rounded-xl'>
                <div className='flex flex-col justify-center w-full'>
                    <img
                        loading='lazy'
                        srcSet={purchase.event?.image}
                        className='w-full aspect-[1.75]'
                    />
                </div>
                <div className='flex flex-col p-3 w-full text-xs font-medium leading-4 bg-neutral-100 text-neutral-500'>
                    <div className='flex flex-col pb-11 mt-1'>
                        <div className='text-sm leading-4 text-ellipsis text-stone-900'>
                            {purchase.event?.title}
                        </div>
                        <div className='mt-1 text-ellipsis'>2 билета</div>
                        <div className='mt-1 text-ellipsis'>
                            {new Date(purchase.date).toLocaleDateString()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Purchase;
