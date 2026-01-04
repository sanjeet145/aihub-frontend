import { Box, Button, TextareaAutosize } from "@mui/material";
import { useState } from "react"
import SendIcon from '@mui/icons-material/Send';


export default function Translator() {
  const [userText, setUserText] = useState("");
  const [translatedText, setTranslatedText] = useState("")
  const translate = () => {
    e.preventDefault();
    console.log("translating..........")
    console.log(userText)
  }
  return (
    <div>
      <div style={{ "display": "flex", justifyContent: "center" }}>
        <h1>Translator</h1>
      </div>
     <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: { xs: "column", sm: "row" }, 
          gap: 2,
        }}
      >
        <TextareaAutosize
          placeholder="Enter text here"
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
          style={{
            minHeight: "100px",
            borderRadius: "10px",
            padding: "10px",
            outline: "none",
            resize: "vertical",
            flex: 1,
            background: "white",
            fontSize: "1rem",
            maxHeight: "50vh",
          }}
        />

        <TextareaAutosize
          value={translatedText}
          readOnly
          style={{
            minHeight: "100px",
            borderRadius: "10px",
            padding: "10px",
            outline: "none",
            resize: "vertical",
            flex: 1,
            background: "white",
            fontSize: "1rem",
            maxHeight: "50vh",
          }}
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        startIcon={<SendIcon />}
        sx={{
          height: "40px",
          minWidth: "100px",
          color: "white",
          borderRadius: "10px",
          mt: 2,
          alignSelf: "flex-end",
        }}
        onClick={"onSend"} 
      >
        Translate
      </Button>
    </Box>
    </div>
  )
}
