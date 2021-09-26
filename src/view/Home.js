import React from "react";
import "../index.css";
import { useHistory, Link } from "react-router-dom";

function Home() {
  const id = "emma";
  const history = useHistory();

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    if (value.length < 3) {
      alert("Enter user name to continue");
    } else {
      history.push(`/attempt/${value}`);
    }
  };

  console.log(value, "here");
  return (
    <div>
      <div className='titleText'>Welcome to Guess MiMI</div>
      <div className='normalText'>
        The system generates a number from a range of of 0 to 100.
      </div>
      <div className='helperText'>You have 5 attempts to guess the number</div>

      <div>
        <form onSubmit={handleSubmit}>
          <div className='inputContainer'>
            {/* <div>Enter user name</div> */}
            <label className='label'>Enter username</label>
            <input
              className='userNameInput'
              type='text'
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
          Start Attempt
        </div>
        {/* </Link> */}
      </div>

      <div
        className='btn-container'
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        {/* <Link to={`/attempt/${id}`}> */}
        <div onClick={() => history.push(`/dashboard`)} className='btn'>
          View dashboard
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Home;
