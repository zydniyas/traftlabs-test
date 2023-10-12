import React, { useState } from "react";
import { MenuFoldOutlined } from "@ant-design/icons";

import {
    HomeOutlined,
    FundOutlined,
    CompassOutlined,
    ShoppingOutlined,
    InboxOutlined,
    SettingOutlined,
    QuestionCircleOutlined,
    FolderOutlined,
} from "@ant-design/icons";

function SideNav({ setSteps }) {
    const [step, setstep] = useState(0);
    // const [id, setId] = useState(0);
    const sideMenu = [
        { icon: <HomeOutlined />, text: "Home", id: "0", step: "0" },
        { icon: <FundOutlined />, text: "Analytic", id: "1", step: "1" },
        { icon: <CompassOutlined />, text: "Explore", id: "2", step: "2" },
        { icon: <ShoppingOutlined />, text: "Shope", id: "3", step: "3" },
        { icon: <InboxOutlined />, text: "Inbox", id: "4", step: "4" },
    ];

    const Tools = [
        { icon: <SettingOutlined />, text: "Settings", id: "5", step: "5" },
        { icon: <QuestionCircleOutlined />, text: "Help", id: "6", step: "6" },
    ];
    const Projects = [
        { icon: <FolderOutlined />, text: "Amazone", id: "7", step: "7" },
        { icon: <FolderOutlined />, text: "Invinity HQ", id: "8", step: "8" },
    ];
    return (
        <div className="max-w-[250px]  border-r w-full p-[20px]">
            <div className="flex justify-between">
                <div className="flex gap-[10px] pb-[30px]">
                    <img
                        src="/assets/img/svg/react-icon.svg"
                        alt=""
                        className="max-w-[30px]"
                    />
                    <p className="font-bold text-[24px]">Omoi</p>
                </div>
                <MenuFoldOutlined
                    onClick={() => {
                        setSteps(0);
                    }}
                    className="text-[30px] pb-[20px] text-blue-700 tablet:hidden "
                />
            </div>
            <div className="flex flex-col gap-[10px]">
                {sideMenu.map((item, index, id) => {
                    return (
                        <div
                            id={item.id}
                            onClick={() => {
                                setstep(item.step);
                            }}
                            className={`flex items-center gap-[10px]  rounded-[10px] max-w-[200px] p-[15px] 
cursor-pointer ${item.id == step ? "bg-blue-700 text-white " : null}`}
                            key={index}
                        >
                            {item.icon}
                            <p
                                className={`text-[18px] ${
                                    item.id == step ? "text-white  " : null
                                }  `}
                            >
                                {item.text}
                            </p>
                        </div>
                    );
                })}
            </div>
            <p className="pb-[20px] pt-[20px]">Tool</p>
            <div className="flex flex-col gap-[10px]">
                {Tools.map((item, index, id) => {
                    return (
                        <div
                            onClick={() => {
                                setstep(item.step);
                            }}
                            id={item.id}
                            className={`flex items-center gap-[10px]  rounded-[10px] max-w-[200px] p-[15px] ${
                                item.id == step
                                    ? "bg-blue-700 text-white "
                                    : null
                            }`}
                            key={index}
                        >
                            {item.icon}
                            <p
                                className={`text-[18px] ${
                                    item.id == step ? "text-white  " : null
                                }  `}
                            >
                                {item.text}
                            </p>
                        </div>
                    );
                })}
            </div>
            <p className="pb-[20px] pt-[20px]">Projects</p>
            <div className="flex flex-col gap-[10px]">
                {Projects.map((item, index, id) => {
                    return (
                        <div
                            onClick={() => {
                                setstep(item.step);
                            }}
                            id={item.id}
                            className={`flex items-center gap-[10px]  rounded-[10px] max-w-[200px] p-[15px] ${
                                item.id == step
                                    ? "bg-blue-700 text-white "
                                    : null
                            }`}
                            key={index}
                        >
                            {item.icon}
                            <p
                                className={`text-[18px] ${
                                    item.id == step ? "text-white  " : null
                                }  `}
                            >
                                {item.text}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SideNav;
