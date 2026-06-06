import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import { useLocation, userParams } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const [user, setUser] = useState(null);

  const viewType = pathParts.length === 3 ? pathParts[1] : null;
  const userId = pathParts.length === 3 ? pathParts[2] : null;

  useEffect(() => {
    if (userId) {
      fetchModel(`/user/${userId}`)
        .then((data) => setUser(data))
        .catch((err) => console.error("Error: ", err));
    } else {
      setUser(null);
    }
  }, [userId]);

  let context = "Please select a user!";

  if (viewType && user) {
    const fullName = `${user.first_name} ${user.last_name}`;

    if (viewType === "users") {
      context = `Details of ${fullName}`;
    } else {
      context = `Photos of ${fullName}`;
    }
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography
          variant="h5"
          color="inherit"
          style={{ position: "absolute", left: 12 }}
        >
          Vinh photo sharing
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          style={{ position: "absolute", right: 12 }}
        >
          {context}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
