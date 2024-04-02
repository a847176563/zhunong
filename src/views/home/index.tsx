import { useState } from "react";
import { Avatar, Card, Tabs, Heart } from "antd";
const { Meta } = Card;
function App() {
  const [count, setCount] = useState(0);
  const tabList = [
    { label: "推荐", value: "1" },
    { label: "关注", value: "2" },
    { label: "附近", value: "3" },
    { label: "最新", value: "4" },
  ];
  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const listDetail = [
    {
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      user: "admin",
      like: getRandomInt(1000, 2000),
    },
    {
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      user: "admin",
      like: getRandomInt(1000, 2000),
    },
    {
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      user: "admin",
      like: getRandomInt(1000, 2000),
    },
    {
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      user: "admin",
      like: getRandomInt(1000, 2000),
    },
    {
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      user: "admin",
      like: getRandomInt(1000, 2000),
    },
    {
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      user: "admin",
      like: getRandomInt(1000, 2000),
    },
    {
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      user: "admin",
      like: getRandomInt(1000, 2000),
    },
    {
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      user: "admin",
      like: getRandomInt(1000, 2000),
    },
    {
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      user: "admin",
      like: getRandomInt(1000, 2000),
    },
    {
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      user: "admin",
      like: getRandomInt(1000, 2000),
    },
    {
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      user: "admin",
      like: getRandomInt(1000, 2000),
    },
    {
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      user: "admin",
      like: getRandomInt(1000, 2000),
    },
    {
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      user: "admin",
      like: getRandomInt(1000, 2000),
    },
    {
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      user: "admin",
      like: getRandomInt(1000, 2000),
    },
    {
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      user: "admin",
      like: getRandomInt(1000, 2000),
    },
    {
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      user: "admin",
      like: getRandomInt(1000, 2000),
    },
    {
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      user: "admin",
      like: getRandomInt(1000, 2000),
    },
    {
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      user: "admin",
      like: getRandomInt(1000, 2000),
    },
    {
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      user: "admin",
      like: getRandomInt(1000, 2000),
    },
    {
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      user: "admin",
      like: getRandomInt(1000, 2000),
    },
  ];

  return (
    <div className={"h-[100vh] bg-gradient-to-t from-white to-[#47fe34]"}>
      <Card bordered={false} className={"w-[96%] mx-[2%] h-full"}>
        <Tabs
          className={"w-[100%] "}
          defaultActiveKey="1"
          centered
          items={tabList.map((item, i) => {
            const id = String(i + 1);
            return {
              label: item.label,
              key: id,
            };
          })}
        />
        {listDetail.map((item) => {
          return (
            <Card
              style={{ width: "45%", margin: "2.4%", position: "relative" }}
              cover={<img alt="example" src={item.img} />}
            >
              <Meta
                avatar={
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                }
                title={item.user}
                className={"h-10 items-center"}
              />
              <p className={"relative ml-10 top-[5px]"}>
            
                {item.like}
              </p>
            </Card>
          );
        })}
      </Card>
    </div>
  );
}

export default App;
