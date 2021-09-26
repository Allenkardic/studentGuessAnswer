import React from "react";
import "../App.css";
import { useHistory, Link } from "react-router-dom";

function Attempt() {
  const history = useHistory();

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    if (value.length < 1) {
      alert("You must enter a number to try");
    } else {
      alert("success");
      // history.push(`/attempt/${value}`);
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
