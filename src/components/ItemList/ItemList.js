import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({items, onClickDone, id, deleteItem}) => (<ul className={styles.list}>
  {items.map(item =>
    <Item
      value={item.value}
      isDone={item.isDone}
      id={item.id}
      key={item.value + item.id}
      onClickDone={onClickDone}
      deleteItem={deleteItem}
    />
  )}
</ul>);

ItemList.defaultProps = {
  items: []
};

export default ItemList;
