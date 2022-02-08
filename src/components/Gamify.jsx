import { Typography, Tag, Button, Table, Space, Card } from "antd";
import  Donuts  from "../Donut.png";
import { FireFilled } from "@ant-design/icons";
import Mages from "../Mages.png"
import Hoodie from "../Hoodie.png"
import CandyMachine from "../Candy_Machine.png"
import { useMoralis } from 'react-moralis';
import { useEffect } from "react";
import useCollectors from 'hooks/useCollectors';


export default function Gamify({tab}) {

  const { Title } = Typography;
  const { Moralis, account, isInitialized, isAuthenticated} = useMoralis();

  useEffect(() => {
    if (isInitialized && isAuthenticated) {
      const fetch = async () => {
        await getUser();
      }
      fetch()
    }
  }, [isInitialized, isAuthenticated])

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
    rew: {
      marginTop: "20px",
      marginBottom: "35px",
      display: "flex",
      gap: "35px",
      flexWrap: "wrap",
    },
    rewardCard: {
      width: "310px",
      height: "400px",
      borderRadius: "15px",
    },
    rewardImg: {
      height: "200px",
      overflow: "hidden",
      borderRadius: "15px 15px 0 0",
    },
    cardImg: {
      overflow: "hidden",
      borderRadius: "15px 15px 0 0",
      width: "47%",
      height: "50%",
      margin: "0 auto",
    },
    bottom: {
      position: "absolute",
      bottom: "24px",
      left: "24px",
      width: "262px",
      display: "flex",
      justifyContent: "space-between",
    },

  };
    
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

        <p style={{ color: "gray", marginBottom: "35px"}}>
          Dilligently collecting cute cartoon donuts leads to delicious sprinkle coin rewards and whitelists you for the cute coffee NFT drop.
        </p>

        <Tag color="rgba(47, 79, 79, 0.2)" style={{ color: "#21bf96"}}>Claim Rewards</Tag>

        <div style={styles.rew}>
          <Card 
            hoverable
            style={styles.rewardCard}
            cover={
              <div style={styles.rewardImg}>
                <img src={Mages} alt="" ></img>
              </div>
            }
            >
              <Title level={5} style={{ color: "white"}}>
                Donut Collector - Mage NFT
              </Title>
              <p style={{color: "gray"}}>
                Collect enough donuts to earn the title of Glazed lord.
              </p>

              <div style={styles.bottom}>
                <Space size={"small"}>
                  <span title={{ color: "gray"}}>Price:</span>
                  <Tag color={"#324252"} style={{height: "22px"}}>
                    <FireFilled /> 2000
                  </Tag>
                </Space>
                <span style={{ color: "gray" }}>Supply: 670:1000</span>
              </div>
            </Card>

            <Card 
            hoverable
            style={styles.rewardCard}
            cover={
              <div style={styles.rewardImg}>
                <img src={Hoodie} alt="" ></img>
              </div>
            }
            >
              <Title level={5} style={{ color: "white"}}>
                Donut Nation Merch - Coffee Mug
              </Title>
              <p style={{color: "gray"}}>
                Sick ass mug to drink coffee with
              </p>

              <div style={styles.bottom}>
                <Space size={"small"}>
                  <span title={{ color: "gray"}}>Price:</span>
                  <Tag color={"#324252"} style={{height: "22px"}}>
                    <FireFilled /> 1000
                  </Tag>
                </Space>
                <span style={{ color: "gray" }}>Supply: Infinite</span>
              </div>
            </Card>

            <Card 
            hoverable
            style={styles.rewardCard}
            cover={
              <div style={styles.cardImg}>
                <img src={CandyMachine} alt="" ></img>
              </div>
            }
            >
              <Title level={5} style={{ color: "white"}}>
                Candy Machine NFT
              </Title>
              <p style={{color: "gray"}}>
                Can be staked to earn gumballs, used to level up your Candy Mage
              </p>

              <div style={styles.bottom}>
                <Space size={"small"}>
                  <span title={{ color: "gray"}}>Price:</span>
                  <Tag color={"#324252"} style={{height: "22px"}}>
                    <FireFilled /> 2200
                  </Tag>
                </Space>
                <span style={{ color: "gray" }}>Supply: 4700</span>
              </div>
            </Card>
        </div>


        </div>
    );
  }
}

