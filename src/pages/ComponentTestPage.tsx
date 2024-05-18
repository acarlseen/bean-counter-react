// Testing PAGINATION

import { useGetAllBeans } from "../custom-hooks/getAllBeans";
import { BeanCard } from "../components/BeanCard";
import { useState } from "react";

export default function ComponentTestPage(){
  const { allBeans, setAllBeans, totPages } = useGetAllBeans();
  const [ page, setPage ] = useState(1);

  function handleNext() {
    setAllBeans(page+1, 9);
    setPage(page+1);
  }

  function handlePrevious(){
    setAllBeans(page-1, 9);
    setPage(page-1);
  }

  return(
    <div>
      <div className="flex flex-row h-32 bg-gray-200">
        {
          allBeans.length ? 
              allBeans.map( (obj) => {
                return(
                  <div className="flex-col w-32 h-full bg-black">
                    <BeanCard coffee={obj} />
                  </div>
                )
              } )
          :
            <h1>loading...</h1>
        }
      </div>
      <div className="flex flex-row justify-between px-5">
        {
          page > 1 ?
            <button onClick={() => handlePrevious()}
            className="p-2 bg-emerald-300 rounded-lg border-gray-200 border-4 m-2 px-5">Prev</button>
          :
          <div></div>
        }
        {
          page < totPages! ?
            <button onClick={() => handleNext()}
            className="p-2 bg-emerald-300 rounded-lg border-gray-200 border-4 m-2 px-5">Next</button>
          :
            <div></div> 
        }
      </div>
    </div>
  )
}