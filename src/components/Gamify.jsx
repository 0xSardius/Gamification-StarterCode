import { Typography, Tag, Button } from "antd";
import  Runes  from "../Runes.png";

export default function Gamify({tab}) {

  const { Title } = Typography;

  const days =[10, 10, 20, 30, 50, 80, 130];

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
  }
    
  if (tab === "runes") {
    return (
      <div style={{width:"70vw", paddingLeft:"5vw"}}>
      <Title level={2} style={{ color: "white" }}>My Life Gems
      
      </Title>
      <p style={{ color: "grey" }}>
        Collect life gems, build with your community, and create your dream.
      </p>

      < div style={styles.collected}>
        <div style={styles.colHeading}>
          <span>My Life Gems</span>
          <p style={styles.count}>120</p>
        </div>
        <div>
          <img src={Runes} alt="A fistful of beautiful life gems"/>
        </div>
      </div>

      <Tag color="rgba(47, 79, 79, 0.2)" style={{color: "#21bf96"}}>
        Stack Life Gems
      </Tag>

      <div style={styles.daily}>
        <div>
          <Title level={3} style={{ color: "white"}}>
            Daily Life Gem Collection
          </Title>
          <p style={{ color: "gray"}}>
              Increase your HP and grow your life gem collection!
            </p>
        </div>
        <Button style={styles.collect}>Collect Life Gems</Button>
      </div>

      <div style={styles.claimrow}>
        {days.map((e, i) => (
          <>
          <div className={"runeBtn"}>
          <p style={{ fontSize: "12px"}}>{`Day ${i + 1}`}</p>
          <img src={Runes} alt="Life gems" style={{ width: "40%", margin: "6px auto"}}
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
      <div>
        leaderboard
      </div>
      );

  }
  if (tab === "rewards") {
    return (
      <div>
        rewards
      </div>
      );
  }
}

