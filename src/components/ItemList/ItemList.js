import React from 'react';
import Item from '../Item/Item';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import CheckboxLabel from '../CheckboxLabel/CheckboxLabel';
import styles from './ItemList.module.css';

const ItemList = ({items}) => (<ul className={styles.list}>
  {items.map(item => <li className={styles.button} key={item.value}>
    <CheckboxLabel/>
    <Item value={item.value} isDone={item.isDone}/>
    <ButtonDelete/>
  </li>)}
</ul>);

export default ItemList;
