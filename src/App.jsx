import React from "react";

function App() {
  // component
  return (
    <div className="flex flex-col bg-black max-w-[300px] w-full h-[500px] rounded-2xl">
      <div className="text-white p-5 text-5xl text-right">0</div>
      <div className="grid grid-cols-4 gap-3 p-5">
        <button className="width-[55px] bg-stone-600 hover:bg-slate-300 rounded-full h-[55px] text-lg font-bold">
          AC
        </button>
        <button className="width-[55px] bg-stone-600 hover:bg-slate-300  rounded-full h-[55px] text-lg font-bold">
          +/-
        </button>
        <button className="width-[55px] bg-stone-600 hover:bg-slate-300  rounded-full h-[55px] text-lg font-bold">
          %
        </button>
        <button className="width-[55px] bg-amber-500 hover:bg-slate-300  rounded-full h-[55px] text-lg font-bold">
          ÷
        </button>
        <button className="width-[55px] text-white hover:bg-slate-300  bg-neutral-900 rounded-full h-[55px] text-lg font-bold">
          7
        </button>
        <button className="width-[55px] text-white hover:bg-slate-300   bg-neutral-900 rounded-full h-[55px] text-lg font-bold">
          8
        </button>
        <button className="width-[55px] text-white hover:bg-slate-300  bg-neutral-900 rounded-full h-[55px] text-lg font-bold">
          9
        </button>
        <button className="width-[55px] bg-amber-500 hover:bg-slate-300  rounded-full h-[55px] text-lg font-bold">
          x
        </button>
        <button className="width-[55px] text-white hover:bg-slate-300   bg-neutral-900 rounded-full h-[55px] text-lg font-bold">
          4
        </button>
        <button className="width-[55px] text-white hover:bg-slate-300  bg-neutral-900 rounded-full h-[55px] text-lg font-bold">
          5
        </button>
        <button className="width-[55px] text-white hover:bg-slate-300  bg-neutral-900 rounded-full h-[55px] text-lg font-bold">
          6
        </button>
        <button className="width-[55px] bg-amber-500 hover:bg-slate-300  rounded-full h-[55px] text-lg font-bold">
          -
        </button>
        <button className="width-[55px] text-white hover:bg-slate-300  bg-neutral-900 rounded-full h-[55px] text-lg font-bold">
          1
        </button>
        <button className="width-[55px] text-white hover:bg-slate-300  bg-neutral-900 rounded-full h-[55px] text-lg font-bold">
          2
        </button>
        <button className="width-[55px] text-white hover:bg-slate-300  bg-neutral-900 rounded-full h-[55px] text-lg font-bold">
          3
        </button>
        <button className="width-[55px] bg-amber-500 hover:bg-slate-300  rounded-full h-[55px] text-lg font-bold">
          +
        </button>
        <button className="bg-neutral-900 text-white hover:bg-slate-300  rounded-full h-[55px] text-lg font-bold col-span-2">
          0
        </button>
        <button className="width-[55px] bg-neutral-900 hover:bg-slate-300  rounded-full h-[55px] text-lg font-bold">
          .
        </button>
        <button className="width-[55px] bg-amber-500 hover:bg-slate-300  rounded-full h-[55px] text-lg font-bold">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
