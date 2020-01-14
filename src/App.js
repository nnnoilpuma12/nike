import React, { Component } from 'react';
import './App.css';
import ToDoListItem from "./ToDoListItem.js"

class App extends Component {

  // ToDoListをstateに定義、初期値は[]
  state = {
    todoList: []
  }

  render() {
    return (
      <div className="App">
        <form className="App-form"
        onSubmit={e => {
          // formのデフォルトのイベントをキャンセル
          e.preventDefault();

          // idがtitleのElementを取得
          const titleElement = e.target.elements["title"]
          // idがdescriptionのElementを取得
          const descriptionElement = e.target.elements["description"];

          // todoList stateに追加
          this.setState(
            {
              todoList: this.state.todoList.concat({
                title: titleElement.value,
                description: descriptionElement.value
              })
            },

            // stateの変更後に入力した値を空にする
            () => {
              titleElement.value = "";
              descriptionElement.value = "";
            })
          }}
          >
          <div>
            <input id="title" placeholder="title"/>
            <textarea id="desctiption" placeholder="description"/>
          </div>
          <div>
            <button type="submit">
              登録
            </button>
          </div>
        </form>
        <div>
          
       <ToDoListItem
            title="ホームページ作成"
            description="サークルホームページを今週中に作成する"
          />
        </div>
      </div>
    );
  }
}

export default App;