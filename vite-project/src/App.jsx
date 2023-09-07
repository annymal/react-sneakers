import './App.scss'
import Card from './components/Card/index.jsx'
import axios from "axios";
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";
import React from 'react';



function App() {
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        // fetch('https://64eeecf1219b3e2873c3a409.mockapi.io/items')
        //     .then(res => {
        //         return res.json();
        //     })
        //     .then(json => {
        //         setItems(json)
        //     });
        axios.get('https://64eeecf1219b3e2873c3a409.mockapi.io/items'). then((res) => {
            setItems(res.data);
        });
        axios.get('https://64eeecf1219b3e2873c3a409.mockapi.io/cart'). then((res) => {
            setCartItems(res.data);
        });
    }, [])

    const onAddToCart = (obj) => {
        axios.post('https://64eeecf1219b3e2873c3a409.mockapi.io/cart', obj)
        setCartItems((prev) => [...prev, obj]);
    };

    const onAddToFavorites = (obj) => {
        axios.post('https://64eeecf1219b3e2873c3a409.mockapi.io/favorites', obj);
        setCartItems((prev) => [...prev, obj])
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };
    const onRemoveItem= (id) => {
        axios.delete(`https://64eeecf1219b3e2873c3a409.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter(item => item.id !== id));
    }

  return (
              <div className="wrapper clear">
                  {cartOpened && <Drawer items = {cartItems} onClose={() => setCartOpened(false)} />}
                  <Header onClickCard = {() => setCartOpened(true)} />
                  <div className="content p-40">
                      <div className="d-flex align-center justify-between mb-40">
                          <h1>{searchValue ? `Поиск по запросу : "${searchValue}"` : "Все кроссовки"}</h1>
                          <div className="search-block d-flex">
                              <img src="/search.svg" alt="search"/>
                              {searchValue && <img onClick={() => setSearchValue('') } className="cu-p clear" src="/btn-remove.svg" alt="close"/>}
                              <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
                          </div>
                      </div>

                      <div className="d-flex flex-wrap">
                          {items
                              .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                              .map((item, index) => (
                              <Card
                                  key={index}
                                  title = {item.title}
                                  price = {item.price}
                                  imageUrl = {item.imageUrl}
                                  onFavorite = {() => console.log("Добавили в закладки")}
                                  onPlus = {(obj) => onAddToCart(obj)}
                              />
                              ))
                          }

                      </div>
                  </div>
              </div>

          );
      }

    export default App
