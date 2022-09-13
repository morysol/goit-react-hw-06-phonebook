import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import { SearchBox, Filter } from './SearchFilter.styled';

export const SearchFilter = props => {
  const idInputSearch = nanoid();
  return (
    <SearchBox>
      <label htmlFor={idInputSearch}>Find contacts by name</label>
      <Filter
        onChange={props.onFilterChange}
        id={idInputSearch}
        type="text"
        name="searchValue"
        value={props.filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </SearchBox>
  );
};

SearchFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
