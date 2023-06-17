import React from 'react';
import Image from 'next/image';
import { HomeProps } from '@/types';
import { fetchCar } from '@/utils';
import { fuels, yearsOfProduction } from '@/constants';
import { Hero, SearchBar, CarCard, ShowMore, CustomFilter } from '@/components';

export default async function Home({ searchParams }: HomeProps) {

  const allCars = await fetchCar({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  console.log(allCars);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

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

          <div className='home__filter-container'>
            <CustomFilter
              title='fuel'
              options={fuels}
            />
            <CustomFilter
              title='year'
              options={yearsOfProduction}
            />
          </div>
        </div>

        {!isDataEmpty ? (
          <>
            <section>
              <div className='home__cars-wrapper'>
                {}
              </div>
            </section>
          </>
        ): (
          <>
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>
                Oops, no results
              </h2>
              <p>
                {allCars?.message}
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
};
