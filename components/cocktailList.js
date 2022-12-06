import Image from "next/image";



function cocktailList({results}) {
  console.log(results);
  
return (
    <>
    <div className="pl-12 flex justify-center md:flex flex-col">
    <div className="flex justify-center pt-52 whitespace-nowrap">
        <h1 className="text-white font-bold text-2xl pr-5">Cocktail List</h1>
        </div>
        {/* <div className=" max-w-[300px] p-3 bg-white whitespace-nowrap rounded-2xl group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 ">
          <Image className="rounded-2xl pt-2 pl-1 pr-1" src={results.results.drinks[0].strDrinkThumb} width='1920' height='1080' />
        <h1 className="flex p-2 justify-center">{results.results.drinks[0].strDrink}</h1>
        <h1 className="flex justify-center">{results.results.drinks[0].idDrink}</h1>
        </div> */}
          {Array.from(results).map((r,idDrink) => {
            return (
               <div key={idDrink} className=" max-w-[300px] p-3 bg-white whitespace-nowrap rounded-2xl group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 ">
          <Image className="rounded-2xl pt-2 pl-1 pr-1" src={r.drinks.strDrinkThumb} width='1920' height='1080' />
        <h1 className="flex p-2 justify-center">{r.results.drinks.strDrink}</h1>
        <h1 className="flex justify-center">{r.results.drinks.idDrink}</h1>
        </div> 
            )
            })}
          {/* <h1>{data.drinks[0].strDrink}</h1> */}
       {/* <Image src={data.drinks[0].strDrinkThumb} width='720' height='45' /> */}
       </div>
        </>
  )
}

export default cocktailList


