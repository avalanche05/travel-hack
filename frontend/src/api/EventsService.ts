import { API_URL } from '../config';
import axios from 'axios';
import { IEvent } from './models/IEvent';

class EventsApiService {
    async getEvents(): Promise<IEvent[]> {
        const response = await axios.get<IEvent[]>(`${API_URL}/events/`);

        return response.data;
    }

    async getEvent(id: string): Promise<IEvent> {
        const response = await axios.get<IEvent>(`${API_URL}/events/${id}`);

        return response.data;
    }
}

export const EventsApiServiceInstanse = new EventsApiService();
