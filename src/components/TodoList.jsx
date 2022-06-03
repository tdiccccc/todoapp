import React from 'react'

export const TodoList = () => {
  return (
    <div>
      <div className="todolist">
        <div className="todos">
          <div className="todo">
            <div className="todoText">
              <span>プログラミング</span>
            </div>
            <div className="icons">
              <button>
                <i className="fa-solid fa-check"></i>
              </button>
              <button>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
