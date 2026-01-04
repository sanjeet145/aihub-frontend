import { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import FileUploader from '../modelComponents/FileUploader';
import { Box, Button, TextareaAutosize } from '@mui/material';


export default function PdfAnalyzer() {
  const [userText, setUserText] = useState("")
  const [content, setContent] = useState("")
  const [file, setFile] = useState(null);
  const filesAccepted = {
    "application/pdf": [".pdf"],
  }
  const ask = (e) => {
    e.preventDefault();
    console.log("searchinfg")
    console.log(file)
  }
  return (
    <div>
      <div style={{ "display": "flex", justifyContent: "center" }}>
        <h1>Pdf Analyzer RAG</h1>
      </div>
      <div>
        <FileUploader file={file} setFile={setFile} acceptedTypes={filesAccepted} />
        {/* <input type='file'/>
                   <Button icon={!file &&<CloudUpload/> || <DeleteIcon/>} value={!file && "upload file" || "Remove file"} variant={"contained"}/> */}
      </div>
      <div>{content}</div>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          p: 1,
          boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          <TextareaAutosize
            placeholder="Type your query here..."
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
            disableUnderline
            sx={{
              flex: 1,
              backgroundColor: "white",
              mr: 1,
              fontSize: "1rem",
            }}
            style={{minHeight:"40px", minWidth:"100%", borderRadius: "10px", padding:"10px", outline:"none", maxHeight:"100px"}}
          />

          <Button
            variant="contained"
            color="primary"
            startIcon={<SendIcon />}
            sx={{
              height: "40px",
              minWidth: "100px",
              color: "white",
              borderRadius:"10px",
              ml:"1px"
            }}
            onClick={"onSend"}
          >
            Ask
          </Button>
        </Box>
      </Box>
    </div>
  )
}
