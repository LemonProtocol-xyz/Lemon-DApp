import { Link, useParams } from 'react-router-dom'
import { pools } from '../contracts'
import back from '../assets/back.png'
import backdark from '../assets/back dark.png'

const Pool = () => {

    const { param } = useParams()
    const id = param ? parseInt(param) -1 : 0
    const pool = pools[id]

    console.log(param)

    return(
        <>
            <div className="p-4 sm:pl-72 pt-20 min-h-[100vh] backdrop-blur-2xl dark:backdrop-blur-2xl backdrop-brightness-[1.3] dark:backdrop-brightness-[0.2] bg-white/[0.5] dark:bg-[#2A2A2A]/[0.5]">  
                <div className="pb-10 lg:px-10">
                    <div className='flex flex-col md:flex-row gap-y-5 gap-x-5 justify-between items-center'>
                        <div className='flex justify-between items-center gap-3 w-full md:w-fit'>
                            <Link to={'/vault'}>
                                <img src={back} alt="" className='dark:hidden'/>
                                <img src={backdark} alt="" className='hidden dark:block'/>
                            </Link>
                            <p className='text-[#556400] dark:text-[#AAC900] text-xl ms-5'>Pool ID: #{pool.id}</p>
                            <div className='p-2 bg-[#F1DD2B66] rounded-2xl py-1 px-4'>
                                <p className='text-[#556400] dark:text-[#AAC900] font-bold'>Open</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-end'>
                            <p className='text-[#556400] dark:text-[#AAC900] text-sm font-semibold pb-1  mx-auto md:ms-auto md:me-0'>Time Left for Entry Window</p>
                            <div className='flex justify-between items-center'>
                                <div className='flex flex-col justify-center'>
                                    <p className='text-3xl font-bold'>00:</p>
                                    <p className='text-[9px] font-semibold ms-1'>Months</p>
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <p className='text-3xl font-bold'>00:</p>
                                    <p className='text-[9px] font-semibold ms-2'>Weeks</p>
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <p className='text-3xl font-bold'>00:</p>
                                    <p className='text-[9px] font-semibold ms-3'>Days</p>
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <p className='text-3xl font-bold'>00:</p>
                                    <p className='text-[9px] font-semibold ms-2'>Hours</p>
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <p className='text-3xl font-bold'>00</p>
                                    <p className='text-[9px] font-semibold ms-1'>Minutes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 flex justify-center gap-x-5 lg:gap-x-5 gap-y-5 flex-wrap items-center'>
                        <div className='border border-[#F1DD2B] rounded-xl p-8 w-[11rem] lg:w-[14rem]'>
                            <p className='text-[#556400] dark:text-[#AAC900] text-sm font-semibold'>APY:</p>
                            <p className='font-bold text-2xl'>{pool.APR}</p>
                        </div>
                        <div className='border border-[#F1DD2B] rounded-xl p-8 w-[11rem] lg:w-[14rem] text-nowrap'>
                            <p className='text-[#556400] dark:text-[#AAC900] text-sm font-semibold'>Lockup Time:</p>
                            <p className='font-bold text-2xl'>{pool.time}</p>
                        </div>
                        <div className='border border-[#F1DD2B] rounded-xl p-8 w-[11rem] lg:w-[14rem] text-nowrap'>
                            <p className='text-[#556400] dark:text-[#AAC900] text-sm font-semibold'>Entry Amount:</p>
                            <p className='font-bold text-2xl text-center'>{pool.amount} $lmETH</p>
                        </div>
                        <div className='border border-[#F1DD2B] rounded-xl p-8 w-[11rem] lg:w-[14rem] text-nowrap'>
                            <p className='text-[#556400] dark:text-[#AAC900] text-sm font-semibold'>Total Value Locked:</p>
                            <p className='font-bold text-2xl'>30 $lmETH</p>
                        </div>
                    </div>
                    <div className='mt-10 border border-[#F1DD2B] rounded-xl bg-[#F1DD2B26] flex justify-between items-center p-10 gap-5'>
                        <div>
                            <p className='text-[#556400] dark:text-[#AAC900] font-bold pb-2 text-lg'>Enter Pool</p>
                            <p className='text-sm font-semibold'>Lock {pool.amount} $lmETH for 3 months to win 5% (0.0005 $LMN) yields.</p>
                        </div>
                        <div>
                        <button className="px-5 py-1 text-sm text-white bg-[#8EA700] rounded-full border-2 border-[#8EA700] focus:ring-4 focus:outline-none focus:ring-[#8EA700] dark:bg-[#8EA700] hover:bg-[#8EA700]/[0.9] dark:hover:bg-[#8EA700]/[0.9] w-full">Enter</button>
                        </div>
                    </div>
                    <div className='mt-10 border border-[#F1DD2B] rounded-xl p-8'>
                        <div className='flex justify-between items-center'>
                            <p className='text-[#556400] dark:text-[#AAC900] font-bold text-xl'>Pool Entries</p>  
                            <p>No. of Entries: <span className='text-[#556400] dark:text-[#AAC900] font-bold text-xl'>76</span></p>                          
                        </div>        
                        <div className='overflow-auto'>
                        <table className='w-full my-5 table-auto'>
                            <thead className='bg-[#F5F7E9] dark:bg-[#8EA7004D]'>
                                <tr className='text-center'>
                                    <th className='text-[#556400] dark:text-[#AAC900] py-2 text-nowrap px-3'>Time</th>
                                    <th className='text-[#556400] dark:text-[#AAC900] text-nowrap px-3'>Entry ID</th>
                                    <th className='text-[#556400] dark:text-[#AAC900] text-nowrap px-3'>Address</th>
                                    <th className='text-[#556400] dark:text-[#AAC900] text-nowrap px-3'>Yield Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='text-center'>
                                    <td className='py-3 px-3 text-nowrap'>12th Apr, 24 - 12:30pm</td>
                                    <td className='py-2 px-3'>1</td>
                                    <td className='py-2 px-3'>0x573ghubdu326794hu8y44653778873677467</td>
                                    <td className='py-2 px-3'>Available</td>
                                </tr>
                            </tbody>
                        </table>  
                        </div>              
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pool