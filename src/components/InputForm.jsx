import React, { useState } from 'react';

export const InputForm = ({ taskList, setTaskList }) => {

  const [inputText, setinputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // タスクを追加する
    setTaskList([
        ...taskList,
        {
            text: inputText
        }
    ]);
     
  }

  const handleChange = (e) => {
    setinputText(e.target.value);
  }

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button>
          <i className="fa-solid fa-square-plus"></i>
        </button>
      </form>
    </div>
  )
}

