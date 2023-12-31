import React from "react";
import styles from './card.module.scss';

function Card({ title, imageUrl, price, onFavorite, onPlus}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false)

    const onClickPlus = () => {
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded)
    };
    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? "liked.svg": "plus.svg"} alt=""/>
            </div>
            <img width={133} height={112} src={imageUrl} alt=""/>
           <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span> Цена: </span>
                    <b>{price}</b>
                </div>
            </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/btn-checked.svg" : "/plus.svg"} alt=""/>
        </div>
    )

}
export default Card;
