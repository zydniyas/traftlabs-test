import React from "react";

function TotalProfitSection() {
    const profit = [
        {
            img: "/assets/img/jpg/money-bag.jpg",
            title: "Monthly Revenue",
            profit: "$3.500",
            growth: " +2.4%",
            previousMonth: "previousMonth",
            previousMonthProfit: " $1.7k",
        },
        {
            img: "/assets/img/jpg/money-bag.jpg",
            title: "Monthly Sales",
            profit: "$6.750",
            growth: " +1.4%",
            previousMonth: "previousMonth",
            previousMonthProfit: " $3.1k",
        },
        {
            img: "/assets/img/jpg/money-bag.jpg",
            title: "Total Profit",
            profit: "$0.900",
            growth: " +4.3%",
            previousMonth: "previous year",
            previousMonthProfit: " $8.9k",
        },
    ];
    return (
        <div className="mt-[50px]">
            <div className="bg-blue-700 rounded-[10px] px-[10px] py-[30px] flex gap-[20px] mob:gap-[10px] justify-center tablet:justify-evenly  flex-wrap tablet:flex-nowrap ">
                {profit.map((item, index) => {
                    return (
                        <div
                            className="flex items-center gap-[10px]"
                            key={index}
                        >
                            <img
                                src={item.img}
                                alt=""
                                className="w-[55px] rounded-[50px]"
                            />
                            <div className="flex flex-col gap-[5px]">
                                <p className="text-neutral-300">{item.title}</p>

                                <div className="flex items-center gap-[10px]">
                                    <p className="text-white font-bold">
                                        {item.profit}
                                    </p>
                                    <div className="bg-white max-w-max p-[5px] rounded-[50px] text-blue-700 font-bold">
                                        {item.growth}
                                    </div>
                                </div>
                                <p className="text-neutral-300">
                                    {item.previousMonth}
                                    <span className="text-white font-bold">
                                        {item.previousMonthProfit}
                                    </span>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TotalProfitSection;
