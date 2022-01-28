import { Typography } from "antd";

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

