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
    fname:"ayden-anand",
    lname:"medku",
    job: "muu nohoi",
    image: "https://pbs.twimg.com/profile_images/1778342157654347776/8yDj-uVX_400x400.jpg",
    items: [{id:2, name:"furry costume"},{id:3, name:"20$"}]
  },
  {
    id:3,
    fname:"anduul",
    lname:"batsukh",
    job: "Unemployed",
    image: "https://i.pinimg.com/originals/41/f7/dd/41f7dd66257ec0914e9267e4dcbc76ed.jpg",
    items: [{id:0, name:"meth"},{id:1, name:"lighter"}]
  },
  {
    id:4,
    fname:"anar",
    lname:"batsukh",
    job: "Unemployed",
    image: "https://i.pinimg.com/originals/41/f7/dd/41f7dd66257ec0914e9267e4dcbc76ed.jpg",
    items: [{id:0, name:"meth"},{id:1, name:"lighter"}]
  },
  {
    id:5,
    fname:"anar",
    lname:"batsukh",
    job: "Unemployed",
    image: "https://i.pinimg.com/originals/41/f7/dd/41f7dd66257ec0914e9267e4dcbc76ed.jpg",
    items: [{id:0, name:"meth"},{id:1, name:"lighter"}]
  },
  {
    id:6,
    fname:"anar",
    lname:"batsukh",
    job: "Unemployed",
    image: "https://i.pinimg.com/originals/41/f7/dd/41f7dd66257ec0914e9267e4dcbc76ed.jpg",
    items: [{id:0, name:"meth"},{id:1, name:"lighter"}]
  },
  {
    id:7,
    fname:"anar",
    lname:"batsukh",
    job: "Unemployed",
    image: "https://i.pinimg.com/originals/41/f7/dd/41f7dd66257ec0914e9267e4dcbc76ed.jpg",
    items: [{id:0, name:"meth"},{id:1, name:"lighter"}]
  },
  {
    id:8,
    fname:"anar",
    lname:"batsukh",
    job: "Unemployed",
    image: "https://i.pinimg.com/originals/41/f7/dd/41f7dd66257ec0914e9267e4dcbc76ed.jpg",
    items: [{id:0, name:"meth"},{id:1, name:"lighter"}]
  },
  {
    id:9,
    fname:"anar",
    lname:"batsukh",
    job: "Unemployed",
    image: "https://i.pinimg.com/originals/41/f7/dd/41f7dd66257ec0914e9267e4dcbc76ed.jpg",
    items: [{id:0, name:"meth"},{id:1, name:"lighter"}]
  },
  {
    id:10,
    fname:"anar",
    lname:"batsukh",
    job: "Unemployed",
    image: "https://i.pinimg.com/originals/41/f7/dd/41f7dd66257ec0914e9267e4dcbc76ed.jpg",
    items: [{id:0, name:"meth"},{id:1, name:"lighter"}]
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

  return (
<div className="p-10 bg-white w-screen h-screen">
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
      {togle ? (<div className="grid grid-cols-4 gap-24">
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
      </div>): (<div className="grid grid-cols-2  w-full">
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
