import { Link } from "react-router-dom";
import { useReadContract } from 'wagmi'
import { abi } from "../abi/liquidStake";
import { liquidStaking } from "../contracts";
import ETH from "../ETH";
import juice from '../assets/juice.png'
import arrowcircleright from '../assets/arrow-circle-right.png'


const Dashboard = () => {

    const ethPrice = ETH()

    const { data: LiquidStakebalance } = useReadContract({
        abi,
        address: liquidStaking,
        functionName: 'totalStaked'
    })

    const totalStaked = Number(LiquidStakebalance) / 10**18

    const totalStakedPrice = totalStaked * ethPrice

    function formatNumber(number = 0) {
        if (isNaN(number)) return 0;
    
        if (number < 1000) {
            return number.toFixed(2);
        } else if (number < 1000000) {
            return (number / 1000).toFixed(2) + "K";
        } else {
            return (number / 1000000).toFixed(2) + "M";
        }
    }
 
    return ( 
    <>
        <div className="p-4 sm:pl-72 pt-20 min-h-[100vh] w-full backdrop-blur-2xl dark:backdrop-blur-2xl backdrop-brightness-[1.3] dark:backdrop-brightness-[0.2] bg-white/[0.5] dark:bg-[#2A2A2A]/[0.5]" >  
        <div className="flex flex-col lg:flex-row justify-between items-center md:px-20 mb-20 md:mb-0 pt-10 md:pt-0"> 
            <div className="max-w-md">
                <p className="font-bold text-5xl pb-5">Unlock The <span className="text-[#AAC900]">Power Of Yield.</span></p>
                <p className="text-xl">Pioneer liquid staking protocol on the lisk ecosystem</p>
            </div>
            <div className="hidden lg:block">
                <img src={juice} alt="" className="h-64 w-52"/>
            </div>
        </div>
        <div className="md:px-20 md:pt-5 lg:pt-0">
            <div className="border border-[#F1DD2B] rounded-2xl w-[19rem] mx-auto sm:mx-0">
                <p className="py-2 px-8 font-[500] border-b border-[#F1DD2B]">Total Value Locked</p>
                <p className="text-[#8EA700] text-3xl font-bold pt-4 pb-7 px-8">$142.86M</p>
            </div>   
        </div>
        <div className="md:px-20 flex flex-col lg:flex-row w-full py-10 lg:gap-x-20 gap-y-10">
            <div className="border border-[#F1DD2B] rounded-2xl w-[19rem] mx-auto sm:mx-0">
                <div className="flex flex-row justify-between items-center px-8  border-b border-[#F1DD2B]">
                    <p className="py-2 font-[500]">Liquid Staking</p>
                    <span><Link to="/staking"><img src={arrowcircleright} alt=""/></Link></span>
                </div>
                <p className="text-[#8EA700] text-3xl font-bold pt-4 pb-7 px-8">${formatNumber(totalStakedPrice)}</p>
            </div>  
            <div className="border border-[#F1DD2B] rounded-2xl w-[19rem] mx-auto sm:mx-0">
                <div className="flex flex-row justify-between items-center px-8  border-b border-[#F1DD2B]">
                    <p className="py-2 font-[500]">$LMN Vault</p>
                    <span><Link to="/vault"><img src={arrowcircleright} alt=""/></Link></span>
                </div>
                <p className="text-[#8EA700] text-3xl font-bold pt-4 pb-7 px-8">$142.86M</p>
            </div>  
        </div>
        </div>
    </>
    );
   };
   
export default Dashboard;