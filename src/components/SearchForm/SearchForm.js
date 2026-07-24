import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(updateSearchString(searchString));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        value={searchString}
        onChange={event => setSearchString(event.target.value)}
        placeholder="Search..."
      />
      <Button>
        <span className="fa fa-search" aria-hidden="true" />
        <span className={styles.visuallyHidden}>Search</span>
      </Button>
    </form>
  );
};

export default SearchForm;