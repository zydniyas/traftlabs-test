import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, message } from "antd";

const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
};
const items = [
    {
        label: "1st menu item",
        key: "1",
        icon: <UserOutlined />,
    },
    {
        label: "2nd menu item",
        key: "2",
        icon: <UserOutlined />,
    },
    {
        label: "3rd menu item",
        key: "3",
        icon: <UserOutlined />,
        danger: true,
    },
    {
        label: "4rd menu item",
        key: "4",
        icon: <UserOutlined />,
        danger: true,
        disabled: true,
    },
];
const menuProps = {
    items,
    onClick: handleMenuClick,
};

function ProfileDropdown() {
    return (
        <div>
            {" "}
            <Dropdown
                menu={menuProps}
                className="shadow-md rounded-[50px] p-[10px]"
            >
                <div className="flex items-center gap-[10px]">
                    <div className="flex gap-[10px] items-center">
                        <img
                            src="/assets/img/jpg/avatar1.jpg"
                            alt=""
                            className="rounded-[50px] max-w-[30px]"
                        />
                        <p className="font-medium">John Brown</p>
                    </div>
                    <DownOutlined />
                </div>
            </Dropdown>
        </div>
    );
}

export default ProfileDropdown;
