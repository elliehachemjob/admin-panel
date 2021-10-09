import React, {
  Component,
  useState,
  createRef,
  useEffect,
  useRef,
} from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";

export default function ChatContent(props) {
  const messagesEndRef = useRef(null);
  const chatItms = [
    {
      key: 1,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Hi Tim, How are you?",
    },
    {
      key: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Awesome these days.",
    },
    {
      key: 5,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Awesome these days.",
    },
  ];

  const [chat, setChat] = useState(chatItms);
  const [msg, setMsg] = useState();
  const activePointRef = React.useRef(msg);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  

  const onStateChange = (e) => {
    setMsg(e.target.value);
    activePointRef.current = e.target.value;
    console.log(`aaaaaaaaaaaaaaaa ${msg}`);
    console.log(`aaaaaaaaaaaaaaaaaaaaaaa ${chat.length}`);
  };



  const abc = (e) => {


   



    console.log(e);
    console.log(`ffffffffffffffff is ${activePointRef.current}`);
    console.log(`ffffffffffffffff is ${chat.length}`);

    if (e.keyCode == 13) {
      chatItms.push({
        key: chat.length +1 ,
        type: "",
        msg: activePointRef.current,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      });
      setChat([...chatItms]);
      scrollToBottom();
      setMsg("");
      activePointRef.current = "";
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      abc(e);
    });

    scrollToBottom();
  }, []);

  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar
              isOnline="active"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
            />
            <p>Ali Ahmad</p>
          </div>
        </div>

        <div className="blocks">
          <div className="settings"></div>
        </div>
      </div>
      <div className="content__body">
        <div className="chat__items">
          {chat.map((itm, index) => {
            return (
              <ChatItem
                animationDelay={index + 2}
                key={itm.key}
                user={itm.type ? itm.type : "me"}
                msg={itm.msg}
                image={itm.image}
              />
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <input
            type="text"
            placeholder="Type a message here"
            onChange={onStateChange}
            value={msg}
          />
          <button className="btnSendMsg" id="sendMsgBtn">
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
