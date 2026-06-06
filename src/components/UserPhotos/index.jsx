import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

import "./styles.css";
import { useParams } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
  const { userId } = useParams();
  // const photos = models.photoOfUserModel(userId);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchModel(`/photo/${userId}`)
      .then((data) => setPhotos(data))
      .catch((err) => console.error("Error: ", err));
  }, [userId]);

  if (!photos || photos.length < 1) {
    return <Typography>No photo found!</Typography>;
  }

  return (
    <>
      {photos.map((item) => (
        <Card key={item._id} style={{ marginBottom: 12 }}>
          <CardMedia
            component="img"
            image={`/images/${item.file_name}`}
            alt="User photo"
          />
          <CardContent>
            <Typography
              style={{ fontSize: 14, marginTop: -8, marginBottom: 8 }}
            >{`Posted at ${item.date_time}`}</Typography>
            <Typography variant="h5">Comments</Typography>
            <Divider />
            {item.comments && item.comments.length > 0 ? (
              item.comments.map((comment) => (
                <Box>
                  <Typography>
                    <strong>
                      {comment.user.first_name} {comment.user.last_name}:
                    </strong>
                    {comment.comment}
                  </Typography>
                </Box>
              ))
            ) : (
              <Box>
                <Typography>No comments!</Typography>
              </Box>
            )}
          </CardContent>
          <Divider />
        </Card>
      ))}
    </>
  );
}

export default UserPhotos;
