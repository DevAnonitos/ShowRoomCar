"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import SearchManufacturer from './SearchManufacturer';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
    return (
        <>
            <button
                type='submit'
                className={`-ml-3 z-10 ${otherClasses}`}
            >
                <Image
                    src={"/magnifying-glass.svg"}
                    alt={"magnifying glass"}
                    width={40}
                    height={40}
                    className='object-contain'
                />
            </button>
        </>
    );
};

const SearchBar = () => {
    return (
        <>
            <form
                className='searchbar'
                onSubmit={() => {}}
            >
                <div className='searchbar__item'>
                    <SearchManufacturer />
                    <SearchButton
                        otherClasses='sm:hidden'
                    />
                </div>
                <div className='searchbar_item'>
                    <Image
                        src="/model-icon.png"
                        width={25}
                        height={25}
                        className='absolute w-[20px] h-[20px] ml-4'
                        alt='CarModel'
                    />
                    <input
                        type="text"
                        name='model'
                        value="model"
                        onChange={(e) => {}}
                        placeholder='Tiguan...'
                        className='searchbar__input'
                    />
                    <SearchButton otherClasses='sm:hidden' />
                </div>
                <SearchButton otherClasses='max-sm:hidden' />
            </form>
        </>
    );
};

export default SearchBar;
