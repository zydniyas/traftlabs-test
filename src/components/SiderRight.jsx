import React from "react";
import ProfileDropdown from "./ProfileDropdown";
import NotificationIcon from "./NotificationIcon";
import AvatarsGroup from "./AvatarsGroup";
import Calander from "./Calander";
import { DownOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

function SiderRight() {
    const items = [
        {
            key: "1",
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                >
                    1st menu item
                </a>
            ),
        },
    ];
    return (
        <div className="w-full pt-[20px]">
            <div className="flex items-center justify-between w-full pb-[50px]">
                <NotificationIcon />
                <ProfileDropdown />
            </div>
            <p className="text-blue-700 mb-[10px]">Premium Access</p>
            <p className="font-medium text-[30px] leading-8 mb-[10px]">
                Take Back Your Creative Control
                <span>
                    <AvatarsGroup />
                </span>
            </p>

            <div className="mb-[10px]">
                <Dropdown
                    menu={{
                        items,
                    }}
                >
                    <a
                        className="text-stone-400"
                        onClick={(e) => e.preventDefault()}
                    >
                        <Space>
                            The Profesional Platform
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
            <div className="flex justify-between font-medium items-center text-blue-700 border rounded px-[15px] py-[5px] ">
                <p>Upgrade Now</p>
                <ArrowRightOutlined />
            </div>
            <hr className="my-[10px]" />
            <Calander />
        </div>
    );
}

export default SiderRight;
