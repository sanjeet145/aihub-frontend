import React from 'react'
import Cookie from 'js-cookie';

function SentimentalAnalysis() {
    const [userText, setUserText] = React.useState("");
    const analyze = async (e) => {
        e.preventDefault();
        try {
            const API_URL = import.meta.env.VITE_BACKEND_API_URL;
            const response = await fetch(`${API_URL}model/sentimental-analysis/predict`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${Cookie.get('token')}`
                },
                body: JSON.stringify({ text: userText })
            });
            if(response.status === 200){
                const data = await response.json();
                alert(`The sentiment is: ${data.sentiment}`);
            } else {
                alert("Error in analyzing text");
            }
        }catch (error) {
            alert("Error in analyzing text");
        }
    }
  return (
    <div>
        <h1>Sentimental Analysis</h1>
        <input type="text" placeholder='Enter text here' value={userText} onChange={(e) => setUserText(e.target.value)}/>
        <button onClick={analyze}>Analyze</button>
    </div>
  )
}

export default SentimentalAnalysis