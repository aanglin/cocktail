import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";


function cocktailList() {
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
    <div className="pl-12 flex justify-center md:flex flex-col">
    <div className="flex justify-center pt-52 whitespace-nowrap">
        <h1 className="text-white font-bold text-2xl pr-5">Cocktail List</h1>
        </div>
          {Array.from(data).map((r,idDrink) => {
            return (
              
               <div key={idDrink} className=" max-w-[300px] p-3 bg-white whitespace-nowrap rounded-2xl group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 ">
          <Image className="rounded-2xl pt-2 pl-1 pr-1" src={r.strDrinkThumb} width='1920' height='1080' alt="/" />
        <h1 className="flex p-2 justify-center">{r.strDrink}</h1>
        <h1 className="flex justify-center">{r.idDrink}</h1>
        </div> 
            )
            })}
       </div>
        </>
  )
}

export default cocktailList


