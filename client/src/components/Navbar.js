import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <ul style={style.navbar}>
          <li style={style.navlink}>
            <Link to="/">Home</Link>
          </li>
          <li style={style.navlink}>
            <Link to="/schedule">Schedule</Link>
          </li>
          <li style={style.navlink}>
            <Link to="/recap">Recaps</Link>
          </li>
        </ul>
    )
}

const style = {
  navbar : {
    overflow: "hidden",
    backgroundColor: "#333",
    position: "fixed",
    top: 0,
    width: "100%",
    margin: 0
  },
  
  /* Navbar links */
  navlink : {
    float: "left",
    display: "block",
    color: "white",
    textAlign: "center",
    padding: '14px',
    textDecoration: "none"
  }
}