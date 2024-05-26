import { useState } from 'react'

import Header from "./Header"
import List from "./List"


export default function index() {
  //
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className=" w-[95%] h-[calc(100vh-16px)] max-w-[1200px] m-auto my-2 bg-slate-800 p-3 max-md:w-full max-md:h-screen max-md:my-0 overflow-hidden">
      <Header {...{ isOpen, setIsOpen }} />
      <List {...{ isOpen }} />
      {/* {showPopup && <Popup setShowPopup={setShowPopup} />} */}
    </div>
  )
}
