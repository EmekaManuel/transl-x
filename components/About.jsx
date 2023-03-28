import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full flex space-x-5 px-4  border-t-[3px] border-gray-300 pt-5 ">
        <div className="w-1/3">January 23 2022</div>
        <div className="w-2/3">
          <p className="text-2xl font-bold">Authors</p>
          <p className="text-[mono] py-1 font-[10px]">Emeka Manuel</p>
          <p>
            Transl-x is a sibling model to InstructGPT, which is trained to
            follow an instruction in a prompt and provide a detailed response.
            We are excited to introduce Transl-x to get users’ feedback and
            learn about its strengths and weaknesses. During the research
            preview, usage of Transl-x is free. Try it now at chat.transl-x.com.
          </p>
          <div className="pt-8">
            <p className="text-2xl font-bold">Methods</p>
            <p>
              We trained this model using Reinforcement Learning from Human
              Feedback (RLHF), using the same methods as InstructGPT, but with
              slight differences in the data collection setup. We trained an
              initial model using supervised fine-tuning: human AI trainers
              provided conversations in which they played both sides—the user
              and an AI assistant. We gave the trainers access to model-written
              suggestions to help them compose their responses. We mixed this
              new dialogue dataset with the InstructGPT dataset, which we
              transformed into a dialogue format.
            </p>
            <div className="pt-5">
              {" "}
              <img
                src="https://openaicom.imgix.net/cf717bdb-0c8c-428a-b82b-3c3add87a600/ChatGPT_Diagram.svg?fm=auto&auto=compress,format&fit=min&w=1919&h=1138"
                alt=""
              />{" "}
            </div>
            <p className="pt-5">
              Transl-x is fine-tuned from a model in the GPT-3.5 series, which
              finished training in early 2022. You can learn more about the 3.5
              series here. Transl-x and GPT-3.5 were trained on an Azure AI
              supercomputing infrastructure.
            </p>
            <div className="py-5">
              <p className="text-2xl font-bold">Limitations</p>
              <p>
                Transl-x sometimes writes plausible-sounding but incorrect or
                nonsensical answers. Fixing this issue is challenging, as: (1)
                during RL training, there’s currently no source of truth; (2)
                training the model to be more cautious causes it to decline
                questions that it can answer correctly; and (3) supervised
                training misleads the model because the ideal answer depends on
                what the model knows, rather than what the human demonstrator
                knows. Transl-x is sensitive to tweaks to the input phrasing or
                attempting the same prompt multiple times. For example, given
                one phrasing of a question, the model can claim to not know the
                answer, but given a slight rephrase, can answer correctly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-green-100 py-5 flex space-x-5 px-4 text-black border-t-[3px] border-gray-300 pt-5 ">
        <div className="w-1/3">How To Use </div>
        <div className="w-2/3 flex flex-col">
          <p className="pb-5">      After accessing the website, the user navigates to the explore
          Transl-x. Once on the Transl-x AI page, the user would input the word
          or sentence to be translated after which the user specifies what
          language the inputed word or sentence is to be translated to from the
          list of options. Transl-x then generates the corresponding translation
          in the language specified{" "}
            </p> 
      
        <button className="px-5 py-2 max-w-[250px] bg-transparent border-black border text-black">
          try Transl-x here
        </button>
        </div>
      </div>


      <div className="w-full  py-5 flex space-x-5 px-4 text-black border-t-[3px] border-gray-300 pt-5 ">
        <div className="w-1/3">Author </div>
        <div className="w-2/3 flex flex-col">
            <p className="text-[20px] text-gray-600 font-bold">Emeka Manuel</p>
          <p className="pb-5 text-gray-600">
            Emeka Manuel is a Software Engineer and Frontend Web Developer with expertise using React, Tailwindcss, Redux, and other Front-end technologies. He is also a technical writer at hashnode.

            </p> 
        <p className="underline"> <a href="www.emekamanuel.netlify.app"> View Portfolio </a> </p>
    
        </div>
      </div>
    </>
  );
};

export default About;
