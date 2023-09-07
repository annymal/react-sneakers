import React from "react";

function Drawer({onClose, onRemove, items = []}) {
    return(
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина
                    <img onClick={onClose} className="cu-p" src="/btn-remove.svg" alt=""/>
                </h2>

                {items.length > 0 ? (

                <div className="items">
                    {items.map((obj) => (
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: `url(${obj.imageUrl})`}}
                             className="cartItemImg">
                        </div>

                        <div className="mr-20 flex">
                            <p className="mb-5">{obj.title}</p>
                            <b>{obj.price}</b>
                        </div>
                        <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/btn-remove.svg" alt="remove"/>
                    </div>
                        ))}
                </div>
                    ) : (

                    <div class="cartEmpty d-flex align-center justify-center flex-column flex">
                    <img class="mb-20" width="120px" height="120px" src="/img/" alt=""/>
                    <h2>Корзина пустая</h2>
                    <p class="opacity-6">Добавьте хотя бы одну пару кроссовок</p>
                    <button onClick={onClose} class="greenButton">
                    <img src="/img/arrow.svg" alt=""/>
                    Вернуться назад
                    </button>
                    </div>
                    )}

                    <div className="cartTotalBlock">
                    <ul>
                        <li className="d-flex">
                            <span>Итого</span>
                            <div></div>
                            <b>21 498 руб.</b></li>
                        <li className="d-flex">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб</b></li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt=""/>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Drawer;