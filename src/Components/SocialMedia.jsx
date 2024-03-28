import React from "react";

const SocialMedia = () => {
  return (
    <>
      <div className="flex space-x-6 mt-5 cursor-pointer">
        <a className=" " href="https://www.linkedin.com/in/shridhar-galagali-695498194/">
          <img className="w-7 hover:w-8 transition-all duration-300 " src="/Imgs/in.png" alt="" />
        </a>
        <a href="https://x.com/Shridhar__2085?t=ZWXRrNNophZwu6UMwIZU5Q&s=09">
          <img className="w-7 hover:w-8 transition-all duration-300 " src="/Imgs/Twitter.png" alt="" />
        </a>
        <a href="https://github.com/SH2219">
          <img className="w-7 hover:w-8 transition-all duration-300" src="/Imgs/Git2.png" alt="" />
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
