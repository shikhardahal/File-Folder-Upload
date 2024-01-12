// src/components/FileFolderUploader.js
import React, { useState } from 'react';
import { Button, Container, CssBaseline, Grid, Typography, Box } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import ImageIcon from '@mui/icons-material/Image';
import DescriptionIcon from '@mui/icons-material/Description';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const FileFolderUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const updatedFiles = files.map((file) => ({
      name: file.name,
      ext: file.name.split('.').pop(),
      type: 'file',
      _id: `${Math.random().toString(36).substring(7)}${Date.now().toString(36)}`,
    }));
    setSelectedFiles([...selectedFiles, ...updatedFiles]);
  };
  const handleFolderUpload = (event) => {
    const folderFiles = Array.from(event.target.files);
    const folderPath = folderFiles[0].webkitRelativePath.split('/')[0];
    const updatedFolder = {
      name: folderPath,
      type: 'folder',
      _id: `${Math.random().toString(36).substring(7)}${Date.now().toString(36)}`,
    };
    setSelectedFiles([...selectedFiles, updatedFolder]);
  };
  const handleImageUpload = (event) => {
    const imageFiles = Array.from(event.target.files);
    const updatedFiles = imageFiles.map((file) => ({
      name: file.name,
      ext: file.name.split('.').pop(),
      type: 'image',
      _id: `${Math.random().toString(36).substring(7)}${Date.now().toString(36)}`,
    }));
    setSelectedFiles([...selectedFiles, ...updatedFiles]);
  };
  const getIconByType = (type) => {
    switch (type) {
      case 'folder':
        return <FolderIcon sx={{ fontSize: 48, color: 'yellow' }} />;
      case 'file':
        return <DescriptionIcon sx={{ fontSize: 48, color: 'grey' }} />;
      case 'image':
        return <ImageIcon sx={{ fontSize: 48, color:'blue' }} />;
      default:
        return null;
    }
  };
  const renderRow = (files, label) => (
    <Grid item xs={12} key={label}>
      <Typography variant="h6">{label}</Typography>
      <Box display="flex" flexWrap="wrap">
        {files.map((file, index) => (
          <Box
            key={index}
            padding="16px" // Padding for spacing
            margin="8px" // Margin for separation
            display="flex"
            alignItems="center"
            bgcolor="white" // White background color
            borderRadius="8px" // Rounded corners
          >
            {getIconByType(file.type)}
            <Box marginLeft="8px">
              <Typography variant="h6" gutterBottom>
                {file.name}
              </Typography>
              <Typography variant="body2">
                {file.type === 'folder' ? 'Folder' : `Extension: ${file.ext}`}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Grid>
  );
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Button
              variant="contained"
              component="label"
              startIcon={<CloudUploadIcon />}
            >
              Upload File
              <input type="file" style={{ display: 'none' }} onChange={handleFileUpload} multiple />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              component="label"
              startIcon={<FolderIcon />}
            >
              Upload Folder
              <input type="file" style={{ display: 'none' }} directory="" webkitdirectory="" onChange={handleFolderUpload} />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              component="label"
              startIcon={<ImageIcon />}
            >
              Upload Image
              <input type="file" style={{ display: 'none' }} accept="image/*" onChange={handleImageUpload} multiple />
            </Button>
          </Grid>
          {renderRow(selectedFiles.filter((file) => file.type === 'folder'), 'Folders')}
          {renderRow(selectedFiles.filter((file) => file.type === 'file'), 'Files')}
          {renderRow(selectedFiles.filter((file) => file.type === 'image'), 'Images')}
        </Grid>
      </div>
    </Container>
  );
};
export default FileFolderUploader;
