"use client";

import React from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';

const Hero = () => {
    return (
        <>
            <div className='hero'>
                <div className='flex-1 pt-36 padding-x'>
                    <h1 className='hero__title'>
                        Find, book, rent a car—quick and super easy!
                    </h1>

                    <p
                        className='hero__subtitle border-2
                        p-4 flex items-center justify-center rounded-md
                        hover:bg-gray-100 transition-all
                        duration-200 ease-in-out'
                    >
                        Streamline your car rental experience
                        with our effortless booking
                        process.
                    </p>

                    <CustomButton

                    />
                </div>
                <div className='hero__image-container'>
                    <div className='hero__image'>
                        <Image
                            src="/hero.png"
                            alt='hero'
                            fill
                            className='object-contain'
                        />
                    </div>

                    <div className='hero__image-overlay' />
                </div>
            </div>
        </>
    );
};

export default Hero;
