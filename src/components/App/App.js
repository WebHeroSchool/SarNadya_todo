import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import ButtonAdd from '../ButtonAdd/ButtonAdd';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    items: [
      {
        value: 'Поработать',
        isDone: false,
        id: 1
      },
      {
        value: 'Приготовить обед',
        isDone: true,
        id: 2
      },
      {
        value: 'Выполнить тренировку',
        isDone: true,
        id: 3
      }
    ]
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = {...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    this.setState({
      items: newItemList
    });
  };

  deleteItem = id => {
    const newItemList = this.state.items.filter(item => item.id !== id);

    this.setState({
      items: newItemList
    });
  };

  render() {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Важные дела:</h1>
        <div className={styles.button}>
          <InputItem/>
          <ButtonAdd/>
        </div>
        <ItemList items={this.state.items} onClickDone={this.onClickDone} deleteItem={this.deleteItem}/>
        <Footer count={1}/>
      </div>
    );
  }
}

export default App;
