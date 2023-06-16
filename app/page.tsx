import React from 'react';
import Image from 'next/image';
import { HomeProps } from '@/types';
import { fuels, yearsOfProduction } from '@/constants';
import { Hero, SearchBar, CarCard, ShowMore, CustomFilter } from '@/components';

export default function Home({ searchParams }: HomeProps) {
  return (
    <main className='overflow-hidden'>
      <Hero />

      <div
        className='mt-12 padding-x padding-y max-width'
        id='discover'
      >
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car Catalogue
          </h1>
          <p>
            Explore out cars you might like
          </p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filters-container'>
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
      </div>
    </main>
  );
};
