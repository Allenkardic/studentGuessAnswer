import React from "react";
import "../App.css";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const history = useHistory();

  const [isLoading, setIsLoading] = React.useState(false);

  // const data = [
  //   { userName: "@aliakwe", attempt: 5 },
  //   { userName: "@farouk", attempt: 10 },
  //   { userName: "@emma", attempt: 7 },
  //   { userName: "@kardic", attempt: 4 },
  // ];

  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setIsLoading(true);

    axios({
      method: "get",
      url: "https://question-ranking.herokuapp.com/attempts",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return <div>loading</div>;
  } else {
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
            <div style={{ textAlign: "left", width: "50%" }} className='header'>
              User names
            </div>
            <div
              style={{
                textAlign: "center",
                width: "20%",
              }}
              className='header'
            >
              Attempts
            </div>
            <div
              style={{ textAlign: "right", width: "30%" }}
              className='header'
            >
              Successful attempt
            </div>
          </div>
          {data.map((item, index) => {
            const att = item.answers;
            const attss = att.split(",");
            return (
              <div key={index} className='dashItem'>
                <div style={{ textAlign: "left", width: "50%" }}>
                  {item.hasOwnProperty("username") ? item.username : "@mimi"}
                </div>
                <div
                  style={{
                    textAlign: "center",
                    width: "20%",
                  }}
                >
                  {attss.length - 1}
                </div>
                <div style={{ textAlign: "right", width: "30%" }}>
                  {item.correct ? "true" : "false"}
                </div>
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
}

export default Dashboard;
