function Drawer() {
    return(
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина
                    <img className="cu-p" src="/btn-remove.svg" alt=""/>
                </h2>
                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{backgroundImage: 'url(/img/1.jpg)'}}
                             className="cartItemImg">
                        </div>

                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские кроссовки Nike Air Max</p>
                            <b>12 999 руб</b>
                        </div>
                        <img className="removeBtn" src="/btn-remove.svg" alt=""/>
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{backgroundImage: 'url(/img/1.jpg)'}}
                             className="cartItemImg">
                        </div>

                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские кроссовки Nike Air Max</p>
                            <b>12 999 руб</b>
                        </div>
                        <img className="removeBtn" src="/btn-remove.svg" alt=""/>
                    </div>
                </div>

                <div className="items">
                    <ul className="cartTotalBlock">
                        <li className="d-flex">
                            <span>Итого</span>
                            <div></div>
                            <b>21 498 руб.</b></li>
                        <li className="d-flex">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб</b></li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt=""/></button>
                </div>
            </div>
        </div>
    )
}
export default Drawer;