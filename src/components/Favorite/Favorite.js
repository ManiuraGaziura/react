import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { getFavoriteCards } from '../../redux/cardsRedux';

const Favorite = () => {
  const cards = useSelector(getFavoriteCards);

  return (
    <>
      <PageTitle>Favorite</PageTitle>
      <section className={styles.favorite}>
        {cards.length === 0 ? (
          <p className={styles.empty}>No cards...</p>
        ) : (
          <ul className={styles.cards}>
            {cards.map(card => (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                isFavorite={card.isFavorite}
              />
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Favorite;