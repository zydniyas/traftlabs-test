import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import dayLocaleData from "dayjs/plugin/localeData";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import Events from "./Events";

import { Calendar, Select, Typography, theme } from "antd";
dayjs.extend(dayLocaleData);
const Calander = () => {
    const { token } = theme.useToken();
    const onPanelChange = (value, mode) => {
        console.log(value.format("YYYY-MM-DD"), mode);
    };
    const wrapperStyle = {
        width: 250,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };
    return (
        <div className="bg-white">
            <div style={wrapperStyle}>
                <Calendar
                    fullscreen={false}
                    headerRender={({ value }) => {
                        const start = 0;
                        const end = 12;
                        const monthOptions = [];
                        let current = value.clone();
                        const localeData = value.localeData();
                        const months = [];
                        for (let i = 0; i < 12; i++) {
                            current = current.month(i);
                            months.push(localeData.monthsShort(current));
                        }
                        for (let i = start; i < end; i++) {
                            monthOptions.push(
                                <Select.Option
                                    key={i}
                                    value={i}
                                    className="month-item"
                                >
                                    {months[i]}
                                </Select.Option>
                            );
                        }

                        return (
                            <div
                                style={{
                                    padding: 8,
                                }}
                            >
                                <div className="flex justify-between items-center">
                                    <Typography.Title level={4}>
                                        October 2023
                                    </Typography.Title>
                                    <div className="flex items-center gap-[15px]">
                                        <div className="border rounded-[50px] px-[10px] py-[6px] ">
                                            <LeftOutlined />
                                        </div>
                                        <div className="border rounded-[50px] px-[10px] py-[6px] ">
                                            <RightOutlined />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                    onPanelChange={onPanelChange}
                />
            </div>
            <Events />
        </div>
    );
};
export default Calander;
