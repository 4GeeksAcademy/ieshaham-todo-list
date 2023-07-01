import React, { useState } from "react";
import { FaTrash } from 'react-icons/fa';

export default function Todo(props) {
    const { todo, index, removeTodo } = props;
    const [showDelete, setShowDelete] = useState(false);
    console.log (index);
    console.log (todo);
    return (
       
      
        <div 
            onMouseEnter={() => setShowDelete(true)}
            onMouseLeave={() => setShowDelete(false)} 
        >

            <div className="list">
              
            <p>{todo}</p>

            {showDelete && (
                <p onClick={()=>removeTodo(index)}> <FaTrash/></p>

            )}
           
        </div>
        </div>
        
    )
}

