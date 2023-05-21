/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState,useEffect } from 'react';
import ToyCard from './../../Shared/ToyCard/ToyCard';


const ShopByCategory = () => {
    
    const [tabControl,setTabControl] = useState("car");

    const [sameItems,setSameItems] = useState([]);
     const handleTabItem = toyType =>{
        setTabControl(toyType)
    }

    useEffect(()=>{
       fetch(`https://b7a11-toy-marketplace-server-side-hasan-bakar.vercel.app/${tabControl}`)
        .then(res => res.json())
        .then(data =>setSameItems(data))
    },[tabControl])

    return (
        <div>
            <div className="flex items-center py-8 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                <h3 className="text-center px-5 text-2xl font-semibold" >Shop by Category</h3>
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            </div>
            <div className="py-4 mb-6">
                <Tabs>
                    <TabList>
                        <Tab>
                            <button onClick={()=> handleTabItem("car")}>Cars</button>
                        </Tab>
                        <Tab>
                            <button onClick={()=> handleTabItem("bus")}>Buses</button>
                        </Tab>
                        <Tab>
                            <button onClick={()=> handleTabItem("truck")}>Trucks</button>
                        </Tab>
                        <Tab>
                            <button onClick={()=> handleTabItem("policeCar")}>Police Cars</button>
                        </Tab>
                    </TabList>

                    <TabPanel>
                    <div className="grid md:grid-cols-3 gap-6">
                        {
                        sameItems.map(item=><ToyCard
                        key={item?._id}
                        item={item}
                        ></ToyCard>)
                    }
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid md:grid-cols-3 gap-6">
                        {
                        sameItems.map(item=><ToyCard
                        key={item?._id}
                        item={item}
                        ></ToyCard>)
                    }
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid md:grid-cols-3 gap-6">
                        {
                        sameItems.map(item=><ToyCard
                        key={item?._id}
                        item={item}
                        ></ToyCard>)
                    }
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid md:grid-cols-3 gap-6">
                        {
                        sameItems.map(item=><ToyCard
                        key={item?._id}
                        item={item}
                        ></ToyCard>)
                    }
                    </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;