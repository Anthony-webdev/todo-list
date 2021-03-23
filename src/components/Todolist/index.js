import React, { Component } from 'react';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';

import tasksData from 'src/data/tasks';
import './style.scss';

class Todolist extends Component {
  state = {
    tasks: tasksData,
    taskLabel: '',
  }

  addTask = () => {
    const { tasks, taskLabel } = this.state;

    const ids = tasks.map((task) => task.id);

    const maxId = Math.max(...ids);

    const newTask = {
      id: maxId + 1,
      label: taskLabel,
      done: false,
    };

    const newTasks = [...tasks];
    newTasks.push(newTask);

    this.setState({
      tasks: newTasks,

      taskLabel: '',

    });
  }

  setTaskLabel = (value) => {
    this.setState({
      taskLabel: value,
    });
  }

  toggleTaskDone = (taskId) => {
    const { tasks } = this.state;

    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        const modifiedTask = {
          ...task,
          done: !task.done,
        };

        return modifiedTask;
      }

      return task;
    });

    this.setState({
      tasks: newTasks,
    });
  }

  render() {
    const { tasks, taskLabel } = this.state;

    const undonetasks = tasks

      .filter((task) => !task.done)

      .length;

    return (
      <div className="todolist">
        <Form
          onSubmitForm={this.addTask}
          inputValue={taskLabel}
          onChangeInputValue={this.setTaskLabel}
        />
        <Counter count={undonetasks} />
        <Tasks
          tasks={tasks}
          onClickTask={this.toggleTaskDone}
        />
      </div>
    );
  }
}

export default Todolist;
