import { Typography, Tag, Button, Table, Space } from "antd";
import  Donuts  from "../Donut.png";
import { FireFilled } from "@ant-design/icons";

export default function Gamify({tab}) {

  const { Title } = Typography;

  const days =[10, 10, 20, 30, 50, 80, 130];
  const dataSource = [];
  const columns = [
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
    },
    {
      title: "Candy-Mage",
      dataIndex: "ethAddress",
      key: "ethAddress",
    },
    {
      title: "Donuts Eaten",
      dataIndex: "runes",
      key: "runes",
      align: "right",
    },
  ]

  const styles = {
    collected: {
      marginTop: "20px",
      marginBottom: "40px",
      width: "310px",
      height: "150px",
      background: "#21bf96",
      borderRadius: "20px",
      display: "flex",
      overflow: "hidden",
    },
    colHeading: {
      padding: "27px",
      fontSize: "12px",
      width: "200px",
    },
    count: {
      fontSize: "28px",
      fontWeight: "600",
      marginTop: "5px",
    },

    daily: {
      marginTop: "20px",
      marginBottom: "35px",
      display: "flex",
      justifyContent: "space-between",
    },
    collect: {
      background: "#21bf96",
      borderColor: "#21bf96",
      width: "150px",
    },
    claimrow: {
      display: "flex",
      gap: "25px",
      marginBottom: "35px",
      flexWrap: "wrap",
    },
  }
    
  if (tab === "donuts") {
    return (
      <div style={{width:"70vw", paddingLeft:"5vw"}}>
      <Title level={2} style={{ color: "white" }}>My Donuts
      
      </Title>
      <p style={{ color: "grey" }}>
        Sunday, Sunday, Sunday. It's time to eat some fucking donuts.
      </p>

      < div style={styles.collected}>
        <div style={styles.colHeading}>
          <span>My Donuts</span>
          <p style={styles.count}>120</p>
        </div>
        <div>
          <img src={Donuts} style={{margin: "5px auto", width: "70%"}} alt="Dooonnnnuttttsssss"/>
        </div>
      </div>

      <Tag color="rgba(47, 79, 79, 0.2)" style={{color: "#21bf96"}}>
        Eat Donuts
      </Tag>

      <div style={styles.daily}>
        <div>
          <Title level={3} style={{ color: "white"}}>
            Daily Donut Collection
          </Title>
          <p style={{ color: "gray"}}>
              Eat all the donuts! Are we also collecting donuts? Who Knows! Idgaf!
            </p>
        </div>
        <Button style={styles.collect}>Collect Donuts</Button>
      </div>

      <div style={styles.claimrow}>
        {days.map((e, i) => (
          <>
          <div className={"runeBtn"}>
          <p style={{ fontSize: "12px"}}>{`Day ${i + 1}`}</p>
          <img src={Donuts} alt="Cute Donuts" style={{ width: "40%", margin: "6px auto"}}
          />
          <p style={{ color: "white", fontSize: "18px"}}>{`+${e}`}</p>
          </div>
          </>
      ))}
      </div>
      <span style={{color: "gray" }}>
        Check me out on Github{" "}
        <a href="https://www.github.com/0xSardius" target="_blank">My profile</a>
      </span>

      </div>
      );
  }

  if (tab === "leaderboard") {
    return (
        <div style={{width:"70vw", paddingLeft:"5vw"}}>
         <Title level={2} style={{ color: "white" }}>
        Donut Lovers Leaderboard
      </Title>
      <p style={{ color: "gray" }}>
        Ranking of donut lovers based on their collections or something.
      </p>
      <Table style={{ marginTop: "35px"}} dataSource={dataSource}
        columns={columns} />      
      </div>
      );

  }
  if (tab === "rewards") {
    return (
      <div style={{width:"70vw", paddingLeft:"5vw"}}>
      <div style={{ display: "flex", justifyContent: "space-between"}}>
         <Title level={2} style={{ color: "white" }}>
        Get some piping hot donuts motherfucker
      </Title>

      <Space size={"small"}>
        <span style={{ color: "gray" }}>Your Donuts:</span>
        <Tag color={"324252"} style={{ height: "22px"}}>
          <FireFilled /> 120
        </Tag>
      </Space>
      
        </div>
        </div>
    );
  }
}

