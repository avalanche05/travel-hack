import { API_URL } from '../config';
import axios from 'axios';
import { IStory } from './models/IStory';

class StoriesApiService {
    async getStories(): Promise<IStory[]> {
        const response = await axios.get<IStory[]>(`${API_URL}/story`);

        return response.data;
    }
}

export const StoriesApiServiceInstanse = new StoriesApiService();
