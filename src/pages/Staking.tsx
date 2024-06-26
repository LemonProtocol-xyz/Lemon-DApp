import { useAccount, useBalance, useWriteContract, useWaitForTransactionReceipt, type BaseError } from "wagmi";
import { liquidStakeabi } from "../abi/liquidStake";
import { liquidStaking } from "../contracts";
import { parseEther } from "viem";
import { ModalComponent } from "../components/modal";
import { Loading } from "../components/loading";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useRef } from 'react';
import lemonicon2 from '../assets/lemon icon 2.png'
import information from '../assets/information.png'
import tickcircle from '../assets/tick-circle.png'

const Staking = () => {
    //Get connect account details
    const {address} = useAccount()

    //Get ETH balance of connected account
    const {data : amount} = useBalance({
        address: address,
    })

    //Write to Stake Contract
    const { data: hash1, writeContract: writeContract1, isPending: isPending1, error: error1 } = useWriteContract()
    // const { data: hash2, writeContract: writeContract2, isPending: isPending2, error: erro2 } = useWriteContract()

    async function StakeAndMint(e: React.FormEvent<HTMLFormElement>) { 
        e.preventDefault() 
        const formData = new FormData(e.target as HTMLFormElement) 
        let eth = formData.get("value") as string
        writeContract1({ 
            address: liquidStaking, 
            abi: liquidStakeabi, 
            functionName: 'stake',
            args: [],
            value: parseEther(eth)
        }) 
    } 

      //Hook for confirming transaction
      const { isLoading: isConfirming, isSuccess: isConfirmed } = 
        useWaitForTransactionReceipt({ 
        hash: hash1, 
        }) 

        const inputRef = useRef<HTMLInputElement>(null);

        function handleClick() {
            if (inputRef.current) {
                if (amount){
                    inputRef.current.value = amount.formatted.slice(0,5);
                }
            }
        }

        
    return (
    <>
        <div className="p-4 sm:pl-72 pt-20 min-h-[100vh] backdrop-blur-2xl dark:backdrop-blur-2xl backdrop-brightness-[1.3] dark:backdrop-brightness-[0.2] bg-white/[0.5] dark:bg-[#2A2A2A]/[0.5]" >  
        <div className="pb-10 lg:px-10">
            <p className="text-4xl font-bold pt-10 md:pt-0">Stake and mint</p>
            
            
            <div className="border border-[#F1DD2B] rounded-2xl max-w-md mt-10">
                <div className="flex flex-row justify-start items-center px-8  border-b border-[#F1DD2B] py-3 gap-3">
                    <p className="py-2 font-[500]">Mint</p>
                </div>
                <div className="px-8 pt-4 pb-8">
                    <div className="flex flex-row justify-between items-center">
                    <p className="text-xs">Stake Amount</p>
                    <div className="flex flex-row justify-center items-center gap-2">
                        <p className="text-xs">In Wallet: {amount?.formatted.slice(0,5)} ETH</p>
                        <button className="border rounded-full border-[#AAC900] text-[#AAC900] text-xs px-3 py-1" onClick={handleClick}>Max</button>
                    </div>
                    
                    </div>
                    <form onSubmit={StakeAndMint}>
                    <div className="relative mb-2 mt-6">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <img src={lemonicon2} alt=""/>
                        </div>
                        <input id="input-group-1" className="bg-transparent border border-[#D4E480] text-gray-900 text-sm rounded-lg focus:ring-[#D4E480] focus:border-[#D4E480] block w-full ps-14 p-2.5  dark:bg-transparent dark:border-[#D4E480] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#D4E480] dark:focus:border-[#D4E480]" name="value" required type="text" ref={inputRef} />
                        <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none z-50">
                            <p className="">$ETH</p>
                        </div>
                    </div>
                    <div className="flex justify-end bg-[#F8FFD2] rounded-full py-1 px-5 my-4">
                    <p className="text-[#637502] text-[14px]">Tax fee: 0 $ETH</p>
                    </div>
                    <div className="flex justify-start items-center bg-[#EEF4CC] rounded-full py-2 px-5 mt-3 mb-8 gap-2">
                        <span><img src={information} alt=""/></span>
                        <p className="text-[#637502] text-[14px]">Mint $lmETH at a 1:1 ratio of staked $ETH</p>
                    </div>
                    <div className="w-full flex justify-center gap-3 items-center">
                        <button className="px-4 py-2 text-sm text-white bg-[#8EA700] rounded-full border-2 border-[#8EA700] focus:ring-4 focus:outline-none focus:ring-[#8EA700] dark:bg-[#8EA700] hover:bg-[#8EA700]/[0.9] dark:hover:bg-[#8EA700]/[0.9] w-full" type="submit" disabled={isPending1}>{isPending1 ? 'Confirming...' : 'Stake and Mint'}</button>
                        <button className="px-4 py-2 text-sm text-[#8EA700] bg-transparent rounded-full border-2 border-[#8EA700] focus:ring  focus:outline-none focus:ring-[#8EA700] w-full">Unstake</button>
                    </div>
                    
                    {isPending1 && 
                    <ModalComponent
                         icon={<Loading/>} 
                         message={
                            <p className="text-xl font-bold text-gray-700 dark:text-white">Please Approve the transaction in your wallet</p>
                         } 
                    />} 

                    {isConfirming && 
                    <ModalComponent 
                        icon= {<Loading/>} 
                        message= {
                            <p className="text-xl font-bold text-gray-700 dark:text-white">Your Transaction is being confirmed...</p>
                        }/>
                    } 

                    {isConfirmed && 
                    <ModalComponent 
                        icon={<>
                            <div className="flex justify-center items-center w-full">
                                <img src={tickcircle} alt="" />
                            </div>
                        </>} 
                        message={<>
                            <p className="pb-4 text-2xl font-bold text-gray-700 dark:text-white">Mint Successful</p>
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
                            <p className="pb-4 text-2xl font-bold text-gray-700 dark:text-white">{(error1 as BaseError).shortMessage || error1.message}</p>
                        </>}/>
                     }                    
                    </form>
                </div>
            </div> 
        </div>   
        </div>
    </>
    );
   };
   
export default Staking;