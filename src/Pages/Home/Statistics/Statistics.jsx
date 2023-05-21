const Statistics = () => {
    return (
        <>
            <div className="flex items-center py-8 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                <h3 className="text-center px-5 text-2xl font-semibold" >Our growing Statistics </h3>
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            </div>

            <div className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
                    <p className="leading-relaxed">Customers</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.2K</h2>
                    <p className="leading-relaxed">Sellers</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">23k</h2>
                    <p className="leading-relaxed">Sold products</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">3k</h2>
                    <p className="leading-relaxed">Stock Products</p>
                </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Statistics;