import React from "react";
import { Table, Tag, Avatar, Tooltip } from "antd";

import {
    AntDesignOutlined,
    UserOutlined,
    CheckCircleOutlined,
    ClockCircleOutlined,
} from "@ant-design/icons";

const columns = [
    {
        title: "Customer",
        dataIndex: "avatar",
        key: "avatar",
        render: (text, record) => (
            <div className="flex items-center">
                <img
                    src={record.avatar}
                    alt="Avatar"
                    style={{ width: "30px", marginRight: "10px" }}
                    className="rounded-[50px]"
                />
                <div className="">
                    <p>{record.name}</p>
                    <p className="text-[10px]">{record.mail}</p>
                </div>
            </div>
        ),
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (text, record) => (
            <div className="flex items-center">
                <Tag icon={record.icons} color={record.color}>
                    {record.status}
                </Tag>
            </div>
        ),
    },
    {
        title: "Date",
        dataIndex: "date",
        key: "date",
        render: (text, record) => <p className="font-bold">{record.date}</p>,
    },
    {
        title: "Invoice",
        dataIndex: "invoice",
        key: "invoice",
        render: (text, record) => (
            <p className="font-bold">${record.invoice}</p>
        ),
    },
    {
        title: "People",
        dataIndex: "people",
        key: "people",
        render: (text, record) => (
            <div>
                <Avatar.Group>
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                    <a href="https://ant.design">
                        <Avatar
                            style={{
                                backgroundColor: "#f56a00",
                            }}
                        >
                            K
                        </Avatar>
                    </a>
                    <Tooltip title="Ant User" placement="top">
                        <Avatar
                            style={{
                                backgroundColor: "#87d068",
                            }}
                            icon={<UserOutlined />}
                        />
                    </Tooltip>
                    <Avatar
                        style={{
                            backgroundColor: "#1677ff",
                        }}
                        icon={<AntDesignOutlined />}
                    />
                </Avatar.Group>
            </div>
        ),
    },
];

const data = [
    {
        key: "1",
        avatar: "/assets/img/jpg/avatar1.jpg",
        name: "John Brown",
        mail: "johnbrown@gmail.com",
        status: "Success",
        color: "success",
        icons: <CheckCircleOutlined />,
        date: "Nov 2, 2023",
        invoice: "100,00",
        tags: ["nice", "developer"],
    },
    {
        key: "2",
        avatar: "/assets/img/jpg/avatar2.jpg",
        name: "Jolly Brown",
        mail: "jollybrown@gmail.com",
        status: "Pending",
        color: "warning",
        icons: <ClockCircleOutlined />,
        date: "Nov 2, 2023",
        invoice: "100,00",
        tags: ["nice", "developer"],
    },
];

export default function Tables() {
    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={false} />
        </div>
    );
}
