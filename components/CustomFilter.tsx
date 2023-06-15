"use client";

import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox, Transition } from '@headlessui/react';

import { CustomFilterProps } from '@/types';

const CustomFilter = ({ title, options }: CustomFilterProps) => {

    const router = useRouter();
    const [selected, setSelected] = useState(options && options.length > 0 ? options[0] : null);

    const handleUpdateParams = (e: { title: string; value: string; }) => {

    };

    return (
        <>

        </>
    );
};

export default CustomFilter;
