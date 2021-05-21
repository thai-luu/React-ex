// import React, { useState } from 'react';
import React, { Component } from "react";
/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import Input from "./Input";
import Filter from "./Filter";

/* カスタムフック */


/* ライブラリ */
import { getKey } from "../lib/util";
import TodoItem from "./TodoItem";
import useFbStorage from '../hooks/fbStorage';
import { getAllByAltText } from "@testing-library/dom";

  // const [items, putItems] = React.useState();
  
function Todo() {
  const [items, addItem, updateItem, clearItems] = useFbStorage();

  const [filter, setFilter] = React.useState('ALL');
  const displayItems = items.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.done;
    if (filter === 'DONE') return item.done;
  });
  const handleCheck = checked => {
    updateItem(checked);
  };

  const handleAdd = text => {
    addItem({ text, done: false });
  };
  const handleFilterChange = value => setFilter(value);
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input onAdd={handleAdd} />
      <Filter
        onChange={handleFilterChange}
        value={filter}
      />
      {displayItems.map(item => (
        <TodoItem
        key={item.id}
        item={item}
        onCheck={handleCheck} />
    ))}
    <div className="panel-block">
      {displayItems.length} items
    </div>
    <div className="panel-block">
      <button className="button is-light is-fullwidth" onClick={clearItems}>
        Delete all tasks
      </button>
    </div>
  </div>
);
}
export default Todo;
