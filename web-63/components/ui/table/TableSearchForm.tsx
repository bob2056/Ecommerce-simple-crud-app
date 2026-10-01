'use client'

import { useEffect, useState } from "react";

interface ITableSearchFormProps {
  loadData(search?: string): Promise<void>
}
export default function TableSearchForm({loadData}: Readonly<ITableSearchFormProps>) {
  const [keyword, setKeyword] = useState<string>("")
  
  // const formSubmit = (e: BaseSyntheticEvent) => {
  //   e.preventDefault()
  // }

  useEffect(() => {
    // debounce 
    const timer = setTimeout(() => {
      loadData(keyword)
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [keyword])

  return (
    <>
      {/* <form onSubmit={formSubmit} className="w-1/3"> */}
      <div className="w-1/3">
        <input
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value)
          }}
          type="search"
          className="px-5 p-2 rounded-full bg-white w-full shadow-lg"
          placeholder="Enter your search keyword"
        />
      </div>
      {/* </form> */}
    </>
  );
}