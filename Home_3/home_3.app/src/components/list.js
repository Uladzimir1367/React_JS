import React, {useState} from 'react';

export function MessagesList1() {
   const [messages, setComments] = useState([
      { id: 'id1', text: "Это первый коментарий",},
      { id: 'id2', text: "Это второй коментарий",},
      { id: 'id3', text: "Это третий коментарий",},
   ]);

   return messages.map((message) =>  
   <> 
      
      <div key={message.id}>{message.text}</div>
   </>);
}

export default MessagesList1;