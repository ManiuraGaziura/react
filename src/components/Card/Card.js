import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = props => {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(toggleCardFavorite(props.id));
  };

  return (
    <li className={styles.card}>
      <span>{props.title}</span>
      <button
        type="button"
        className={`${styles.favoriteButton} ${props.isFavorite ? styles.isFavorite : ''}`}
        onClick={handleFavorite}
        aria-label={props.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        <span className="fa fa-star-o" aria-hidden="true" />
      </button>
    </li>
  );
};

export default Card;