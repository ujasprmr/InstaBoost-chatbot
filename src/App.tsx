import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

const genAI = new GoogleGenerativeAI("YOUR_API_KEY");

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(input);
    const text = result.response.text();
    setResponse(text);
  };

  return (
    <div>
      <h1>InstaBoost Chatbot</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={handleSend}>Send</button>
      <p>{response}</p>
    </div>
  );
}

export default App;

