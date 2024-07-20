import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <div>
        <div className={`chat-bubble text-white text-sm bg-blue-500`}>
          You were the Chosen One!
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          12:45
        </div>
      </div>
    </div>
  );
};

export default Message;
