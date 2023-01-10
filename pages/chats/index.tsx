import React from "react";
import ChatGroupCard from "../../src/features/chats/ChatGroupCard";

type Props = {};

function Chats({ }: Props) {
  const chats = [
    {
      title: "Chat with Expert",
      id: "mynaExpert",
      image: '/images/doctor.png'
    },
    {
      title: "Myna Announcements",
      id: "mynaAnnouncements",
      image: '/images/doctor.png'
    },
    {
      title: "Myna Community Mumbai",
      id: "mynaGroup",
      image: '/images/doctor.png'
    }
  ]
  return (
    <>
      <div className="pageContainerTop">
        <div className="pageContent p-20">
          <h2 className="pageTitle ">Chats</h2>
          <div>
            {chats && chats.length > 0 && chats?.map((chat, index) => {
              return (
                <ChatGroupCard chat={chat} key={index} />
              )
            })}
          </div>

        </div>
      </div>
    </>
  );
}

export default Chats;
