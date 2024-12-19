export function RevenuCard ({
    title,
    orderCount,
    amount
}){
    return <div className="bg-white border-1 p-4 border-slate-50 rounded-md shadow-sm shadow-slate-200">
        <div className="text-gray-700 font-medium flex">
            {title}
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
        </div>
        <div className="flex justify-between mt-5 items-center">
            <div className="font-medium text-3xl">
                $ {amount}
            </div>
            <div className="text-blue-700 font-medium underline  decoration-1 hover:cursor-pointer hover:text-blue-600 
            text-medium">
                {orderCount ? <div className="flex items-center">Orders {orderCount } 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> 
                </div>:null}
            </div>
        </div>
    </div>
}