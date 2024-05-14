import { Link, useParams } from 'react-router-dom'
import { pools, lemonVault, lemonETHToken} from '../contracts'
import back from '../assets/back.png'
import backdark from '../assets/back dark.png'
import { useEffect, useState } from 'react'
import { useAccount, useBalance, useReadContract, useWriteContract, useWaitForTransactionReceipt, type BaseError, useReadContracts  } from 'wagmi'
import { lemonVaultAbi } from '../abi/lemonVault'
import { CustomFlowbiteTheme, Modal } from "flowbite-react";
import lemonicon2 from '../assets/lemon icon 2.png'
import information from '../assets/information.png'
import { parseEther } from 'viem'
import { ModalComponent } from '../components/modal'
import tickcircle from '../assets/tick-circle.png'
import { Loading } from "../components/loading";

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { lemonEthTokenAbi } from '../abi/lemonEthToken'

const customTheme: CustomFlowbiteTheme["modal"] = {
    root:{
        positions:{
            center: "items-center justify-center"
        },
        show:{
          on: "flex bg-gray-900 bg-opacity-60 dark:bg-opacity-60"
        }
    },
    header: {
        close: {
            base: "ml-auto inline-flex items-center bg-transparent px-2 text-sm text-[#8EA700] dark:hover:text-[#8EA700] border border-[#8EA700] rounded-full ",
      },
    },
    content:{
      base: "relative h-full p-4 md:h-auto flex flex-col justify-center items-center",
      inner: "relative flex max-h-[90dvh] flex-col rounded-2xl bg-white shadow-2xl dark:bg-gray-700 border border-[#8EA700] justify-self-center w-[90%] md:w-full"
    }
  };

function formatNumber(number = 0) {
    if (isNaN(number)) return 0;

    if (number < 10) {
        return "0" + number;
    } else {
        return number;
    }
}

// const getNextSundayTimestamp = () =>{
//     const now = new Date();
//     const nextSunday = new Date(now);
    
//     // Set the next Sunday
//     nextSunday.setUTCHours(0, 0, 0, 0); // Set to midnight
//     nextSunday.setUTCDate(now.getUTCDate() + (7 - now.getUTCDay())); // Add days to get to next Sunday

//     // Get the timestamp
//     return nextSunday.getTime();
// }

// const getFutureTimestamp = (months: number) => {
//     const nextSundayTimestamp = getNextSundayTimestamp();
//     const futureDate = new Date(nextSundayTimestamp);

//     // Add the specified number of months
//     futureDate.setUTCMonth(futureDate.getUTCMonth() + months);

//     // Get the timestamp
//     return futureDate.getTime();
//   };


