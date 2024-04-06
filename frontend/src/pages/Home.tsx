import { Col, Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';
import AuthService from '../api/AuthService';
import { observer } from 'mobx-react-lite';

const Home = observer(() => {
    return (
        <>
            <Layout style={{ background: '#ffffff' }}>
                <Header
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'end',
                        background: '#ffffff',
                        borderBottom: '1px solid #e8e8e8',
                    }}
                >
                    <Col>
                        <Link
                            onClick={() => {
                                AuthService.logout();

                                setTimeout(() => {
                                    window.location.href = '/login';
                                }, 100);
                            }}
                            to='/login'
                            style={{ marginLeft: 20 }}
                        >
                            <LogoutOutlined />
                        </Link>
                    </Col>
                </Header>
                <Content style={{ padding: '0 50px 50px 50px' }}>content</Content>
            </Layout>
        </>
    );
});

export default Home;
