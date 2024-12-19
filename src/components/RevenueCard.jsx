export function RevenuCard ({
    title,
    orderCount,
    amount
}){
    return <div className="bg-white border-1 p-4 border-slate-50 rounded-sm shadow-sm shadow-slate-200">
        <div className="text-gray-700 font-semibold text-lg">
            {title}
            ?
        </div>
        <div className="flex justify-between mt-3 items-center">
            <div className="font-semibold text-3xl">
                $ {amount}
            </div>
            <div className="text-blue-700 font-medium underline underline-offset-4">
                {orderCount ? <div>orders {orderCount}</div>:null}
            </div>
        </div>
    </div>
}