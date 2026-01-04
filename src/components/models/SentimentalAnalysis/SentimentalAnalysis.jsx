import React from 'react'
import Cookie from 'js-cookie';

function SentimentalAnalysis() {
    const [userText, setUserText] = React.useState("");
    const [result, setResult] = React.useState(null);
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
            if (response.status === 200) {
                const data = await response.json();
                setResult(data);
            } else {
                alert("Error in analyzing text");
            }
        } catch (error) {
            alert("Error in analyzing text");
        }
    }
    return (
        <div>
            <div style={{ "display": "flex", justifyContent: "center" }}>
                <h1>Sentimental Analysis</h1>
            </div>
            <div style={{ "display": "flex", gap: "10px", justifyContent: "center", alignItems: "center" }}>
                <div style={{"display":'flex',"flexDirection":"column"}}>
                    <textarea placeholder='Enter text here' value={userText} onChange={(e) => setUserText(e.target.value)} />
                    <button onClick={analyze}>Analyze</button>
                </div>
                <div>Result: {result ? result.sentiment : "No result"}</div>
            </div>
        </div>
    )
}

export default SentimentalAnalysis