import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { getSearchString, updateSearchString } from '../../redux/store';

const SearchForm = () => {
  const currentSearchString = useSelector(getSearchString);
  const [searchString, setSearchString] = useState(currentSearchString);
  const dispatch = useDispatch();

  useEffect(() => {
    setSearchString(currentSearchString);
  }, [currentSearchString]);

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