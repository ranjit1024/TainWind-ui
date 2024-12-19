export function Transacton() {
  return (
    <div className="p-4 shadow-md">
      <p className="font-medium text-xl mb-7">Transactions | This Month</p>

      <div className="p-4 bg-white flex items-center justify-between">
        <div className="relative ">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search by order ID"
            className="bg-white p-1 pl-10 border-2 rounded-md border-gray-200 font-medium focus:outline-gray-400 w-80"
          />

          <div className="absolute left-0 inset-y-0 flex items-center p-3 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </div>

        <div>
          <button className="border-2 border-slate-300 px-5 font-medium py-1 rounded-md">
            Sort
          </button>
        </div>
      </div>

      <div className="list-transacrtions p-4 bg-white items-center">
        <div className="heading  grid grid-cols-4 bg-gray-200 p-2 rounded-md justify-center items-center">
          <div>
            <h1 className="font-medium">Order Id</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium">Order date</h1>
            
          </div>

          <div>
            <h1 className="font-medium">Order Amount</h1>
          </div>
          <div>
            <h1 className="font-medium">Transaction fees</h1>
          </div>
        </div>


       <div className="grid grid-cols-4 content-between justify-center text-start mt-2 ">
        <p>dfsa</p>
        <p>dfsa</p>
        <p>dfsa</p>
        <p>dfsa</p>
        <hr />
       </div>
       <div className="grid grid-cols-4 content-between justify-center text-start mt-2 ">
        <p>dfsa</p>
        <p>dfsa</p>
        <p>dfsa</p>
        <p>dfsa</p>
        <hr />
       </div>
       <div className="grid grid-cols-4 content-between justify-center text-start mt-2 ">
        <p>dfsa</p>
        <p>dfsa</p>
        <p>dfsa</p>
        <p>dfsa</p>
        <hr />
       </div>
       <div className="grid grid-cols-4 content-between justify-center text-start mt-2 ">
        <p>dfsa</p>
        <p>dfsa</p>
        <p>dfsa</p>
        <p>dfsa</p>
        <hr />
       </div>
       <div className="grid grid-cols-4 content-between justify-center text-start mt-2 ">
        <p>dfsa</p>
        <p>dfsa</p>
        <p>dfsa</p>
        <p>dfsa</p>
        <hr />
       </div>
       <div className="grid grid-cols-4 content-between justify-center text-start mt-2 ">
        <p>dfsa</p>
        <p>dfsa</p>
        <p>dfsa</p>
        <p>dfsa</p>
        <hr />
       </div>
       <div className="grid grid-cols-4 content-between justify-center text-start mt-2 ">
        <p>dfsa</p>
        <p>dfsa</p>
        <p>dfsa</p>
        <p>dfsa</p>
        <hr />
       </div>

      </div>
    </div>
  );
}
