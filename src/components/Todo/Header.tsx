import React from "react"

type Props = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>  //note 3
}

export default function Header(props: Props) {
  //
  const { isOpen, setIsOpen } = props

  //
  const handleSetIsOpen = (e: React.MouseEvent<HTMLButtonElement>): void => { //note 1
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <form className="flex flex-col justify-center items-center bg-slate-700 p-3"
      onSubmit={() => console.log("@@ submit @@")}
    >
      <section
        className={"w-full flex justify-start items-end gap-3 overflow-hidden transition-all duration-500 h-40 " + (isOpen ? "" : "h-0")}
      >
        <div className=" flex-grow flex flex-col ">
          <input
            type="text"
            placeholder="Title"
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
            className=" focus:outline-none p-1 px-2 border-[1px] text-slate-700 mb-3 focus:bg-slate-200"
          />
          <textarea
            placeholder="Notes"
            rows={4}
            // value={notes}
            // onChange={(e) => setNotes(e.target.value)}
            className=" focus:outline-none p-1 px-2 border-[1px] text-slate-700 focus:bg-slate-200"
          />
        </div>

        <div className="w-28 ">
          <div className=" mb-2">
            <p>is it completed</p>
            <p className=" flex justify-between items-center  p-1">
              <label htmlFor="okCompleted" className=" flex justify-start items-center gap-1">
                Yes
                <input type="radio" id="okCompleted" name="isCompleted" />
              </label>
              <label htmlFor="unCompleted" className=" flex justify-start items-center gap-1">
                No
                <input type="radio" id="unCompleted" name="isCompleted" />
              </label>
            </p>
          </div>
          <select className=" text-zinc-700 w-full focus:outline-none focus:bg-slate-200 p-1"
            defaultValue={""}
          >
            <option value="" disabled>type</option>
            <option value="home">home</option>
            <option value="work">work</option>
            <option value="study">study</option>
            <option value="others">others</option>
          </select>
        </div>

      </section>

      <section className={"w-full py-3 transition-all duration-200 delay-300 ease-linear " + (isOpen ? "pt-3" : "pt-0")}>
        <div className={"h-[1px] w-full " + (isOpen ? "bg-slate-400" : " bg-slate-400")} />
      </section>

      <section className="w-full flex justify-end items-center gap-2">
        <button
          type="submit"
          disabled={!isOpen}
          className={" border-[1px] h-9 p-1 px-2 rounded hover:bg-slate-800 active:bg-slate-600 " + (isOpen ? "" : " opacity-30 cursor-not-allowed")}
        >
          Add
        </button>
        <button
          className={"block h-9 aspect-square border-[1px] rounded-full transition-all ease-linear duration-500 hover:bg-slate-800 active:bg-slate-600 flex-shrink-0 " + (isOpen ? "" : "transform rotate-[540deg]")}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSetIsOpen(e)}
        >
          ▽
        </button>
      </section>
    </form>
  )
}

