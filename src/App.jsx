import axios from "axios";
import "./App.css";
import { useState, useSyncExternalStore } from "react";

const VITE_MAIN_URL = import.meta.env.VITE_MAIN_URL;

function App() {
  const [value, setValue] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `${VITE_MAIN_URL}Agric_Extension?question=${value}`
    );
    setResponse(response.data.response);
  };

  return (
    <div className="flex gap-[1.8rem] bg-[#F23557] justify-center mx-auto px-[7rem] py-[2rem]">
      <div className="flex flex-col gap-[1rem]">
        <h1>Agricultural Chat Bot</h1>
        <h5>Please input your text here</h5>
        <form
          className="flex flex-col gap-[1rem] w-[350px]"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="border-[1px] border-[#E5E7EB] pl-3 py-[1rem] rounded outline-none focus:ring-[#6366F1] focus:ring-2 placeholder:text-[#6B7280] placeholder:text-[1.4rem] leading-6 font-normal text-[1.4rem] text-[#1F2937]"
          />
          <button
            type="submit"
            className="cursor-pointer text-[#ffffff] bg-[#000000] py-[.5rem] px-[2rem]"
          >
            Send
          </button>
          <button
            type="button"
            onClick={() => {
              setResponse("");
              setValue("");
            }}
            className="cursor-pointer text-[#ffffff] bg-[#000000] py-[.5rem] px-[2rem]"
          >
            Reset
          </button>
        </form>
      </div>

      <div className="w-[500px] h-[500px] overflow-y-auto border border-[#030303] flex flex-col gap-[.5rem] py-[1rem] px-[1rem]">
        <span>Question: {value}</span>
        <span>AI: {response}</span>
      </div>
    </div>
  );
}

export default App;
