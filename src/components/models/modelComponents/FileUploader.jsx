import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";

export default function FileUploader({file, setFile, acceptedTypes}) {

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedTypes,
    multiple: false,
  });
  // "image/*": [".png", ".jpg", ".jpeg"],
  // "text/plain": [".txt"],
  // "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],

  const handleRemove = () => {
    setFile(null);
  };

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: "2px dashed #1976d2",
        borderRadius: 2,
        p: 3,
        m:2,
        textAlign: "center",
        backgroundColor: isDragActive ? "#768795ff" : "#918d8dff",
        cursor: "pointer",
      }}
    >
      <input {...getInputProps()} />

      {!file ? (
        <>
          <CloudUploadIcon sx={{ fontSize: 40, color: "#1976d2" }} />
          <Typography variant="body1" sx={{ mt: 1 , color:"black"}}>
            Drag & drop {"acceptedTypes"} file here, or click to upload
          </Typography>
        </>
      ) : (
        <>
          <Typography variant="body1" style={{"color":"black", overflow:"hidden"}}>{file.name}</Typography>
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            sx={{ mt: 2 }}
            onClick={handleRemove}
          >
            Remove File
          </Button>
        </>
      )}
    </Box>
  );
}
