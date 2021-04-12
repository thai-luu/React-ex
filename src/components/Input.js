// import React, { useState } from 'react';
import React, {Component } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }
  handleAddTodoItem = (e) => {
    e.preventDefault()
    this.props.handleAddTodoItem(this.state.input)
    this.setState({
			input: ''
		})
  }
  handleSetState = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form method="post" onSubmit={this.handleAddTodoItem}>
          <input 
            class="input" type="text" 
            placeholder="Text input" 
            onChange={this.handleSetState} 
						value={this.state.input}
          />
        </form>
      </div>
    );
  }
}

export default Input;
