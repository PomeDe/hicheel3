"use client";
import { serializeUseCacheCacheStore } from "next/dist/server/resume-data-cache/cache-store";
import { use, useState } from "react";

const data = [
  {
    id:1,
    fname:"anar",
    lname:"batsukh",
    job: "Unemployed",
    image: "https://i.pinimg.com/originals/41/f7/dd/41f7dd66257ec0914e9267e4dcbc76ed.jpg",
    items: [{id:0, name:"meth"},{id:1, name:"lighter"}]
  },
  {
    id:2,
    fname:"Ayden-anand",
    lname:"medku",
    job: "muu nohoi",
    image: "https://pbs.twimg.com/profile_images/1778342157654347776/8yDj-uVX_400x400.jpg",
    items: [{id:2, name:"furry costume"},{id:3, name:"20$"}]
  },
  {
    id:3,
    fname:"Anduul",
    lname:"Anduul",
    job: "Gambler",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZcXDqq7C4qJkxhw60W_T-lQ4jrpoDKxRqEQ&s",
    items: [{id:4, name:"poker card"},{id:5, name:"steroid"}]
  },
  {
    id:4,
    fname:"Anand",
    lname:"Altankhuyag",
    job: "Serial killer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbA6fT2at6nGDFg3GLRbuHBvCbNHamizHSFA&s",
    items: [{id:6, name:"Toilet paper"},{id:7, name:"knife"}]
  },
  {
    id:5,
    fname:"Aidualet",
    lname:"Nurka",
    job: "homeless",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7iJxJL2HRhMgCx8m2_MLqhNDqBPqGoKHrw&s",
    items: [{id:8, name:"phone"},{id:9, name:"cola"}]
  },
  {
    id:6,
    fname:"Azzaya",
    lname:"Amarbat",
    job: "Calculator",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbsVyeN4LzXGm3X9Yv7XICSOWwh8Xlk6KTA&s",
    items: [{id:10, name:"glasses"},{id:11, name:"math paper"}]
  },
  {
    id:7,
    fname:"batpurev",
    lname:"akira",
    job: "Unemployed",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvljOuOOYhttNEJrpehBg1PR_0venHe08mqZuiN8Ruoy5x8En85nwdtRH2xCvUatY1HsQ&usqp=CAU",
    items: [{id:12, name:"chips"},{id:13, name:"gooning"}]
  },
  {
    id:8,
    fname:"Naranerdene",
    lname:"Narka",
    job: "raper",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRde6P-FzugfZKsmJPgMz6tW50bq2Z3f6sEgw&s",
    items: [{id:14, name:"Huvsgul nuur"},{id:15, name:"phone"}]
  },
  {
    id:9,
    fname:"Chinguun",
    lname:"Tovigoo",
    job: "Entrepreneur",
    image: "https://cdn.facet.onet.pl/1/ysek9lBaHR0cHM6Ly9vY2RuLmV1L3B1bHNjbXMvTURBXy80NjVlNjJhYmRmZjgzZjA1NjllOWRjNWQ3NmJkZTY2Ny5qcGeSlQNozI_NA4vNAf6TBc0EsM0Cdt4AAqEwB6ExBA",
    items: [{id:16, name:"Matrix"},{id:17, name:"Lamborlambor"}]
  },
  {
    id:10,
    fname:"Soyombo",
    lname:"Soko",
    job: "No job",
    image: "https://media.tenor.com/3em2hUK8Kn4AAAAe/sad-black-guy.png",
    items: [{id:18, name:"anger"},{id:19, name:"lighter"}]
  },
  {
    id:11,
    fname:"Minori",
    lname:"Nguyen",
    job: "No job",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLOl5uJMOvidRU6u8t72FYF_mw7T-PIZQ1w&s",
    items: [{id:20, name:"instant ramen"},{id:21, name:"laptop"}]
  },
  {
    id:12,
    fname:"Serjmyadg",
    lname:"medku",
    job: "CU",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNafh_0MzqWaKctvFZo4FTl0QqXQB_yFXww&s",
    items: [{id:22, name:"phone"}]
  },
  {
    id:13,
    fname:"Oyunbileg",
    lname:"medku",
    job: "no job",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlz-0gZGjxoAp2wa6pbtGIR_9nsVwQZMHbOQ&s",
    items: [{id:23, name:"starbucks"},{id:24, name:"taylor swift"}]
  },
  {
    id:14,
    fname:"Ysui",
    lname:"Enkhbayar",
    job: "Doomscroller",
    image: "https://media.tenor.com/3em2hUK8Kn4AAAAe/sad-black-guy.png",
    items: [{id:25, name:"anger"},{id:26, name:"lighter"}]
  },
]
export default function Home() {
  const [val, setVal] = useState(" ");
  const [togle, setTogle] = useState(true);
  const searchFilter =(array) =>{
    return array.filter(
      (el) => (el.fname+el.lname).toLowerCase().includes(val.toLocaleLowerCase())
    )
  }
  const filtered = searchFilter(data)
  const handleSearch = (e) =>{
    setVal(e.target.value);
  };
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
  return (
<div className="p-10 bg-white  h-fit w-screen">
      <div className="flex flex-row w-full mx-auto mb-5 justify-between">
        <input
            type="text"
            placeholder="Search users..."
            value={val}
            onChange={handleSearch}
            className="w-1/4 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none placeholder-black text-black focus:ring-2 focus:ring-blue-500"
          />
          <button className="" onClick={() => setTogle(!togle)}>Toggle</button>
      </div>
      {togle ? (<div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-24">
      {filtered.length >0 ? (
      filtered.map((element) => (
          <div
            key={element.id}
            className="w-84 h-84 flex flex-col p-5 rounded-lg text-black shadow-xl border-black bg-slate-200 transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <div
            className="w-full h-1/2">
<img
              src={element.image}
              className=" w-full h-full" 
            />
            </div>

            <div className="text-black ml-2">
              <p className="text-black">Firstname: {element.fname}</p>
            </div>
            <p className="text-black ml-2">Lastname: {element.lname}</p>
            <p className="text-blue-700 ml-2">Job: {element.job}</p>
            <div className="mt-2 ml-2">
              <p className="text-blue-400 font-bold">Items:</p>
              <ul className="list-disc ml-5 text-black">
                {element.items.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        ))):(<p className="text-red-500 text-center text-xl col-span-full">Can't find the user</p>)}
      </div>): (<div className="grid lg:grid-cols-2 sm:grid-cols-1  w-full">
      {filtered.length >0 ? (
      filtered.map((element) => (
          <div
            key={element.id}
            className="w-full h-60 flex flex-row p-5 text-black  shadow-md border-black border-2 bg-slate-200 "
          >
            <div
            className="w-1/2 h-full">
<img
              src={element.image}
              className=" w-full h-full" 
            />
            </div>
            <div className="flex flex-col">
            <div className="text-black mb-2 ml-2">
              <p className="text-black">Firstname: {element.fname}</p>
            </div>
            <p className="text-black ml-2">Lastname: {element.lname}</p>
            </div>
            <p className="text-blue-700 ml-3">Job: {element.job}</p>
            <div className=" ml-5">
              <p className="text-blue-400 font-bold">Items:</p>
              <ul className="list-disc ml-5 text-black">
                {element.items.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        ))):(<p className="text-red-500 text-center text-xl col-span-full">Can't find the user</p>)}
      </div>)}
      </div>
      
  );
}
