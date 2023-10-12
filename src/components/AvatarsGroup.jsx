import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { Avatar, Tooltip } from "antd";

function AvatarsGroup() {
    return (
        <div>
            <Avatar.Group
                maxCount={3}
                maxPopoverTrigger="click"
                size="small"
                maxStyle={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                    cursor: "pointer",
                }}
            >
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar
                    style={{
                        backgroundColor: "#f56a00",
                    }}
                >
                    K
                </Avatar>
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
                <Avatar
                    style={{
                        backgroundColor: "#1677ff",
                    }}
                    icon={<AntDesignOutlined />}
                />
                <Avatar
                    style={{
                        backgroundColor: "#1677ff",
                    }}
                    icon={<AntDesignOutlined />}
                />
                <Avatar
                    style={{
                        backgroundColor: "#1677ff",
                    }}
                    icon={<AntDesignOutlined />}
                />
                <Avatar
                    style={{
                        backgroundColor: "#1677ff",
                    }}
                    icon={<AntDesignOutlined />}
                />
            </Avatar.Group>
        </div>
    );
}

export default AvatarsGroup;
