import React from "react";
import { CaretUpOutlined } from "@ant-design/icons";
import Chart from "./Chart";
function TotalScaleAndCost() {
    return (
        <div className="border rounded-[10px] p-[20px] mt-[50px] flex flex-wrap gap-[30px] mob:gap-0  items-center justify-center mob:justify-between">
            <div className="flex flex-col gap-[50px]">
                <div>
                    <p className="font-medium text-[30px]">
                        Total Sales & Cost{" "}
                    </p>
                    <p className="text-[18px] text-stone-400">Last 60 days</p>
                </div>
                <div>
                    <div className="flex items-center gap-[10px]">
                        <p className="font-bold text-[40px] text-blue-700">
                            {" "}
                            $956.82k
                        </p>
                        <div className="bg-green-300 text-[green] max-w-max rounded-[50px] flex p-[5px] gap-1">
                            <CaretUpOutlined />
                            <p>+5.4%</p>
                        </div>
                    </div>
                    <p className="text-[18px] text-stone-400">
                        <span className="text-[green] ">+8.20k</span> vs prev.
                        60 days
                    </p>
                </div>
            </div>
            <Chart />
        </div>
    );
}

export default TotalScaleAndCost;
