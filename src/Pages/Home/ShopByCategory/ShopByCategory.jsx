import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    
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
                    <Tab>Cars</Tab>
                    <Tab>Buses</Tab>
                    <Tab>Trucks</Tab>
                    <Tab>Police Cars</Tab>
                    </TabList>

                    <TabPanel>
                    <h2>Any content 1</h2>
                    <p>You possess incredible potential within you. Every day is an opportunity to unlock that potential and achieve greatness. Embrace challenges as stepping stones to your success. Remember, setbacks are temporary and provide valuable lessons for growth. Stay focused on your goals and never lose sight of your dreams. Believe in yourself even when others doubt you. Your determination and perseverance will overcome any obstacle. Surround yourself with positive influences and like-minded individuals who inspire you to become the best version of yourself. Success is not a destination; it is a journey. Embrace each day with enthusiasm and unwavering belief in your abilities. You are unstoppable!</p>
                    </TabPanel>
                    <TabPanel>
                    <h2>Any content 2</h2>
                    <p>You possess incredible potential within you. Every day is an opportunity to unlock that potential and achieve greatness. Embrace challenges as stepping stones to your success. Remember, setbacks are temporary and provide valuable lessons for growth. Stay focused on your goals and never lose sight of your dreams. Believe in yourself even when others doubt you. Your determination and perseverance will overcome any obstacle. Surround yourself with positive influences and like-minded individuals who inspire you to become the best version of yourself. Success is not a destination; it is a journey. Embrace each day with enthusiasm and unwavering belief in your abilities. You are unstoppable!</p>
                    </TabPanel>
                    <TabPanel>
                    <h2>Any content 3</h2>
                    <p>You possess incredible potential within you. Every day is an opportunity to unlock that potential and achieve greatness. Embrace challenges as stepping stones to your success. Remember, setbacks are temporary and provide valuable lessons for growth. Stay focused on your goals and never lose sight of your dreams. Believe in yourself even when others doubt you. Your determination and perseverance will overcome any obstacle. Surround yourself with positive influences and like-minded individuals who inspire you to become the best version of yourself. Success is not a destination; it is a journey. Embrace each day with enthusiasm and unwavering belief in your abilities. You are unstoppable!</p>
                    </TabPanel>
                    <TabPanel>
                    <h2>Any content 4</h2>
                    <p>You possess incredible potential within you. Every day is an opportunity to unlock that potential and achieve greatness. Embrace challenges as stepping stones to your success. Remember, setbacks are temporary and provide valuable lessons for growth. Stay focused on your goals and never lose sight of your dreams. Believe in yourself even when others doubt you. Your determination and perseverance will overcome any obstacle. Surround yourself with positive influences and like-minded individuals who inspire you to become the best version of yourself. Success is not a destination; it is a journey. Embrace each day with enthusiasm and unwavering belief in your abilities. You are unstoppable!</p>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;