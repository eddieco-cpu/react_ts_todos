//import React from 'react'
import Item from "./Item"

type Props = {
  isOpen: boolean
}

export default function List(props: Props) {
  //
  const { isOpen } = props

  return (
    <ul
      className="todo-list border-[1px] border-slate-600 mt-3 p-3 pb-0 overflow-auto max-h-[calc(100vh-40px-var(--max-header)-12px)] max-md:max-h-[calc(100vh-40px-var(--max-header))]"
      style={{ "--max-header": isOpen ? "245px" : "73px" } as React.CSSProperties} //note 2
    >
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </ul>
  )
}
