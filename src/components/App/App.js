import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
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
    ],
    count: 3
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

  addItem = value => {
      this.setState(state => ({
        items: [
          ...state.items,
          {
            value,
            isDone: false,
            id: state.count + 1
          }
        ],
        count: state.count + 1
      }))
  };

  deleteItem = id => {
    const newItemList = this.state.items.filter(item => item.id !== id);
    this.setState(state => ({
      items: newItemList,
      count: state.count - 1
    }));
  };

  render() {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Важные дела:</h1>
        <InputItem addItem={this.addItem} value={this.value}/>
        <ItemList items={this.state.items} onClickDone={this.onClickDone} deleteItem={this.deleteItem}/>
        <Footer count={this.state.count}/>
      </div>
    );
  }
}

export default App;
