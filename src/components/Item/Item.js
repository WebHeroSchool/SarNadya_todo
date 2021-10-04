import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import CheckboxLabel from '../CheckboxLabel/CheckboxLabel';
import ButtonDelete from '../ButtonDelete/ButtonDelete';

const Item = ({value, isDone, onClickDone, id}) => (
  <div className={styles.list} onClick={() => onClickDone(id)}>
    <CheckboxLabel
      isDone={isDone}
      onClickDone={onClickDone}
    />
    <span className={
      classnames({
        [styles.item]: true,
        [styles.done]: isDone
      })
    }>
      {value}
    </span>
    <ButtonDelete/>
  </div>);

export default Item;
