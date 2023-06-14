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

    const [query, setQuery] = useState("");

    const filteredManufacturers = query === ""
        ? manufacturers
        : manufacturers.filter((item) =>
            item
                .toLowerCase()
                .replace(/\s+/g, "")
                .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

    return (
        <>
            <div className='search-manufacturer'>
                <Combobox
                    value={manufacturer}
                    onChange={setManufacturer}
                >
                    <div className='relative w-full'>
                        <Combobox.Button
                            className="absolute top-[14px]"
                        >
                            <Image
                                src='/car-logo.svg'
                                width={20}
                                height={20}
                                className='ml-4'
                                alt='car logo'
                            />
                        </Combobox.Button>

                        <Combobox.Input
                            className="search-manufacturer__input"
                            displayValue={(item: string) => item}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder='Volkswagen...'
                        />

                        <Transition
                            as={Fragment}
                            leave='transition ease-in duration-100'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                            afterLeave={() => setQuery("")}
                        >
                            <Combobox.Options
                                className="absolute mt-1 max-h-60 w-full overflow-auto
                                round-md bg-white py-1 text-base shadow-lg
                                ring-1-black ring-opacity-5
                                focus:outline-none sm:text-sm"
                                static
                            >

                            </Combobox.Options>
                        </Transition>
                    </div>
                </Combobox>
            </div>
        </>
    );
};

export default SearchManufacturer;
