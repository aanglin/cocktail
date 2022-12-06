import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";


function cocktailList() {
  const [data, setData] = useState([])

  const getVodka = () => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
    .then((res) => {
      console.log(res.data);
      setData(res.data.drinks);
    })
  }

  useEffect(() => {
    getVodka()  
  }, [])
  
  
return (
    <>
    <div className="fixed pl-[50rem] flex justify-center  whitespace-nowrap">
        <h1 className="text-white font-bold text-4xl">Cocktail List</h1>
        <h1 className="text-white font-bold text-4xl pl-5">(Vodka Drinks)</h1>
        </div>
       
        <div className="p-5 ">
        <div className="flex pt-[3rem]">
          {Array.from(data).map((r,idDrink) => {
            return (
               <div key={idDrink} className="p-2 ">
               <div  className="relative  p-3 bg-white whitespace-nowrap rounded-2xl group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50  ">
          <Image className="rounded-2xl pt-2 pl-1 pr-1" src={r.strDrinkThumb} layout="responsive" width={1920} height={1080} alt="/" />
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

export default cocktailList
