import React from "react";
import { Badge } from "antd";
import { BellOutlined } from "@ant-design/icons";

function NotificationIcon() {
    return (
        <div>
            <Badge dot={Badge}>
                <BellOutlined />
            </Badge>
        </div>
    );
}

export default NotificationIcon;
