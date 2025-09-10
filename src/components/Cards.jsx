export default function Cards ({ flippedCards, toggleCard, cards }) {

  return (
    <div className="cards-container">
      { cards.map(card => (
        <div
          key={ card.id }
          className={ flippedCards[card.id] ? "card is-flipped" : "card" }
          onClick={ () => toggleCard(card.id) }
        >
          <div className="card__inner">
            <div className="card__face card__front">
              <img src={ card.image } alt={ card.title } className="img-project" />
              <h3 className="card__title">{ card.title }</h3>
            </div>
            <div className="card__face card__back">
              <div className="card__content">
                <h3>{ card.title }</h3>
                <p>{ card.description }</p>
              </div>
            </div>
          </div>
        </div>
      )) }
    </div>
  );
}