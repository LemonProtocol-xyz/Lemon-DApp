import lemonicon2 from '../assets/lemon icon 2.png'
import lemoniconbig from '../assets/lemon icon big.png'
import { pools } from '../contracts';
import { useNavigate } from "react-router-dom"

const Vault = () => {

    const navigate = useNavigate();
    const handleClick = (id: any) => navigate(`pool/${id}`)

    return (
    <>
        <div className="p-4 sm:pl-72 pt-20 min-h-[100vh] backdrop-blur-2xl dark:backdrop-blur-2xl backdrop-brightness-[1.3] dark:backdrop-brightness-[0.2] bg-white/[0.5] dark:bg-[#2A2A2A]/[0.5]" >  
        <div className="pb-10 lg:px-10">
            <div className="border border-[#F1DD2B] rounded-xl w-full mt-10 flex justify-between items-center p-8">
                <div className='sm:w-[70%]'>
                    <p className='text-[#556400] dark:text-[#AAC900] text-3xl font-bold pb-4'>$LMN Vault</p>
                    <p className='text-sm'>Grow your Lemon Token ($LMN) rewards by staking Lemon Eth in our time-locked yield pools. Each vault varies in lock time and yield average. The longer you stake, the greater your harvest! <br /> <br />
                    Earned rewards are accumulated and issued to a random staker at a given interval</p>
                </div>
                <div className='h-full w-[25%] sm:flex items-center justify-center hidden'>
                    <img src={lemoniconbig} alt="" className=''/>
                </div>                
            </div> 
            <div className='flex flex-wrap items-center justify-center gap-x-4 lg:gap-x-12 gap-y-8 shrink-0 mt-10 w-full'>
                {pools.map(({id, amount, time, APR})=>(
                    <div className="border border-[#F1DD2B] rounded-xl w-full md:w-[17rem] lg:w-72 py-6 px-6">
                        <div className='flex justify-between items-center pb-10'>
                            <div className='flex justify-center items-center gap-2'> 
                                <img src={lemonicon2} alt="" />
                                <div>
                                    <p className='text-[#556400] dark:text-[#AAC900] text-sm font-semibold'>Pool ID</p>
                                    <p className='text-[#556400] dark:text-[#AAC900] font-bold'>#{id}</p>
                                </div>
                            </div>
                            <div className='p-2 bg-[#F1DD2B66] rounded-2xl py-1 px-4'>
                                <p className='text-[#556400] dark:text-[#AAC900] font-bold'>Open</p>
                            </div>
                        </div>

                        <div className='flex  items-center pb-8 gap-4'>
                            <div className='w-[50%]'>
                                <p className='text-sm text-[#556400] dark:text-[#AAC900] font-semibold'>APY:</p>
                                <p className='text-xl font-bold'>{APR}%</p>
                            </div>
                            <div>
                                <p className='text-sm text-[#556400] dark:text-[#AAC900] font-semibold'>Lockup Time:</p>
                                <p className='text-xl font-bold'>{time} Months</p>
                            </div>
                        </div>
                        <div className='flex  items-center pb-4 gap-4'>
                            <div className='w-[50%]'>
                                <p className='text-sm text-[#556400] dark:text-[#AAC900] font-semibold'>Entry Amount:</p>
                                <p className='text-xl font-bold'>{amount} <span className='text-xs font-semibold'>$lmETH</span></p>
                            </div>
                            <div>
                                <p className='text-sm text-[#556400] dark:text-[#AAC900] font-semibold'>TVL:</p>
                                <p className='text-xl font-bold'>0 <span className='text-xs font-semibold'>$lmETH</span></p>
                            </div>
                        </div>

                        <div className='pt-6'>
                            <button className="px-4 py-2 text-sm text-white bg-[#8EA700] rounded-full border-2 border-[#8EA700] focus:ring-4 focus:outline-none focus:ring-[#8EA700] dark:bg-[#8EA700] hover:bg-[#8EA700]/[0.9] dark:hover:bg-[#8EA700]/[0.9] w-full"  onClick={() => handleClick(id)}>Enter Pool</button>
                        </div>
                        
                    </div> 
                ))}
            </div>
            
        </div>   
        </div>
    </>
    );
   };
   
export default Vault;