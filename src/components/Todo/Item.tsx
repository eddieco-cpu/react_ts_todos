import {useState} from 'react'

import { Todo } from './index'

export default function Item({ todo }: { todo: Todo}) {
  //
  const [isItemOpen, setIsItemOpen] = useState(true)

  return (
    <li
      className={
        (todo.isCompleted ? " text-slate-500" : "") +
        " bg-slate-700 p-3 mb-3 text-left"
      }
    >
      <div className=" flex justify-between items-center pb-2">
        {todo.isCompleted ? (
          <p
            className=" border-[1px] rounded-[50px] p-1 px-2 text-xs text-green-400 border-green-400 cursor-pointer hover:bg-slate-800 active:bg-slate-600"
          // onClick={onToggle}
          >
            已完成
          </p>
        ) : (
          <p
            className=" border-[1px] rounded-[50px] p-1 px-2 text-xs text-red-400 border-red-400 cursor-pointer hover:bg-slate-800 active:bg-slate-600"
          // onClick={onToggle}
          >
            未完成
          </p>
        )}
        <div className=" flex justify-end items-center gap-2">
          <button
            className=" border-[1px] w-6 h-6 rounded-full flex justify-center items-center hover:bg-slate-800 active:bg-slate-600 text-white"
          // onClick={() => setShowPopup(true)}
          >
            ✎
          </button>
          <button
            className=" border-[1px] w-6 h-6 rounded-full flex justify-center items-center hover:bg-slate-800 active:bg-slate-600 text-white"
          // onClick={() => deleteTodo(todo.id)}
          >
            ✖
          </button>
        </div>
      </div>

      <h2 className=" pb-2 border-b-[1px]">{todo.title}</h2>

      <div className="h-8 pt-2 flex justify-end items-start gap-2 ">
        <p className={"h-7 flex-grow overflow-hidden " + (isItemOpen ? "" : "hidden")}>{todo.notes}</p>
        <button 
          className={" flex-shrink-0 block h-6 aspect-square border-[1px] rounded-full transition-all ease-linear duration-500 text-white hover:bg-slate-800 active:bg-slate-600 flex-shrink-0 " + (isItemOpen ? "" : "transform rotate-[180deg]")}
          onClick={() => setIsItemOpen(!isItemOpen)}
        >▽</button>
      </div>
      <div className={"grid transition-all ease-linear duration-300" + (isItemOpen ? " grid-rows-[0fr]" : " grid-rows-[1fr]")}>
        <article className='pt-2 overflow-hidden mr-8 mt-[-32px]'>
          <p className="pb-2">{todo.notes}</p>
          <p className="pb-2">類型： <span>{todo.type}</span></p>
          <p className="pb-2">產生時間： <span>{todo.createdAt}</span></p>
          <p className="">更新時間： <span>{todo.updatedAt}</span></p>
        </article>
      </div>
    </li>
  )
}
