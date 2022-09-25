import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/store';

import { nanoid } from 'nanoid';

import { SearchBox, Filter } from './SearchFilter.styled';

export const SearchFilter = () => {
  const idInputSearch = nanoid();
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <SearchBox>
      <label htmlFor={idInputSearch}>Find contacts by name</label>
      <Filter
        onChange={onFilterChange}
        id={idInputSearch}
        type="text"
        name="searchValue"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </SearchBox>
  );
};
