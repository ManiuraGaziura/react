import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addList } from '../../redux/store';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span>Title</span>
        <TextInput value={title} onChange={event => setTitle(event.target.value)} />
      </label>
      <label className={styles.field}>
        <span>Description</span>
        <TextInput
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </label>
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;
