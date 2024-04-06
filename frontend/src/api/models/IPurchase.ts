import { IEvent } from '.';

export interface IPurchase {
    user_id: number;
    event: IEvent;
    insurance_price: number;
    date: string;
    is_visited: boolean;
}
