import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Progress, Space, Input, Badge } from "antd";
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
function ProfileSection({ setSteps, steps }) {
    const [step, setStep] = useState(0);
    return (
        <div className="w-full">
            <div className="flex justify-between w-full">
                <div
                    onClick={() => {
                        setStep(0);
                    }}
                    className="flex items-center gap-[30px] flex-wrap desktop:flex-nowrap"
                >
                    <div>
                        <Space wrap>
                            <div
                                onClick={() => {
                                    {
                                        steps == 0 ? setSteps(2) : setSteps(0);
                                    }
                                }}
                                className="relative 
cursor-pointer"
                            >
                                <Badge
                                    count={5}
                                    style={{ backgroundColor: "blue" }}
                                >
                                    <Progress
                                        type="dashboard"
                                        percent={75}
                                        size={80}
                                    ></Progress>
                                </Badge>
                                <img
                                    className="progress-img"
                                    src="/assets/img/png/avatar1.png"
                                    alt="Your Image"
                                />
                            </div>
                        </Space>
                    </div>
                    <div>
                        <p className="font-bold text-[24px]">
                            Good Evening Team!
                        </p>
                        <p className="text-[18px] text-stone-400">
                            Have an in-depth look at all the metrics within your
                            dashboard
                        </p>
                    </div>
                </div>
                <div>
                    {step == 0 ? (
                        <div
                            onClick={() => {
                                {
                                    step === 0 ? setStep(1) : step(0);
                                }
                            }}
                            className="bg-stone-300 p-[0] rounded-[50px] h-[50px] w-[50px] flex justify-center 
cursor-pointer"
                        >
                            <SearchOutlined />
                        </div>
                    ) : null}
                    {step == 1 ? (
                        <Search
                            placeholder="input search text"
                            onSearch={onSearch}
                            style={{
                                width: 200,
                            }}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default ProfileSection;
