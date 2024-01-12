// ImageDisplay.js
import React from 'react';
import { Card, CardMedia, Typography } from '@mui/material';
const ImageDisplay = ({ imageUrl, caption }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={caption}
      />
      <Typography variant="caption" align="center">
        {caption}
      </Typography>
    </Card>
  );
};
export default ImageDisplay;
