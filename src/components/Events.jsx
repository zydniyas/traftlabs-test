import React from "react";
import {
    LaptopOutlined,
    VideoCameraOutlined,
    ClockCircleOutlined,
    SnippetsOutlined,
    FormOutlined,
} from "@ant-design/icons";
function Events() {
    return (
        <div className="bg-white">
            <div className="flex items-center gap-2 p-3   border-b">
                <div className="bg-[gray] px-[10px] py-[7px] max-w-max rounded-[50px]">
                    <LaptopOutlined />
                </div>
                <div>
                    <p>Meeting with Client</p>
                    <div className="flex items-center gap-1">
                        <VideoCameraOutlined />
                        <p>Google Meet</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 self-end">
                    <ClockCircleOutlined />
                    <p>12pm</p>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-2 p-3   border-b">
                    <div className="bg-[gray] px-[10px] py-[7px] max-w-max rounded-[50px]">
                        <SnippetsOutlined />
                    </div>
                    <div>
                        <p>Weekly Report</p>
                        <div className="flex items-center gap-1">
                            <VideoCameraOutlined />
                            <p>Google Meet</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 self-end">
                        <ClockCircleOutlined />
                        <p>03pm</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-2 p-3   border-b">
                    <div className="bg-[gray] px-[10px] py-[7px] max-w-max rounded-[50px]">
                        <FormOutlined />
                    </div>
                    <div>
                        <p>Daily Scrum Meeting</p>
                        <div className="flex items-center gap-1">
                            <VideoCameraOutlined />
                            <p>Google Meet</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 self-end">
                        <ClockCircleOutlined />
                        <p>05pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
