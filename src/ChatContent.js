import React, {
  Component,
  useState,
  createRef,
  useEffect,
  useRef,
} from "react";


export default function ChatContent(props) {
  const messagesEndRef = useRef(null);
  const chatItms = [
    {
      key: 1,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Hi Ali, How are you?",
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
      msg: "I am fine.",
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
          <div className="avatar">
        <div className="avatar-img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU" alt="#" />
        </div>
        <span className="active"></span>
      </div>
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
              <div
              key={itm.key}
              style={{ animationDelay: `0.8s` }}
              className={`chat__item ${itm.type ? itm.type : "me"}`}
            >
              <div className="chat__item__content">
                <div className="chat__msg">{itm.msg}</div>
                <div className="chat__meta">
                  <span>16 mins ago</span>
                  <span>Seen 1.03PM</span>
                </div>
              </div>
               <div className="avatar">
        <div className="avatar-img">
          <img src={itm.image} alt="#" />
        </div>
        <span className="active"></span>
      </div>
            </div>




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
