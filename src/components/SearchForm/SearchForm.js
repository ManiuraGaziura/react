import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
  return (
    <form className={styles.searchForm} onSubmit={event => event.preventDefault()}>
      <TextInput placeholder="Search..." />
      <Button>
        <span className="fa fa-search" aria-hidden="true" />
        <span className={styles.visuallyHidden}>Search</span>
      </Button>
    </form>
  );
};

export default SearchForm;
