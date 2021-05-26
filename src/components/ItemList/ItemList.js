import React from 'react';
import Item from '../Item/Item'

const ItemList = ({todoItem}) => (<ul>
	<li><Item todoItem={todoItem}/></li>
	<li><Item todoItem={'Дело №2'}/></li>
	<li><Item todoItem={'Дело №3'}/></li>
</ul>);

export default ItemList;
