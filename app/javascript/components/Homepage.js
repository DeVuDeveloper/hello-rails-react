import React from "react";

class Homepage extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='container'>
          <h1>Rails-React testing</h1>
          <a onClick={() => {window.location.href="/greetings"}} className="testing">redirect to greetings</a>
        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;