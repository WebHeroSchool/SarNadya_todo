import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import './App.css';

const todoItem = 'Поработать';

const App = () => {
  const items = [
    {value: 'Поработать'},
    {value: 'Приготовить обед'},
    {value: 'Выполнить тренировку'}
  ];

  return (
    <div className="wrap">
      <h1 className="wrap__title">Важные дела:</h1>
      <InputItem/>
      <ItemList items={items}/>
      <Footer count={3} />
    </div>);
}

export default App;
