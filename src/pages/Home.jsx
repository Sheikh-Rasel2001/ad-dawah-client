import Hero from "../component/Hero";
import Statistic from "../component/Statistic";
import { FiActivity, FiGlobe, FiGrid, FiUsers } from "react-icons/fi";

const statistics = [
    { icon: <FiGrid/>, value: 50, suffix: '+', label: 'Total Projects', suffixText: '' },
    { icon: <FiUsers/>, value: 10000, suffix: '+', label: 'Beneficiaries', suffixText: 'K' },
    { icon: <FiActivity/>, value: 25000, suffix: '+', label: 'Donations', suffixText: 'K' },
    { icon: <FiGlobe/>, value: 50000, suffix: '+', label: 'Visitors', suffixText: 'K' }

]


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="w-full bg-linear-to-r from-emerald-600 to-teal-700 py-16 ">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {
                        statistics.map((stat, index) => <Statistic key={index} stat={stat}></Statistic>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;