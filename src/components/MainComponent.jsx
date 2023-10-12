import React, { useState } from "react";
import SideNav from "./SideNav";
import SiderRight from "./SiderRight";
import ProfileSection from "./ProfileSection";
import TotalProfitSection from "./TotalProfitSection";
import TotalScaleAndCost from "./TotalScaleAndCost";
import TransactionHistory from "./TransactionHistory";
import { MenuUnfoldOutlined } from "@ant-design/icons";

import { Layout, theme } from "antd";
const { Content, Sider } = Layout;

function MainComponent() {
    const [steps, setSteps] = useState(0);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ maxWidth: "1440px", marginInline: "auto" }}>
            <Sider width={250} className="hidden tablet:block">
                <SideNav />
            </Sider>
            {steps == 1 ? (
                <Sider
                    width={250}
                    style={{
                        position: "absolute",
                        zIndex: "5",
                        height: "100vh",
                    }}
                >
                    <SideNav setSteps={setSteps} />
                </Sider>
            ) : null}
            <Content>
                <div className="flex w-full">
                    <div className="w-full p-[20px] bg-white">
                        <MenuUnfoldOutlined
                            onClick={() => {
                                steps == 0 ? setSteps(1) : setSteps(0);
                            }}
                            className="text-[30px] pb-[20px] text-blue-700 tablet:hidden "
                        />
                        <ProfileSection setSteps={setSteps} steps={steps} />
                        <TotalProfitSection />
                        <TotalScaleAndCost />
                        <TransactionHistory />
                    </div>
                </div>
            </Content>
            <Sider width={250} className="hidden tablet:block">
                <SiderRight />
            </Sider>
            {steps == 2 ? (
                <Sider
                    className="tablet:hidden"
                    width={250}
                    style={{
                        position: "absolute",
                        zIndex: "5",
                        right: "0",
                        paddingLeft: "10px",
                        height: "100vh",
                    }}
                >
                    <SiderRight />
                </Sider>
            ) : null}
        </Layout>
    );
}

export default MainComponent;
