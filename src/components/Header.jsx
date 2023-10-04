import React, { memo } from 'react'
import { CATEGORIES } from '../data/data';

const Header = memo(
  ({
    search,
    handleSearch,
    filterCategory,
    changeCategory,
    getPriceValue,
    sortPriceValue,
  }) => {
    return (
      <div className="flex justify-between w-11/12 mx-auto py-6 px-4 border-b-[1px] border-black">
        <h2 className="text-3xl text-black font-bold">Products</h2>
        <div className="w-4/6 flex gap-3">
          <input
            type="text"
            name="search"
            value={search}
            onChange={handleSearch}
            className="py-1 px-4 text-gray-700 outline-none rounded-md w-full border border-black"
            placeholder="Search..."
          />
          <select
            onChange={filterCategory}
            value={changeCategory}
            className="ml-1 outline-none border border-black rounded-md py-1 px-2 text-black font-medium"
            name="category"
            id="category"
          >
            <option className="font-medium" value="all">
              All
            </option>
            {CATEGORIES.map((el, id) => {
              return (
                <option className="font-medium" key={id} value={el}>
                  {el}
                </option>
              );
            })}
          </select>

          <select
            name="sort"
            value={sortPriceValue}
            className="text-black font-medium border border-black px-1 py-2 outline-none rounded-md text-lg"
            onChange={getPriceValue}
          >
            <option value="increase" name="increase">
              Increase
            </option>
            <option value="decrease">Decrease</option>
          </select>
        </div>
      </div>
    );
  }
);

Header.displayName = "Header";

export default Header