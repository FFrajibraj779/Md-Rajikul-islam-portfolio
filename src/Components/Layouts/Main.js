import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';

const Main = () => {
    return (
        <div>
           <div className='lg:mx-8'>
           <Header />
           </div>
         <div className=''>
         <Outlet/>
         </div>
        </div>
    );
};

export default Main;