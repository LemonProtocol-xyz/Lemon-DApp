const Vault = () => {
    return (
    <>
        <div className="p-4 sm:pl-72 pt-20 min-h-[100vh] backdrop-blur-2xl dark:backdrop-blur-2xl backdrop-brightness-[1.3] dark:backdrop-brightness-[0.2] bg-white/[0.5] dark:bg-[#2A2A2A]/[0.5]" >  
        <div className="pb-10 lg:px-10">
            <p className="text-4xl font-bold pt-10 md:pt-0">Vault</p>
            <div className="border border-[#F1DD2B] rounded-2xl max-w-lg mt-10">
                <div className="flex flex-col justify-end items-end border-b border-[#F1DD2B] py-2 px-8">
                    <p className="font-[500] text-[14px]">Total Staked $LMN</p>
                    <p className="text-[#8EA700] text-2xl font-bold">156,088 $LMN</p>
                </div>
                <div className="py-8 px-8">
                    <div className="flex flex-col sm:flex-row justify-center gap-5">
                    <div className="border rounded-2xl border-[#d3e480] w-full p-4">
                        <p className="font-semibold pb-1">Your Total Staked</p>
                        <p className="text-[#8EA700] text-3xl font-bold">0</p>
                    </div>
                    <div className="border rounded-2xl border-[#d3e480] w-full p-4">
                        <p className="font-semibold pb-1">Your Total Staked</p>
                        <p className="text-[#8EA700] text-3xl font-bold">0</p>
                    </div>
                    </div>
                    <div className="border rounded-2xl border-[#d3e480] w-full p-4 mt-5">
                    <p className="font-semibold pb-1">Your Total Staked</p>
                    <p className="text-[#8EA700] text-3xl font-bold pb-5">0</p>
                    <button className="px-4 py-2 text-sm text-white bg-[#8EA700] rounded-full border-2 border-[#8EA700] focus:ring-4 focus:outline-none focus:ring-[#8EA700] dark:bg-[#8EA700] hover:bg-[#8EA700]/[0.9] dark:hover:bg-[#8EA700]/[0.9] w-full">Claim $LMN</button>
                    </div>
                </div>
            </div> 
        </div>   
        </div>
    </>
    );
   };
   
export default Vault;