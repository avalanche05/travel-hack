import { API_URL } from '../config';
import axios from 'axios';

class HintApiService {
    async getHint(text: string): Promise<{ text: string }> {
        const response = await axios.post<{ text: string }>(`${API_URL}/hint/`, { text });

        return response.data;
    }
}

export const HintApiServiceInstanse = new HintApiService();
