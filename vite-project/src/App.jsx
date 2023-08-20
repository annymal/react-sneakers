import { useState } from 'react'
import './App.scss'
import Card from './components/Card.jsx'
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
              <div className="wrapper clear">
                  <Drawer />
                  <Header />
                  <div className="content p-40">
                      <div className="d-flex align-center justify-between mb-40">
                          <h1>Все кроссовки</h1>
                          <div className="search-block d-flex">
                              <img src="/search.svg" alt="search"/>
                              <input placeholder="Поиск..."/>
                          </div>
                      </div>

                      <div className="d-flex">
                          <Card />
                          <Card />
                          <Card />
                          <Card />

                      </div>
                  </div>
              </div>

          );
      }

    export default App
