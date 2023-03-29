import React from "react";
import { useState } from "react";
import { RxClipboardCopy } from "react-icons/rx";
import { Configuration, OpenAIApi } from "openai";
import { BeatLoader } from "react-spinners";
const aipage = () => {
  const [activeButton, setActiveButton] = useState("hindi");

  const [formData, setFormData] = useState({ language: "hindi", text: "" });
  const [error, seterror] = useState("");
  const [shownotification, setshownotification] = useState(false);
  const [translation, settranslation] = useState("");
  const [loading, setloading] = useState(false )

  //openai config

  const configuration = new Configuration({
    apiKey: "psk-g5b22ZK4mplAUi40SpRST3BlbkFJ7Y8OT9Pak6aOu1vQyMGI",
  });
  const openai = new OpenAIApi(configuration);


  const translate = async () => {
    const { language, text } = formData;
    const apiKey = "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"
    const url = "https://api.openai.com/v1/engines/text-davinci-003/completions";
    const body = {
      prompt: `Translate this into ${language}: ${text}`,
      temperature: 0.3,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });
  
      const data = await response.json();
  
      console.log(data.choices[0].text);
      const translatedText = data.choices[0].text.trim() 
      console.log(translatedText)
      setloading(false)
      settranslation(translatedText)
      
    } catch (error) {
      console.error(error);
    }




  };

  //openai config

  const handleLanguageChange = (event) => {
    setFormData({ ...formData, language: event.target.value });
  };

  const handleTextChange = (event) => {
    setFormData({ ...formData, text: event.target.value });
    seterror("");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!formData.text) {
      seterror("Kindly enter a text");
      return;
    }
    setloading(true)
    translate();

  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(translation)
      .then(() => displayNotification())
      .catch((err) => console.log(err));
  };

  const displayNotification = () => {
    setshownotification(true);
    setTimeout(() => {
      setshownotification(false);
    }, 3000);
  };
  //     console.log(formData)

 
  
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <h1 className="text-2xl space-y-2 p-2 font-bold">Transl-X AI</h1>

          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 flex flex-col justify-between h-screen">
        {/* //div 1 */}
        <div className="p-4 border-2 border-gray-300 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-[20px] flex text-center justify-center font-mono">
            Hello Manuel
          </h1>
        </div>

        <div className="p-4 relative border-2 border-gray-300 flex   rounded-lg bg-green-100">
          <p className="text-[13px] absolute top-1 left-1 flex text-center justify-center font-bold">
            Translated Text
       </p>
          <p onClick={handleCopy} className="absolute top-1 right-1">
            <RxClipboardCopy />
          </p>

          <p className="pt-7">{ loading ? <BeatLoader size={12} color={'blue'}/>  : translation}</p>

          {/* <p className="absolute top-[1] left-[50px]">Item copied to clipboard!</p> */}
        </div>

        <div className="p-4 space-y-4 flex flex-col gap-3 items-center justify-center  ">
          <form action="">
            <div className="flex justify-center items-center flex-col">
              <div className=" relative w-full ">
                {error && (
                  <p className="text-red-500 text-sm py-2 font-normal">
                    {" "}
                    {error}{" "}
                  </p>
                )}

                <textarea
                  rows={3}
                  name="message"
                  value={formData.text}
                  placeholder="enter a word / sentence to be translated"
                  onChange={handleTextChange}
                  type="text"
                  className="border w-full p-3 relative resize-none  border-gray-500 bg-white focus:outline-none"
                />

                <div className="absolute bottom-2 right-2 text-gray-400 text-xs">
                  <span>1</span>/100
                </div>
              </div>

              <div className=" p-4 w-full gap-x-5 flex flex-wrap  max-w-sm text-center gap-3 items-center justify-center">
                <div
                  className={`bg-sky-300 text-white px-4 py-2 accent-pink-500 rounded-full flex gap-x-1 ${
                    activeButton === "hindi" ? "active" : ""
                  }`}
                  onClick={() => setActiveButton("hindi")}
                >
                  <input
                    type="radio"
                    onChange={handleLanguageChange}
                    checked={formData.language === "hindi"}
                    value="hindi"
                    id="hindi"
                    name="language"
                    className="hidden"
                  />
                  <label htmlFor="hindi">Hindi</label>
                </div>

                <div
                  className={`bg-sky-300 text-white px-4 py-2 accent-pink-500 rounded-full flex gap-x-1 ${
                    activeButton === "chinese" ? "active" : ""
                  }`}
                  onClick={() => setActiveButton("chinese")}
                >
                  <input
                    type="radio"
                    onChange={handleLanguageChange}
                    checked={formData.language === "chinese"}
                    value="chinese"
                    id="chinese"
                    name="language"
                    className="hidden"
                  />
                  <label htmlFor="chinese">chinese</label>
                </div>

                <div
                  className={`bg-sky-300 text-white px-4 py-2 accent-pink-500 rounded-full flex gap-x-1 ${
                    activeButton === "japanese" ? "active" : ""
                  }`}
                  onClick={() => setActiveButton("japanese")}
                >
                  <input
                    type="radio"
                    onChange={handleLanguageChange}
                    checked={formData.language === "chinese"}
                    value="japanese"
                    id="japanese"
                    name="language"
                    className="hidden"
                  />
                  <label htmlFor="japanese">japanese</label>
                </div>

                <div
                  className={`bg-sky-300 text-white px-4 py-2 accent-pink-500 rounded-full flex gap-x-1 ${
                    activeButton === "german" ? "active" : ""
                  }`}
                  onClick={() => setActiveButton("german")}
                >
                  <input
                    type="radio"
                    onChange={handleLanguageChange}
                    checked={formData.language === "german"}
                    value="german"
                    id="german"
                    name="language"
                    className="hidden"
                  />
                  <label htmlFor="german">german</label>
                </div>

                <div
                  className={`bg-sky-300 text-white px-4 py-2 accent-pink-500 rounded-full flex gap-x-1 ${
                    activeButton === "yoruba" ? "active" : ""
                  }`}
                  onClick={() => setActiveButton("yoruba")}
                >
                  <input
                    type="radio"
                    onChange={handleLanguageChange}
                    checked={formData.language === "yoruba"}
                    value="yoruba"
                    id="yoruba"
                    name="language"
                    className="hidden"
                  />
                  <label htmlFor="yoruba">Yoruba</label>
                </div>
              </div>
            </div>
          </form>
          <button
            onClick={handleOnSubmit}
            className="bg-gray-200 border relative border-black w-5/12 max-w-screen-md hover:bg-black hover:text-white text-black font-mono py-2 px-4 rounded"
          >
            Translate
          </button>
        </div>
      </div>

      <div className={`notification ${shownotification ? "active" : ""}`}>
        copied to clipboard!
      </div>
    </div>
  );
};

export default aipage;

