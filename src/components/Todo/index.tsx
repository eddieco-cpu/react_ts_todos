//import React from 'react'
import Header from "./Header"


export default function index() {
  return (
    <div className=" w-[95%] min-h-[calc(100vh-16px)] max-w-[1200px] m-auto my-2 bg-slate-800 p-3">
      <Header />
      {/* <TodoList
        todos={todos}
        onToggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        setShowPopup={setShowPopup}
      />
      {showPopup && <Popup setShowPopup={setShowPopup} />} */}
    </div>
  )
}
