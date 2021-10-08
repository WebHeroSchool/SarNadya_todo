import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({items, onClickDone, deleteItem}) => (<ul className={styles.list}>
  {items.map(item => <li key={item.value}>
    <Item
      value={item.value}
      isDone={item.isDone}
      id={item.id}
      onClickDone={onClickDone}
      deleteItem={deleteItem}
    />
  </li>)}
</ul>);

export default ItemList;
