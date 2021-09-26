import React from "react";
import "../App.css";
import { useHistory, Link } from "react-router-dom";

function Dashboard() {
  const history = useHistory();

  const data = [
    { userName: "@aliakwe", attempt: 5 },
    { userName: "@farouk", attempt: 10 },
    { userName: "@emma", attempt: 7 },
    { userName: "@kardic", attempt: 4 },
  ];
  return (
    <div>
      <div className='titleText'>Dashboard</div>

      <div className='dashContainer'>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 20,
          }}
        >
          <div className='header'>User names</div>
          <div className='header'>Attempts</div>
        </div>
        {data.map((item, index) => {
          return (
            <div key={index} className='dashItem'>
              <div>{item.userName}</div>
              <div>{item.attempt}</div>
            </div>
          );
        })}
      </div>

      <div
        className='btn-container'
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        {/* <Link to={`/attempt/${id}`}> */}
        <div onClick={() => history.push(`/`)} className='btn'>
          Home
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Dashboard;
