import React from 'react';
import {Redirect, useLocation} from "react-router-dom";
import Flex from 'components/shared-components/Flex'
import {Form, Avatar, Button, Input, DatePicker, Row, Col, message, Upload} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {ROW_GUTTER} from 'constants/ThemeConstant';
import {useHistory} from 'react-router-dom';
import {APP_PREFIX_PATH} from "../../../configs/AppConfig";
import axios from "axios";


const Profile = () => {
    const location = useLocation()
    const user = location.state
    const history = useHistory()

    function sendRequest(newData) {
        return axios({
            method: 'post',
            url: '/profile',
            data: newData
        });

    }

    const onFinish = values => {
        const key = 'updatable';
        message.loading({content: 'Updating...', key});
        setTimeout(() => {
            const newData = {
                name: values.name,
                email: values.email,
                userName: values.username,
                dateOfBirth: values.dateOfBirth,
                phoneNumber: values.phoneNumber,
                website: values.website,
                address: values.address,
                city: values.city,
                postcode: values.postcode
            }
            message.success({content: 'Check Network!', key, duration: 2});
            history.push(`${APP_PREFIX_PATH}/clients/clients-list`);
            setTimeout(() => {
                message.destroy();
            }, 1000)
            sendRequest(newData)
        }, 1000);

    };


    return (
        <>
            <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
                <Avatar size={90} src={''} icon={<UserOutlined/>}/>
                <div className="ml-md-3 mt-md-0 mt-3">
                    <Upload showUploadList={false}>
                        <Button type="primary">Change Avatar</Button>
                    </Upload>
                    <Button className="ml-2">Remove</Button>
                </div>
            </Flex>
            <div className="mt-4">
                <Form
                    name="basicInformation"
                    layout="vertical"
                    initialValues={
                        {
                            'name': user.name,
                            'email': user.email,
                            'username': user.username,
                            'dateOfBirth': "",
                            'phoneNumber': user.phone,
                            'website': user.website,
                            'address': user.address.street,
                            'city': user.address.city,
                            'postcode': user.zipcode
                        }
                    }
                    onFinish={onFinish}
                >
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={16}>
                            <Row gutter={ROW_GUTTER}>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Name"
                                        name="name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name!',
                                            },
                                        ]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!'
                                            },
                                        ]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[{
                                            required: true,
                                            type: 'email',
                                            message: 'Please enter a valid email!'
                                        }]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Date of Birth"
                                        name="dateOfBirth"
                                    >
                                        <DatePicker className="w-100"/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Phone Number"
                                        name="phoneNumber"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Website"
                                        name="website"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24}>
                                    <Form.Item
                                        label="Address"
                                        name="address"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="City"
                                        name="city"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Post code"
                                        name="postcode"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button type="primary"
                                    htmlType="submit">
                                Save Change
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    );
};

export default Profile;
