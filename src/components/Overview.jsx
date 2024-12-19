export function Overview({onlineOrder,amount}){
    return <div className="p-4 grid grid-cols-2 gap-3">
        <div className="online-orders p-5 bg-white shadow-sm rounded-md">
            <p className="mb-5 font-medium  text-gray-500">Online orders</p>
            <p className="font-semibold text-2xl">{onlineOrder}</p>
        </div>
        <div className="amount-recived p-5 bg-white shadow-sm rounded-md">
            <p className="mb-5 font-medium text-gray-500">Amount received</p>
            <p className="font-semibold text-2xl">${amount}</p>
        </div>
    </div>
}