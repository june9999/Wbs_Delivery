import React from "react";
import FormContact from "../components/blocks/FormContact";
import CatInBox from '../assets/cat-in-box.png';

const Chat = () => {
  return (
    <div >
      <div >
      <img
        className="mx-auto mt-10 w-60 h-70 rounded-lg"
        src={CatInBox}
        alt="cat in bike basket"
      />
      </div>
      <FormContact />
    </div>
  );
};

export default Chat;
