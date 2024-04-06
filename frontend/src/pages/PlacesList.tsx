import { Content } from 'antd/es/layout/layout';
import Header from '../components/Header';
import { Col, Row, Typography } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { IEvent } from '../api/models/IEvent';
import Event from '../components/Event';
import { useEffect, useState } from 'react';
import { EventsApiServiceInstanse } from '../api/EventsService';

const PlacesList = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1100px)' });

    const [events, setEvents] = useState<IEvent[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const events = await EventsApiServiceInstanse.getEvents();
            setEvents(events);
        };

        fetchEvents();
    }, [events]);

    return (
        <>
            <Header />

            <Content className='px-4 mt-5'>
                <Typography.Title level={2} className='mb-5'>
                    Места и события
                </Typography.Title>

                <div role='status' className='w-full'>
                    <div className='h-8 bg-slate-200 rounded-xl dark:bg-slate-200 w-full mb-3'></div>
                    <div className='h-4 bg-slate-200 rounded-xl dark:bg-slate-200 w-full mb-2.5'></div>
                </div>

                <Row gutter={20} className='mt-5'>
                    {!isTabletOrMobile && (
                        <Col span={8}>
                            <div role='status' className='w-full'>
                                <div className='h-20 bg-slate-200 rounded-xl dark:bg-slate-200 w-full mb-3'></div>
                                <div className='h-20 bg-slate-200 rounded-xl dark:bg-slate-200 w-full mb-3'></div>
                                <div className='h-20 bg-slate-200 rounded-xl dark:bg-slate-200 w-full mb-3'></div>
                                <div className='h-20 bg-slate-200 rounded-xl dark:bg-slate-200 w-full mb-3'></div>
                                <div className='h-20 bg-slate-200 rounded-xl dark:bg-slate-200 w-full mb-3'></div>
                                <div className='h-20 bg-slate-200 rounded-xl dark:bg-slate-200 w-full mb-3'></div>
                            </div>
                        </Col>
                    )}

                    <Col span={isTabletOrMobile ? 24 : 16}>
                        <Row gutter={[16, 16]}>
                            {events.map((event) => (
                                <Col span={isTabletOrMobile ? 24 : 12} key={event.id}>
                                    <Event event={event} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Content>
        </>
    );
};

export default PlacesList;
