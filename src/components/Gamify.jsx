import { Typography } from "antd";
import { Runes } from "../Runes.png";

export default function Gamify({tab}) {

  const { Title } = Typography
    
  if (tab === "runes") {
    return (
      <div style={{width:"70vw", paddingLeft:"5px"}}>
      <Title level={2} style={{ color: "white" }}>My Prosperity Shards
      
      </Title>
      <p style={{ color: "grey" }}>
        Collect prosperity shards, build with your community, and create your dream.
      </p>

      < div style={styles.collected}>
        <div style={styles.colHeading}>
          <span>My Shards</span>
          <p style={styles.count}>120</p>
        </div>
        <div>
          <img src={Runes} alt="A fistfull of beautiful shards"/>
        </div>
      </div>
      
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

