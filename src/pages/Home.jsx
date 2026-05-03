import Hero from "../component/Hero";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="w-full h-96 bg-white"></div>
            <div className="w-full h-96 bg-blue-500"></div>
            <div className="w-full h-96 bg-purple-500"></div>
            <div className="w-full h-96 bg-green-500"></div>
            <div className="w-full h-96 bg-gray-500"></div>
        </div>
    );
};

export default Home;