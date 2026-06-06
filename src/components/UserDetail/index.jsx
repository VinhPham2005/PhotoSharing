import React, { useEffect, useState } from "react";
import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import "./styles.css";
import { useParams } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";
/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = useState("");

  useEffect(() => {
    fetchModel(`/user/${userId}`)
      .then((data) => setUser(data))
      .catch((err) => console.error("Error: ", err));
  }, [userId]);

  if (!user) {
    return <Typography>No user found!</Typography>;
  }

  return (
    <>
      {/* <Typography variant="body1">
        This should be the UserDetail view of the PhotoShare app. Since it is
        invoked from React Router the params from the route will be in property
        match. So this should show details of user: {user.userId}. You can fetch
        the model for the user from models.userModel.
      </Typography> */}
      <Paper>
        <Typography variant="h4" gutterBottom>
          {" "}
          {user.first_name} {user.last_name}{" "}
        </Typography>
        <Typography>
          <strong>Location:</strong> {user.location}{" "}
        </Typography>
        <Typography>
          <strong>Description:</strong> {user.description}{" "}
        </Typography>
        <Typography>
          <strong>Occupaction:</strong> {user.occupation}{" "}
        </Typography>

        <Button variant="contained" component={Link} to={`/photos/${user._id}`}>
          View photos
        </Button>
      </Paper>
    </>
  );
}

export default UserDetail;
