import { useAccount, useBalance, useWriteContract, useWaitForTransactionReceipt, type BaseError, useReadContract } from "wagmi";
import { abi } from "../abi/liquidStake";
import { liquidStaking } from "../contracts";
import { parseEther } from "viem";
import { ModalComponent } from "../components/modal";
import { Loading } from "../components/loading";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useRef } from 'react';

const Staking = () => {
    //Get connect account details
    const {address} = useAccount()

    //Get ETH balance of connected account
    const {data : amount} = useBalance({
        address: address,
    })

    // Get Total amount of Staked ETH
    const { data: LiquidStakebalance } = useReadContract({
        abi,
        address: liquidStaking,
        functionName: 'totalStaked'
    })

    const stakeBalance = Number(LiquidStakebalance) / 10**18

    //Write to Stake Contract
    const { data: hash, writeContract, isPending, error } = useWriteContract()

    async function StakeAndMint(e: React.FormEvent<HTMLFormElement>) { 
        e.preventDefault() 
        const formData = new FormData(e.target as HTMLFormElement) 
        let eth = formData.get("value") as string
        writeContract({ 
          address: liquidStaking, 
          abi, 
          functionName: 'stake',
          args: [],
          value: parseEther(eth)
        }) 
      } 

      //Hook for confirming transaction
      const { isLoading: isConfirming, isSuccess: isConfirmed } = 
        useWaitForTransactionReceipt({ 
        hash, 
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
                    <img src="/src/assets/lemon icon.png" alt=""/>
                    <p className="py-2 font-[500]">Reward Type: $LMN</p>
                </div>
                <div className="px-8 pt-4 pb-8">
                    <p className="font-[500]">APR</p>
                    <p className="text-[#8EA700] text-3xl font-bold pb-6">15.6%</p>
                    <p className="font-[500]">Total Staked ETH</p>
                    <p className="text-[#8EA700] text-3xl font-bold">{stakeBalance} ETH</p>
                </div>
            </div> 
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
                            <img src="/src/assets/lemon icon 2.png" alt=""/>
                        </div>
                        <input id="input-group-1" className="bg-transparent border border-[#D4E480] text-gray-900 text-sm rounded-lg focus:ring-[#D4E480] focus:border-[#D4E480] block w-full ps-12 p-2.5  dark:bg-transparent dark:border-[#D4E480] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#D4E480] dark:focus:border-[#D4E480]" name="value" required type="text" ref={inputRef}/>
                        <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none z-50">
                            <p className="">ETH</p>
                        </div>
                    </div>
                    <div className="flex justify-end bg-[#F8FFD2] rounded-full py-1 px-5 my-4">
                    <p className="text-[#637502] text-[14px]">Tax fee: 0 $LMN</p>
                    </div>
                    <div className="flex justify-start bg-[#EEF4CC] rounded-full py-2 px-5 mt-3 mb-8 gap-2">
                    <span><img src="/src/assets/information.png" alt=""/></span>
                    <p className="text-[#637502] text-[14px]">Mint $lmLSK at a 1:1 ratio of staked $LSK</p>
                    </div>
                    <button className="px-4 py-2 text-sm text-white bg-[#8EA700] rounded-full border-2 border-[#8EA700] focus:ring-4 focus:outline-none focus:ring-[#8EA700] dark:bg-[#8EA700] hover:bg-[#8EA700]/[0.9] dark:hover:bg-[#8EA700]/[0.9] w-full" type="submit" disabled={isPending}>{isPending ? 'Confirming...' : 'Stake and Mint'}</button>
                    
                    {isPending && 
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
                                <img src="src/assets/tick-circle.png" alt="" />
                            </div>
                        </>} 
                        message={<>
                            <p className="pb-4 text-2xl font-bold text-gray-700 dark:text-white">Mint & Stake Successful</p>
                            <div className="w-full">
                                <a href={`https://sepolia-blockscout.lisk.com/tx/${hash}`} target="_blank" rel="noopener noreferrer" className="bg-[#8EA700] border rounded-full border-[#8EA700] text-white text-sm px-8 py-2 block">View Transaction Lisk Explorer</a>
                            </div>
                        </>}/>
                    } 

                    {error && 
                    <ModalComponent 
                        icon= {<>
                            <div className="flex justify-center items-center w-full h-20">
                                <ErrorOutlineIcon className="text-red-800" sx={{width: 80, height: 80}}/>
                            </div>
                        </>} 
                        message={<>
                            <p className="pb-4 text-2xl font-bold text-gray-700 dark:text-white">{(error as BaseError).shortMessage || error.message}</p>
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