const Pool = () => {

    const { param } = useParams()
    const id = param ? parseInt(param) -1 : 0
    const pool = pools[id]    

    //Get connect account details
    const {address} = useAccount()

    //Get ETH balance of connected account
    const {data : amount} = useBalance({
        address: address,
        token: lemonETHToken
    })

    // const months = pool.time

    // const nextSundayTimestamp = getNextSundayTimestamp()
    // const futureTimestamp = getFutureTimestamp(months);

    // const poolstruct = {
    //     entryAmount: BigInt(pool.amount * 10**18),
    //     lockTime: BigInt(nextSundayTimestamp / 1000),
    //     unlockTime: BigInt(futureTimestamp / 1000),
    //     yieldPercentage: pool.APR,
    //     rewardRounds: 1
    // }

    // const poolhash = useReadContract({
    //     abi: lemonVaultAbi,
    //     address: lemonVault,
    //     functionName: 'hashPoolSeeds',
    //     args: [poolstruct]
    // })

    // const pooledid = useReadContract({
    //     abi: lemonVaultAbi,
    //     address: lemonVault,
    //     functionName: 'poolIdsBySeedsHashes',
    //     args: [poolhash.data as `0x${string}`]
    // })

    const poolid = parseInt(param as string)

    // console.log(poolid)

        const {data: allowance} = useReadContract({
            address: lemonETHToken,
            abi: lemonEthTokenAbi,
            functionName: 'allowance',
            args: [address as `0x${string}`, lemonVault]
        })

    // console.log(Number(allowance))

    const [countdown, setCountdown] = useState<{ days: number, hours: number, minutes: number }>({
        days: 0,
        hours: 0,
        minutes: 0
      })

    const [openModal2, setOpenModal2] = useState(false);

      useEffect(() => {
        const calculateCountdown = () => {
          const now = new Date();
          const sunday = new Date(now);
          sunday.setUTCHours(0, 0, 0, 0);
          sunday.setUTCDate(now.getUTCDate() + (7 - now.getUTCDay()));
    
          const difference = sunday.getTime() - now.getTime();
    
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    
          setCountdown({ days, hours, minutes });
        };
    
        const interval = setInterval(calculateCountdown, 1000);
    
        calculateCountdown(); // Initial calculation
    
        return () => clearInterval(interval);
      }, []);

      const [inputValue, setInputValue] = useState<string>('');

      const [buttonstate, setButtonstate] = useState(false)
        const expectedAMT = 1.01 * pool.amount
        const accountAMT = Number(amount?.value)/10**18
        // console.log(accountAMT)
        // console.log(expectedAMT)
        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(event.target.value);

            const AMT = parseFloat(event.target.value)

            if( AMT !== expectedAMT || accountAMT < expectedAMT){
                setButtonstate(true)
            } else{
                setButtonstate(false)
            }
        };

        const { data: hash1, writeContract: writeContract1, isPending: isPending1, error: error1 } = useWriteContract()
        
        async function vaultstaking(e: React.FormEvent<HTMLFormElement>) { 
            e.preventDefault()
                const formData = new FormData(e.target as HTMLFormElement) 
                let eth = formData.get("value") as string
                if (Number(allowance)/10**18 < expectedAMT){
                    writeContract1({ 
                        address: lemonETHToken, 
                        abi: lemonEthTokenAbi, 
                        functionName: 'approve',
                        args: [lemonVault as `0x${string}`, parseEther(eth)]
                    },{onSuccess() {
                        writeContract1({ 
                            address: lemonVault, 
                            abi: lemonVaultAbi, 
                            functionName: 'joinPool',
                            args: [BigInt(poolid)]
                        }) 
                    },})
                } else {
                    writeContract1({ 
                        address: lemonVault, 
                        abi: lemonVaultAbi, 
                        functionName: 'joinPool',
                        args: [BigInt(poolid)]
                    }) 
                }
        }

        const { isLoading: isConfirming1, isSuccess: isConfirmed1 } = 
            useWaitForTransactionReceipt({ 
            hash: hash1,
        }) 

        const {data: myentryIds} = useReadContract({
            address: lemonVault,
            abi: lemonVaultAbi,
            functionName: 'getEntryIdsForAddress',
            args: [BigInt(poolid), address as `0x${string}`]
        })

        const {data: poolDetails} = useReadContract({
            address: lemonVault,
            abi: lemonVaultAbi,
            functionName: 'pools',
            args: [BigInt(poolid)]
        })

        
        const {data: myentries } = useReadContracts({
            contracts: myentryIds?.map((item)=>({
                address: lemonVault as `0x${string}`,
                abi: lemonVaultAbi,
                functionName: 'getEntry',
                args: [BigInt(poolid), item]
            }))
        })

        // console.log(myentryIds?.length)

        // console.log(myentries)

        const noOfPoolEntries = Number(poolDetails?.[4])
        function createArrayLessThan(num: number) {
            const result = [];
            for (let i = 0; i < num; i++) {
              result.push(i);
            }
            return result;
          }
        const numbersArray = createArrayLessThan(noOfPoolEntries)

        const {data: poolentries } = useReadContracts({
            contracts: numbersArray?.map((item)=>({
                address: lemonVault as `0x${string}`,
                abi: lemonVaultAbi,
                functionName: 'getEntry',
                args: [BigInt(poolid), BigInt(item +1)]
            }))
        })


        // for (let index = 0; index < noOfPoolEntries; index++) {
        //     const {data: poolentry} = useReadContract({
        //         address: lemonVault,
        //         abi: lemonVaultAbi,
        //         functionName: 'getEntry',
        //         args: [BigInt(poolid), BigInt(index + 1)]
        //     })
        //     poolentries.push(poolentry)
        // }

        // console.log(poolentries)
        // console.log(myentryIds)
        // console.log(Number(mypool?.[4]))

        function timestampToDate(timestamped:any){
            let timestamp = Number(timestamped)*1000
            const date = new Date(timestamp);

            // Convert the date to a string representing the local time
            const localTimeString = date.toLocaleString();
            return localTimeString
        }
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
                                    <p className='text-3xl font-bold'>{formatNumber(countdown.days)}:</p>
                                    <p className='text-[9px] font-semibold ms-3'>Days</p>
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <p className='text-3xl font-bold'>{formatNumber(countdown.hours)}:</p>
                                    <p className='text-[9px] font-semibold ms-1'>Hours</p>
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <p className='text-3xl font-bold'>{formatNumber(countdown.minutes)}</p>
                                    <p className='text-[9px] font-semibold ms-1'>Minutes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 flex justify-center gap-x-5 lg:gap-x-5 gap-y-5 flex-wrap items-center'>
                        <div className='border border-[#F1DD2B] rounded-xl p-8 w-[11rem] lg:w-[14rem]'>
                            <p className='text-[#556400] dark:text-[#AAC900] text-sm font-semibold'>APY:</p>
                            <p className='font-bold text-2xl'>{pool.APR}%</p>
                        </div>
                        <div className='border border-[#F1DD2B] rounded-xl p-8 w-[11rem] lg:w-[14rem] text-nowrap'>
                            <p className='text-[#556400] dark:text-[#AAC900] text-sm font-semibold'>Lockup Time:</p>
                            <p className='font-bold text-2xl'>{pool.time} Months</p>
                        </div>
                        <div className='border border-[#F1DD2B] rounded-xl py-8 px-6 w-[11rem] lg:w-[14rem] text-nowrap'>
                            <p className='text-[#556400] dark:text-[#AAC900] text-sm font-semibold'>Entry Amount:</p>
                            <p className='font-bold text-2xl'>{pool.amount} $lmETH</p>
                        </div>
                        <div className='border border-[#F1DD2B] rounded-xl p-8 w-[11rem] lg:w-[14rem] text-nowrap'>
                            <p className='text-[#556400] dark:text-[#AAC900] text-sm font-semibold'>Total Value Locked:</p>
                            <p className='font-bold text-2xl'>30 $lmETH</p>
                        </div>
                    </div>
                    <div>
                        {myentryIds?.length as number > 0  ? (
                            <div className='mt-10 border border-[#F1DD2B] rounded-xl p-8'>
                            <div className='flex justify-between items-center'>
                                <p className='text-[#556400] dark:text-[#AAC900] font-bold text-xl'>My Entries</p>  
                                <button className="px-5 py-1 text-sm text-white bg-[#8EA700] rounded-full border-2 border-[#8EA700] focus:ring-4 focus:outline-none focus:ring-[#8EA700] dark:bg-[#8EA700] hover:bg-[#8EA700]/[0.9] dark:hover:bg-[#8EA700]/[0.9]" onClick={() => setOpenModal2(true)}>Enter</button>                          
                            </div>        
                            <div className='overflow-auto'>
                            <table className='w-full my-5 table-auto'>
                                <thead className='bg-[#F5F7E9] dark:bg-[#8EA7004D]'>
                                    <tr className='text-center'>
                                        <th className='text-[#556400] dark:text-[#AAC900] py-2 text-nowrap px-3'>Time</th>
                                        <th className='text-[#556400] dark:text-[#AAC900] text-nowrap px-3'>Entry ID</th>
                                        <th className='text-[#556400] dark:text-[#AAC900] text-nowrap px-3'>Yield Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myentries?.map((value:any)=>(
                                    <tr className='text-center'>
                                        <td className='py-3 px-3 text-nowrap'>{timestampToDate(value?.result?.entryTime)}</td>
                                        <td className='py-2 px-3'>{Number(value?.result?.entryId)}</td>
                                        <td className='py-2 px-3'>Awaiting</td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>  
                            </div>              
                        </div>
                        ) : (
                            <div className='mt-10 border border-[#F1DD2B] rounded-xl bg-[#F1DD2B26] flex justify-between items-center p-10 gap-5'>
                            <div>
                                <p className='text-[#556400] dark:text-[#AAC900] font-bold pb-2 text-lg'>Enter Pool</p>
                                <p className='text-sm font-semibold'>Lock {pool.amount} $lmETH for {pool.time} months to win {pool.APR}% yields.</p>
                            </div>
                            <div>
                            <button className="px-5 py-1 text-sm text-white bg-[#8EA700] rounded-full border-2 border-[#8EA700] focus:ring-4 focus:outline-none focus:ring-[#8EA700] dark:bg-[#8EA700] hover:bg-[#8EA700]/[0.9] dark:hover:bg-[#8EA700]/[0.9] w-full" onClick={() => setOpenModal2(true)}>Enter</button>
                            </div>
                        </div>

                            
                        )
                    }
                    </div>
                    
                    <div className='mt-10 border border-[#F1DD2B] rounded-xl p-8'>
                        <div className='flex justify-between items-center'>
                            <p className='text-[#556400] dark:text-[#AAC900] font-bold text-xl'>Pool Entries</p>  
                            <p>No. of Entries: <span className='text-[#556400] dark:text-[#AAC900] font-bold text-xl'>{noOfPoolEntries}</span></p>                          
                        </div>        
                        <div className={`overflow-auto ${noOfPoolEntries ? 'block': 'hidden'}`}>
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
                                {poolentries?.map((value: any) =>(
                                    <tr className='text-center'>
                                        <td className='py-3 px-3 text-nowrap'>{timestampToDate(value?.result?.entryTime)}</td>
                                        <td className='py-2 px-3'>{Number(value?.result?.entryId)}</td>
                                        <td className='py-2 px-3'>{value?.result.entrant}</td>
                                        <td className='py-2 px-3'>Awaiting</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>  
                        </div>              
                    </div>
                </div>
            </div>

            <Modal show={openModal2} theme={customTheme} size="md" onClose={() => setOpenModal2(false)} popup>
                <Modal.Header className='px-4 py-6 border-b border-[#8EA700]'>
                    <p className='font-bold text-2xl'>Stake</p>
                </Modal.Header>
                <Modal.Body className="px-8 py-4">
                <div className="text-center">
                <div className="flex flex-row justify-between items-center">
                    <p className="text-xs">Stake Amount</p>
                    <div className="flex flex-row justify-center items-center gap-2">
                        <p className="text-xs">In Wallet: {amount?.formatted.slice(0,5)} lmETH</p>
                    </div>
                </div>
                <form onSubmit={vaultstaking}>
                    <div className="relative mb-2 mt-6">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <img src={lemonicon2} alt=""/>
                        </div>
                        <input id="input-group-1" className="bg-transparent border border-[#D4E480] text-gray-900 text-sm rounded-lg focus:ring-[#D4E480] focus:border-[#D4E480] block w-full ps-14 p-2.5  dark:bg-transparent dark:border-[#D4E480] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#D4E480] dark:focus:border-[#D4E480]" name="value" required type="text" value={inputValue} onChange={handleInputChange}/>
                        <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none z-50">
                            <p className="">$lmETH</p>
                        </div>
                    </div>
                    <div className="flex justify-end bg-[#F8FFD2] rounded-full py-1 px-5 my-4">
                    <p className="text-[#637502] text-[14px]">Tax fee: 0 $ETH</p>
                    </div>
                    <div className="flex justify-start items-center bg-[#EEF4CC] rounded-full py-2 px-4 mt-3 mb-8 gap-2">
                        <span><img src={information} alt=""/></span>
                        <p className="text-[#637502] text-[14px] w-[95%]">1% entry fee is charged on the entry amount</p>
                    </div>
                    <div className="w-full flex justify-center gap-3 items-center">
                        <button className="px-4 py-2 text-sm text-white bg-[#8EA700] rounded-full border-2 border-[#8EA700] focus:ring-4 focus:outline-none focus:ring-[#8EA700] dark:bg-[#8EA700] hover:bg-[#8EA700]/[0.9] dark:hover:bg-[#8EA700]/[0.9] w-full" type="submit" disabled={buttonstate}>{buttonstate? `Amount must be ${expectedAMT}`: 'Stake'}</button>
                    </div>
                </form>               
                </div>
                </Modal.Body>
            </Modal>
            {isPending1 && 
                    <ModalComponent
                         icon={<Loading/>} 
                         message={
                            <p className="text-xl font-bold text-gray-700 dark:text-white">Please Approve the transaction in your wallet</p>
                         } 
                    />} 

                    {isConfirming1 && 
                    <ModalComponent 
                        icon= {<Loading/>} 
                        message= {
                            <p className="text-xl font-bold text-gray-700 dark:text-white">Your Transaction is being confirmed...</p>
                        }/>
                    } 

                    {isConfirmed1 && 
                    <ModalComponent 
                        icon={<>
                            <div className="flex justify-center items-center w-full">
                                <img src={tickcircle} alt="" />
                            </div>
                        </>} 
                        message={<>
                            <p className="pb-4 text-2xl font-bold text-gray-700 dark:text-white">{Number(allowance)/10**18 < expectedAMT ? 'Approval Successful': 'Stake Successful'}</p>
                            <div className="w-full">
                                <a href={`https://sepolia-blockscout.lisk.com/tx/${hash1}`} target="_blank" rel="noopener noreferrer" className="bg-[#8EA700] border rounded-full border-[#8EA700] text-white text-sm px-8 py-2 block">View Transaction Lisk Explorer</a>
                            </div>
                        </>}/>
                    } 

                    {error1 && 
                    <ModalComponent 
                        icon= {<>
                            <div className="flex justify-center items-center w-full h-20">
                                <ErrorOutlineIcon className="text-red-800" sx={{width: 80, height: 80}}/>
                            </div>
                        </>} 
                        message={<>
                            <p className="pb-4 text-2xl font-bold text-gray-700 dark:text-white">{(error1 as BaseError).shortMessage ||error1.message}</p>
                        </>}/>
                     }       
        </>
    )
}

export default Pool