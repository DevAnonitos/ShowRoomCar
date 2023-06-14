"use client";

import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react';

import { manufacturers } from '@/constants';
import { SearchManuFacturerProps } from '@/types';


const SearchManufacturer = (
    {
        manufacturer,
        setManufacturer
    }: SearchManuFacturerProps) => {
    return (
        <>
            <div className='search-manufacturer'>
                <Combobox
                    value={manufacturer}
                    onChange={setManufacturer}
                >
                    <div className='relative w-full'>
                        <Image
                            src='/car-logo.svg'
                            width={20}
                            height={20}
                            className='ml-4'
                            alt='car logo'
                        />
                    </div>
                </Combobox>
            </div>
        </>
    );
};

export default SearchManufacturer;
