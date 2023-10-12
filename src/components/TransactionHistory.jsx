import React from "react";
import { DatePicker } from "antd";
import { Select, Space } from "antd";
import Tables from "./Tables";
const handleChange = (value) => {
    console.log(`selected ${value}`);
};

function TransactionHistory() {
    return (
        <div className="mt-[50px]">
            <div className="flex justify-between items-center">
                <p className="font-medium text-[25px]">Transastion History</p>
                <DatePicker
                    placeholder="month"
                    picker="month"
                    bordered={true}
                />
            </div>
            <div className="flex gap-[10px] mt-[20px] overflow-x-auto">
                <div>
                    <Space wrap>
                        <Select
                            className="custom-select"
                            defaultValue="Recepient"
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: "recepient",
                                    label: "Recepient",
                                },
                            ]}
                        />
                    </Space>
                </div>
                <div>
                    <Space wrap>
                        <Select
                            className="custom-select"
                            defaultValue="Amount"
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: "amount",
                                    label: "Amount",
                                },
                            ]}
                        />
                    </Space>
                </div>
                <div>
                    <Space wrap>
                        <Select
                            className="custom-select"
                            defaultValue="Status"
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: "status",
                                    label: "Status",
                                },
                            ]}
                        />
                    </Space>
                </div>
            </div>
            <div className="mt-[25px] overflow-x-auto">
                <Tables />
            </div>
        </div>
    );
}

export default TransactionHistory;
