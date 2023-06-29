import React, { useState } from "react";

export default function Todo(props) {
    const { todo, index, removeTodo } = props;
    const [showDelete, setShowDelete] = useState(false);

    return (
       
      
        <div 
            onMouseEnter={() => setShowDelete(true)}
            onMouseLeave={() => setShowDelete(false)} 
        >
            <div className="list">
            <p>{todo}</p>

            {showDelete && (
                <p onClick={()=>removeTodo(index)}>X</p>

            )}

        </div>
        </div>
        
    )
}