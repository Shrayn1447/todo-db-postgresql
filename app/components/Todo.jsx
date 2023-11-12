"use client";
import React from "react";
import clsx from "clsx";
import NewUpInput from "./newUpInput";
import { useState } from "react";

const Todo = ({ data, children }) => {
  const [ up, setUp ] = useState(false);
  return (
    <div>
      <div className="h-[50px] m-[10px] flex items-center justify-between px-[20px] bg-slate-200 rounded-xl text-black">
        <div>
          {up ? (
              <NewUpInput id={data.id} up={setUp}></NewUpInput>

          ) : (
            <p
              className={clsx(`text-[20px] text-orange-600 font-bold`, {
                "line-through": data.done,
              })}>
              {data.title}
              <span className=" text-black">
                  {data.time}
              </span>
            </p>
          )}
        </div>
        <div className="flex">
          {children}
          <button
            onClick={() => {
              setUp(n => !n)
            }}
            className="bg-gray-300 p-[10px] hover:bg-gray-600 ml-[10px] rounded-xl"
          >
            Реда
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
