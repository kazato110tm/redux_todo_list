import React from 'react';
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  Input,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'

function TodoApp({ task, tasks, inputTask, addTask, resetTask, redirectToError }) {
  return (
    <div>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit">
              Todo
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div stype={{ padding: '16px' }}>
        <Input onChange={(e) => inputTask(e.target.value)} />
        <Button variant="contained" color="primary" onClick={() => addTask(task)}>add</Button>
        <Button variant="contained" color="secondary" onClick={() => resetTask()}>reset</Button>
        <List>
          {
            tasks.map(function (item, i) {
              return (
                <ListItem key={i}>
                  <ListItemText primary={`・${item}`} />
                </ListItem>
              );
            })
          }
        </List>
        <button onClick={() => redirectToError()}>エラーページへ</button>
      </div>
    </div>
  );
}

export default TodoApp;
