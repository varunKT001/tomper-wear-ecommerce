import React from 'react';
import { useFilterContext } from '../../context/filter_context';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import Wrapper from './styles';

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    sort,
    setGridView,
    setListView,
    updateSort,
  } = useFilterContext();

  return (
    <Wrapper>
      <div className='btn-container'>
        <button
          type='button'
          className={`${grid_view ? 'active' : null}`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type='button'
          className={`${!grid_view ? 'active' : null}`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor='sort'>sort by</label>
        <select
          name='sort'
          id='sort'
          className='sort-input'
          value={sort}
          onChange={updateSort}
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (A-Z)</option>
          <option value='name-z'>name (Z-A)</option>
        </select>
      </form>
    </Wrapper>
  );
};

export default Sort;
