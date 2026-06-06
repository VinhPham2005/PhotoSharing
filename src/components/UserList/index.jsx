import React, {useState, useEffect } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import "./styles.css";
import { Link} from "react-router-dom";
import fetchModel from "../../lib/fetchModelData"

/**
 * Define UserList, a React component of Project 4.
 */
function UserList() {
  // const users = models.userListModel();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchModel("/user/list").then((data) => setUsers(data)).catch((error) => console.error("Error: ", error));
  }, [])
  return (
    <div>
      {/* <Typography variant="body1">
        This is the user list, which takes up 3/12 of the window. You might
        choose to use <a href="https://mui.com/components/lists/">Lists</a> and{" "}
        <a href="https://mui.com/components/dividers/">Dividers</a> to display
        your users like so:
      </Typography> */}
      <Typography>User list</Typography>
      <List component="nav">
        {users.map((item) => (
          <div key={item._id}>
            <ListItem component={Link} to={`/users/${item._id}`}>
              <ListItemText primary={item.first_name} />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
      {/* <Typography variant="body1">
        The model comes in from models.userListModel()
      </Typography> */}
    </div>
  );
}

export default UserList;
