"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import SearchManufacturer from './SearchManufacturer';
import { manufacturers } from '../constants/index';
import { updateSearchParams } from '@/utils';

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

    const [manufacturer, setManuFacturer] = useState("");
    const [model, setModel] = useState("");

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();

        if(manufacturer.trim() === "" && model.trim() === "") {
            return alert("Please provide some input");
        }

        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
    };

    const updateSearchParams = (model: string, manufacturer: string) => {

        const searchParams = new URLSearchParams(window.location.search);

        if(model) {
            searchParams.set("model", model);
        } else {
            searchParams.delete("model");
        }

        if(manufacturer) {
            searchParams.set("manufacturer", manufacturer);
        } else {
            searchParams.delete("manufacturer");
        }

        const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPathName);
    };

    return (
        <>
            <form
                className='searchbar'
                onSubmit={handleSearch}
            >
                <div className='searchbar__item'>
                    <SearchManufacturer
                        manufacturer={manufacturer}
                        setManufacturer={setManuFacturer}
                    />
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
                        onChange={(e) => setModel(e.target.value)}
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
