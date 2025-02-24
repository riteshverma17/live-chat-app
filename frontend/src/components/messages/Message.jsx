import React from 'react'
import {useAuthContext} from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../utils/extractTime';

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const formMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = formMe ? 'chat-end' : 'chat-start';
  const profilePic = formMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = formMe ? "" : 'bg-red-800';
  


  return (
    <>
    <div className={`chat ${chatClassName}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={profilePic} />
    </div>
  </div>
  
  <div className={`chat-bubble text-white  ${bubbleBgColor}`}>{message.message}</div>
  <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">{formattedTime}</div>
  
</div>
</>
  )
}

export default Message
