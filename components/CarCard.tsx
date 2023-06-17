"use client";

import React, { useState } from 'react';
import Image from 'next/image';

import { calculateCarRent  } from '@/utils';
import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import CarDetails from './CarDetails';

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {

    const {
        city_mpg,
        year,
        make,
        model,
        transmission,
        drive
    } = car;

    return (
        <>
            <div className='car-card group'>
                <div className='car-card__content'>
                    <h2 className='car-card__content-title'>
                        {make} {model}
                    </h2>
                </div>
            </div>
        </>
    );
};

export default CarCard;
