import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Taillwind = () => {

    return (

        <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className='max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2 sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-6 dark:bg-gray-800 sm:dark:hover:bg-gray-700'>

                <img className="h-24 w-24 mx-auto rounded-full ring-4 ring-green-400 sm:mx-0 sm:flex-shrink-0 transform hover:scale-105 duration-500" src="https://images.unsplash.com/photo-1653338507739-96ee25affa75?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687" alt="" />

                <div className="text-center space-y-0.5 sm:text-left">
                    <div className=" space-y-2 sm:space-y-0">
                        <h1 className=' text-black font-semibold dark:text-white'>Lorem ipsum dolor sit.</h1>
                        <p className='text-gray-500 font-medium dark:text-gray-400'>Lorem ipsum dolor sit.</p>
                    </div>

                    <button className="btn-green btn">
                        visit now
                    </button>

                    <button className="btn-purpel btn ml-2 rounded-sm">
                        Website
                    </button>
                </div>

            </div>
        </div>

    );
};

export default Taillwind;