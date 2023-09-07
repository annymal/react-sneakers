function Header(props) {

    return(
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center headerLeft">
                <img width={40} height={40} src="/logo.png" alt=""/>
                <div className="headerInfo">
                    <h3>React Sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li onClick={props.onClickCard} className="mr-30 cu-p">
                    <img width={18} height={18} src="/cart.svg" alt=""/>
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img width={18} height={18} src="/user.svg" alt=""/>

                </li>
            </ul>
        </header>
    )
}
export default Header;