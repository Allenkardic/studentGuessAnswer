import React from "react";
import "../App.css";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

function Attempt(props) {
  const history = useHistory();

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const { id } = props.match.params;

  const handleSubmit = () => {
    if (value.length < 1) {
      alert("You must enter a number to try");
    } else {
      // history.push(`/attempt/${value}`);

      axios({
        method: "post",
        url: "https://question-ranking.herokuapp.com/attempt",
        data: {
          attemptId: parseInt(id),
          answer: parseInt(value),
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(function (response) {
          console.log(response, "20000");

          alert(response.data.data);
          history.push(`/`);
          // const { id } = response.data;
          // history.push(`/attempt/${id}`);
        })
        .catch(function (error) {
          if (error.response) {
            // Request made and server responded
            alert(error.response.data.data);

            // console.log(error.response.data.data, "datatta");
            // console.log(error.response.status, "status");
            // console.log(error.response.headers, "header");
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request, "request");
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
        });
    }
  };

  const handleCancel = () => {
    history.push(`/`);
  };
  return (
    <div>
      <div className='titleText'>Guess the number from 0 to 100.</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='inputContainer'>
            {/* <div>Enter user name</div> */}
            <label className='label'>Enter answer</label>
            <input
              className='userNameInput'
              type='number'
              value={value}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <div
        className='btn-container'
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        {/* <Link to={`/attempt/${id}`}> */}
        <div onClick={handleSubmit} className='btn'>
          Try
        </div>
        {/* </Link> */}
      </div>

      <div
        className='btn-container'
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        {/* <Link to={`/attempt/${id}`}> */}
        <div onClick={handleCancel} className='btn-cancel'>
          Cancel
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Attempt;
