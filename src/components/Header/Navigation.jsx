
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const Navigation = () => {
    const [toggle, setToggle] = useState(false);

    let ontoggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav className="h-[72px] flex align-center relative">
            <div className="container flex flex-row items-center justify-between mobile-container">
            <div className={`${toggle ? 'ml-[300px]' : 'ml-0'} transition-all duration-500`}>
                    <img src="/images/brand_logo.png" alt="logo"/>
                </div>
                <div className="md:hidden ">
                    <button onClick={ontoggle}>
                        <FontAwesomeIcon icon={faBars} className='absolute z-50 pr-5 text-2xl top-4 left-4 text-custom-gray' />
                    </button>
                    {toggle && (
                        <div className={`absolute top-0 left-0 w-[300px] h-screen bg-gray-400 text-white flex flex-col transition-transform duration-500 ease-in-out font-semibold pt-10 pl-5 gap-4 items-start justify-center ${toggle ? 'translate-x-0 opacity-1' : '-translate-x-full opacity-0'}`}>
                            <ul className="">
                                <li>Menu</li>
                                <li>Location</li>
                                <li>About</li>
                            </ul>
                            <div>
                                <button className="px-4 py-[6px] font-semibold text-white bg-custom-red">
                                    Login
                                </button>
                            </div>

                        </div>
                    )}
                </div>
                <ul className="hidden space-x-4 text-sm font-semibold md:flex font-poppins text-custom-gray ">
                    <li>Menu</li>
                    <li>Location</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='hidden md:block'>
                    <button className="px-4 py-[6px] font-semibold text-white bg-custom-red">Login</button>
                </div>

            </div>
        </nav>
    )
}
export default Navigation;
