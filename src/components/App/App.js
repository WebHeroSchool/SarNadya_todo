import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import ButtonAdd from '../ButtonAdd/ButtonAdd';
import styles from './App.module.css';

const todoItem = 'Поработать';

const App = () => {
  const items = [
    {
      value: 'Поработать',
      isDone: false
    },
    {
      value: 'Приготовить обед',
      isDone: true
    },
    {
      value: 'Выполнить тренировку',
      isDone: true
    }
  ];

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Важные дела:</h1>
      <div className={styles.button}>
        <InputItem/>
        <ButtonAdd/>
      </div>
      <ItemList items={items}/>
      <Footer count={1}/>
    </div>);
}

export default App;
