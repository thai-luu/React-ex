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
import useStorage from "../hooks/storage";

/* ライブラリ */
import { getKey } from "../lib/util";
import TodoItem from "./TodoItem";
import { getAllByAltText } from "@testing-library/dom";
class Todo extends Component {
  // const [items, putItems] = React.useState();

  constructor(props) {
    super(props);
    this.state = {
      items: [
        /* テストコード 開始 */
        { key: getKey(), text: "日本語の宿題", done: true },
        { key: getKey(), text: "reactを勉強する", done: false },
        { key: getKey(), text: "明日の準備をする", done: false },
        /* テストコード 終了 */
      ],
      Filter: "all",
    };
  }

  handleOnClick = (key) => {
    this.setState({
      items: this.state.items.map((item) => {
        return item.key === key ? { ...item, done: !item.done } : item;
      }),
    });
  };

  handleAddTodoItem = (text) => {
    this.setState({
      items: [...this.state.items, { key: getKey(), text: text, done: false }],
    });
  };
  filterStatus = (status) => {
    if (status === "all") {
      this.setState({
        filter: "all",
      });
    } else if (status === "unactive") {
      this.setState({
        filter: "unactive",
      });
    } else {
      this.setState({
        filter: "active",
      });
    }
  };

  render() {
    const { items, filter } = this.state;
    return (
      <div className="panel">
        <div className="panel-heading">ITSS ToDoアプリ</div>
        <Input handleAddTodoItem={this.handleAddTodoItem} />
        <Filter filter={filter} filterStatus={this.filterStatus} />
        {items
          .filter((item) => {
            return (
              filter === "all" ||
              (filter === "unactive" && item.done) ||
              (filter === "active" && !item.done)
            );
          })
          .map((item) => (
            <TodoItem
              key={item.key}
              item={item}
              handleOnClick={this.handleOnClick}
            ></TodoItem>
          ))}
        <div className="panel-block">{items.length} items</div>
      </div>
    );
  }
}
export default Todo;
