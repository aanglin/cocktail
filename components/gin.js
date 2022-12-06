import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";


function ginList() {
  const [data, setData] = useState([])

  const getGin = () => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
    .then((res) => {
      console.log(res.data);
      setData(res.data.drinks);
    })
  }

  useEffect(() => {
    getGin()  
  }, [])
  
  
return (
    <>
    <div className="fixed  pt-44 pl-[50rem] flex justify-center  whitespace-nowrap">
        <h1 className="text-white font-bold text-4xl pr-5 pb-7 ">Cocktail List</h1>
        <h1 className="text-white font-bold text-4xl pr-5 pb-7 ">(Gin Drinks)</h1>
        </div>
       
        <div className="p-5 ">
        <div className="flex pt-[14rem]">
          {Array.from(data).map((r,idDrink) => {
            return (
               <div key={idDrink} className="p-2 ">
               <div  className="relative  p-3 bg-white whitespace-nowrap rounded-2xl group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50  ">
          <Image className="rounded-2xl pt-2 pl-1 pr-1" src={r.strDrinkThumb} layout="responsive" width={1920} height={1080}  alt="/" />
        <h1 className="flex p-2 justify-center">{r.strDrink}</h1>
        <h1 className="flex justify-center">{r.idDrink}</h1>
        </div> 
            </div>
            )
            })}
            
       </div>
       </div>
       
        </>
  )
}

export default ginList


