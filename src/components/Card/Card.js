import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFavorite } from '../../redux/cardsRedux';

const Card = props => {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(toggleCardFavorite(props.id));
  };

  const handleRemove = () => {
    dispatch(removeCard(props.id));
  };

  return (
    <li className={styles.card}>
      <span>{props.title}</span>
      <div className={styles.actions}>
        <button
          type="button"
          className={`${styles.actionButton} ${props.isFavorite ? styles.isFavorite : ''}`}
          onClick={handleFavorite}
          aria-label={props.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <span className="fa fa-star-o" aria-hidden="true" />
        </button>
        <button
          type="button"
          className={styles.actionButton}
          onClick={handleRemove}
          aria-label="Remove card"
        >
          <span className="fa fa-trash" aria-hidden="true" />
        </button>
      </div>
    </li>
  );
};

export default Card;