import React from 'react';
import profile from '../Images/profile.png'

const Header = () => {
    return (
        <div className='w-[1280px] m-auto'>
           <nav className='flex justify-between items-center my-7'>
            <h1 className='text-2xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
           </nav>
           <div className='border'>
           </div> 
        </div>
    );
};

export default Header;