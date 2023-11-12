'use client'
import React from "react";
import {update} from '@/app/lib/update'
import { useState } from "react";
export default function NewUpInput( { id, up } ) {
    const [title, setTitle] = useState('')
  return (
    <form action={ ()=> {
        update(id,title)
        up(false)
    }}>
      <input onChange={(e) => {
        setTitle(e.target.value)
      }} type="text" className=" border" />
      <button
        type="submit"
        className="border border-black rounded-xl hover:bg-gray-600 bg-gray-300 ml-[15px] p-[5px]"
      >
        Отред
      </button>
    </form>
  );
};


