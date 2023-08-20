function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/heart.svg" alt=""/>
            </div>
            <img width={133} height={112} src="/img/1.jpg" alt=""/>
            <p>Мужские кроссовки Nike</p>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span> Цена: </span>
                    <b>12 999 руб.</b>
                </div>
            </div>
            <button>
                <img width={11} height={11} src="/plus.svg" alt=""/>
            </button>
        </div>
    )

}
export default Card;
