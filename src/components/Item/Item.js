import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import CheckboxLabel from '../CheckboxLabel/CheckboxLabel';
import ButtonDelete from '../ButtonDelete/ButtonDelete';

const Item = ({value, isDone, onClickDone, id, deleteItem}) => (
  <div className={styles.list} >
    <CheckboxLabel
      isDone={isDone}
      onClickDone={onClickDone}
      id={id}
    />
    <span onClick={() => onClickDone(id)} className={
      classnames({
        [styles.item]: true,
        [styles.done]: isDone
      })
    }>
      {value}
    </span>
    <ButtonDelete deleteItem={deleteItem} id={id}/>
  </div>);

  Item.defaultProps = {
    value: 'нет задачи',
    id: 0,
    isDone: false
};

export default Item;
