import React,{useState}  from"react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default function ChatList(props) {
  const  allChatUsers = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      id: 1,
      name: "Ali Ahmad",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
      id: 2,
      name: "Hasan Hawei",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
      id: 3,
      name: "Mohamemd Hachem",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
      id: 4,
      name: "Abas Khansa",
      active: false,
      isOnline: true,
    },
   
  ];
 

  const [allChats,setAllChats] = useState(allChatUsers)

    return (
      <div className="main__chatlist">
        <div className="chatlist__heading">
          <h2>Chats</h2>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
 
}
