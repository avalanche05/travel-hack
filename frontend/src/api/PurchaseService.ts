import { API_URL } from '../config';
import axios from 'axios';
import { IPurchase } from './models';

class PurchaseApiService {
    async postPurchase({
        event_id,
        bearer_token,
        insurance_price,
    }: {
        insurance_price: number | null;
        event_id: string | number;
        bearer_token: string | number;
    }): Promise<IPurchase> {
        const response = await axios.post(
            `${API_URL}/event_purchase/`,
            { event_id, insurance_price },
            {
                headers: {
                    Authorization: `Bearer ${bearer_token}`,
                },
            }
        );

        return response.data;
    }

    async getPurchases({ bearer_token }: { bearer_token: string | number }): Promise<IPurchase[]> {
        const response = await axios.get(`${API_URL}/event_purchase/`, {
            headers: {
                Authorization: `Bearer ${bearer_token}`,
            },
        });

        return response.data;
    }
}

export const PurchaseApiServiceInstanse = new PurchaseApiService();
