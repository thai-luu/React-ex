// import React, { useState } from 'react';
import React, {Component} from 'react';
/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";
import TodoItem from "./TodoItem"
class Todo extends Component {
  // const [items, putItems] = React.useState();

  constructor(props){
    super(props)
    this.state = {
      items: [
        /* テストコード 開始 */
        { key: getKey(), text: '日本語の宿題', done: true },
        { key: getKey(), text: 'reactを勉強する', done: false },
        { key: getKey(), text: '明日の準備をする', done: false },
        /* テストコード 終了 */
      ]
    }
  }

  handleOnClick = (key) => {
    this.setState({
      items: this.state.items.map(item => {
        return item.key === key ? {...item, done: !item.done} : item
      })
    })
  }

  handleAddTodoItem = text => {
    this.setState({
      items: [...this.state.items, {key: getKey(), text: text, done: false}]
    })
  }

  render() {
    const {items} = this.state
    return (
      <div className="panel">
        <div className="panel-heading">
          ITSS ToDoアプリ
        </div>
        <Input handleAddTodoItem={this.handleAddTodoItem}/>
        {items.map(item => (
          <TodoItem 
            key={item.key}
            item={item}
            handleOnClick={this.handleOnClick}
          ></TodoItem>
        ))}
        <div className="panel-block">
          {items.length} items
        </div>
      </div>
       );
      }
}
export default Todo;