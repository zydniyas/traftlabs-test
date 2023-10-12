import React, { useState } from "react";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

function MonthSelector() {
    const [type, setType] = useState("time");

    return (
        <div>
            <div>
                <DatePicker picker="month" bordered={true} />
            </div>
        </div>
    );
}

export default MonthSelector;
