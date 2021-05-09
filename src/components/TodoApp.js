import React from 'react';

function TodoApp({ task, tasks, inputTask, addTask, resetTask, redirectToError }) {
  return (
    <div>
      <input type="text" onChange={(e) => inputTask(e.target.value)} />
      <input type="button" value="add" onClick={() => addTask(task)} />
      <input type="button" value="reset" onClick={() => resetTask()} />
      <ul>
        {
          tasks.map(function (item, i) {
            return (
              <li key={i}>{item}</li>
            );
          })
        }
      </ul>
      <button onClick={()=>redirectToError()}>エラーページへ</button>
    </div>
  );
}

export default TodoApp;
