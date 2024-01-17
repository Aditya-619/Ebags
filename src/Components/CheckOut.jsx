

const CheckOut = () => {

    return (
        <div className="bg-black bg-opacity-70 fixed z-30 top-0 left-0 w-full h-screen">
            <div className="h-full bg-slate-50 sm:w-[40rem] min-w-[15rem] overflow-y-auto">
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center cursor-pointer">
                            <span className="uppercase text-[0.95rem] select-none">continue shopping</span>
                        </div>
                        <div>shopping bag (0)</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut