import { Link, NavLink } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const NavBar = () => {
    return (
    <>
        <nav className="fixed top-0 z-50 w-full bg-transparent h-16 backdrop-blur-lg dark:backdrop-blur-lg">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
            
            <div className="flex items-center justify-start rtl:justify-end">
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" data-drawer-backdrop="false"aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-[#5E6E03]/[0.1] focus:ring-transparent dark:text-gray-400 dark:hover:bg-[#5E6E03]/[0.4] transition-all">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="#8EA700" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <div className="px-5">
                <Link to="/" className="flex items-center lg:space-x-3 rtl:space-x-reverse">
                <img src="/src/assets/Lemon H-Lockup Colored.png" className="h-10" alt="Logo"/>
                </Link>
            </div>
            </div>  
            <div className="flex items-center justify-center sm:gap-10 px-3">
            <div>
                <input data-hs-theme-switch  type="checkbox" className="relative accent-[#5E6E03]/[0.3] w-[3.25rem] h-7 bg-[#5E6E03]/[0.3] dark:checked:bg-[#5E6E03] checked:bg-none  border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-[5E6E034D] focus:ring-[5E6E034D] focus:outline-none appearance-none

                before:inline-block before:size-6 before:bg-[#FFFFCD] checked:before:bg-[#FFFFCD] before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200

                after:absolute after:left-[0.35rem] after:top-[calc(50%-0.41rem)] after:w-[0.9rem] after:h-[0.9rem] after:bg-no-repeat after:bg-[right_center] after:bg-[length:.8125em_.8125em] after:bg-[url('/src/assets/moon.svg')] checked:after:bg-[url('/src/assets/sun.svg')] after:transform after:transition-all after:ease-in-out after:duration-200 after:opacity-70 checked:after:left-[1.8rem] checked:after:end-auto" id="darkSwitch"/>
            </div>
            <div className='hidden sm:block'>
                <ConnectButton/>
            </div>
        </div>      
        </div>
        </div>
    </nav>

    <aside id="logo-sidebar" className="fixed top-0 pt-20 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 backdrop-blur-3xl dark:backdrop-blur-3xl sm:backdrop-blur-none dark:sm:backdrop-blur-none" aria-label="Sidebar">
     <div className="h-full px-5 overflow-y-auto flex flex-col justify-evenly">
         
        <ul className="space-y-2 flex flex-col justify-center w-full font-semibold">
            <div className="sm:hidden mb-5 flex justify-center">
               <ConnectButton/>
            </div>
           <li>
              <NavLink to="/" className="flex items-center p-2 text-[#8A8A8A] dark:text-[#8A8A8A] hover:text-[#8EA700] rounded dark:hover:text-[#8EA700] hover:bg-[#fafaae] hover:dark:bg-[#FFFFCD26] hover:border-r-4 hover:border-[#8EA700] py-3">
                 <span className="ms-3 text-sm">Dashboard</span>
              </NavLink>
           </li>
           <li>
              <NavLink to="/staking" className="flex items-center p-2 text-[#8A8A8A] dark:text-[#8A8A8A] hover:text-[#8EA700] rounded dark:hover:text-[#8EA700] hover:bg-[#fafaae] hover:dark:bg-[#FFFFCD26] hover:border-r-4 hover:border-[#8EA700] py-3">
                 <span className="ms-3 text-sm">Liquid Staking</span>
              </NavLink>
           </li>
           <li>
              <NavLink to="/vault" className="flex items-center p-2 text-[#8A8A8A] dark:text-[#8A8A8A] hover:text-[#8EA700] rounded dark:hover:text-[#8EA700] hover:bg-[#fafaae] hover:dark:bg-[#FFFFCD26] hover:border-r-4 hover:border-[#8EA700] py-3">
                 <span className="ms-3 text-sm">$LMN Vault</span>
              </NavLink>
           </li>
           <li>
              <a href="#" className="flex items-center p-2 text-[#8A8A8A4D] dark:text-[#8A8A8A4D] py-3 disabled:pointer-events-none">
                 <span className="ms-3 text-sm">Swap</span>
              </a>
           </li>
           <li>
              <a href="#" className="flex items-center p-2 text-[#8A8A8A4D] dark:text-[#8A8A8A4D] py-3 disabled:pointer-events-none">
                 <span className="ms-3 text-sm">Pool</span>
              </a>
           </li>
           <li>
              <a href="#" className="flex items-center p-2 text-[#8A8A8A4D] dark:text-[#8A8A8A4D] py-3 disabled:pointer-events-none">
                 <span className="ms-3 text-sm">Governance</span>
              </a>
           </li>
           <li>
              <a href="#" className="flex items-center p-2 text-[#8A8A8A4D] dark:text-[#8A8A8A4D] py-3 disabled:pointer-events-none">
                 <span className="ms-3 text-sm">LSD-Fi</span>
              </a>
           </li>
        </ul>
        <div className="px-6">
         <button className="bg-[#DBFF131A] border rounded-full border-[#AAC900] text-[#AAC900] text-xs px-6 py-3 w-full" disabled>AIRDROP</button>
        </div>
        <div className="flex flex-row justify-center px-8 text-xs">
         <a href="" className="px-3"><span ><img src="src/assets/X.png" alt=""/></span></a>
         <a href="" className="px-3"><span ><img src="src/assets/Medium.png" alt=""/></span></a>
         <a href="" className="px-3"><span ><img src="src/assets/Discord.png" alt=""/></span></a>
         <a href="" className="px-3"><span><img src="src/assets/Telegram.png" alt=""/></span></a>
     </div>
     </div>
  </aside>
    </>
    );
   };
   
export default NavBar;