import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';

const Navbar = () => {
    return (
        <>
            <header
                className='w-full absolute z-10'
            >
                <nav
                    className='max-w-[1440px] mx-auto flex justify-between
                    items-center sm:px-6 py-4 bg-transparent'
                >
                    <Link
                        href="/"
                        className='flex justify-center items-center'
                    >
                        <Image
                            src="/logo.svg"
                            alt='logo'
                            width={118}
                            height={18}
                            className='object-contain'
                        />
                    </Link>

                    <header className="text-gray-600 body-font header cursor-pointer">
                        <div
                            className="container mx-auto flex flex-wrap
                            p-5 flex-col md:flex-row items-center"
                        >

                            <nav
                                className="md:ml-auto flex flex-wrap
                                items-center text-base justify-center"
                            >
                                <a
                                    className="mr-5 hover:text-gray-900
                                    border-2 py-1 px-3 rounded-full border-gray-500"
                                >
                                    Home
                                </a>
                                <a
                                    className="mr-5 hover:text-gray-900
                                    border-2 py-1 px-3 rounded-full border-gray-500"
                                >
                                    About
                                </a>
                                <a
                                    className="mr-5 hover:text-gray-900
                                    border-2 py-1 px-3 rounded-full border-gray-500"
                                >
                                    Contact
                                </a>
                                <a
                                    className="mr-5 hover:text-gray-900 border-2
                                    py-1 px-3 rounded-full border-gray-500"
                                >
                                    View
                                </a>
                            </nav>
                            <button
                                className="inline-flex items-center
                                bg-gray-100 border-0 py-1 px-3
                                focus:outline-none hover:bg-gray-200
                                rounded-full text-base mt-4 md:mt-0">
                                    Visit
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-1"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </header>

                    <CustomButton
                        title='SignIn'
                        btnType='button'
                        containerStyles='text-primary-blue
                        rounded-full bg-white min-w-[130px]'
                    />
                </nav>
            </header>
        </>
    );
};

export default Navbar;
