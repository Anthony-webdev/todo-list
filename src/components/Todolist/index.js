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

    // récupérer les ids des tâches
    const ids = tasks.map((task) => task.id);

    // on retourne l'id max avec la fonction Math.max
    const maxId = Math.max(...ids);

    // on construit une nouvelle tâche avec des infos en dur dans 1e temps
    const newTask = {
      id: maxId + 1,
      label: taskLabel,
      done: false,
    };

    // INTERDIT, JAMAIS, NEVER
    // this.state.tasks.push(newTask);

    // en déclaratif, on travaille toujours sur de nouvelles références de tableau ou objet
    // on crée un nouveau tableau et on vient déverser les éléments du tableau stocké
    // dans le state, ensuite on rajoute la nouvelle tâche
    const newTasks = [...tasks];
    newTasks.push(newTask);

    this.setState({
      tasks: newTasks,
      // je vide le champs input text en même temps
      taskLabel: '',
      // version courte
      // tasks: [...tasks, newTask],
    });
  }

  // fonction en charge de changer la valeur de taskLabel
  setTaskLabel = (value) => {
    this.setState({
      taskLabel: value,
    });
  }

  // fonction en charge de changer la valeur done des tasks
  toggleTaskDone = (taskId) => {
    // on récupère l'id de la tâche cliquée
    // on boucle sur la liste des tâches
    const { tasks } = this.state;

    // on crée une nouvelle référence de tableau
    // qui sera injectée dans le nouveau state
    const newTasks = tasks.map((task) => {
      // on identifie la tâche qui a été cliquée
      if (task.id === taskId) {
        // notre tâche va changer, on va donc devoir
        // créer une nouvelle référence d'objet
        const modifiedTask = {
          // on déverse les propriétés qui n'ont pas besoin d'être modifiées
          ...task,
          // on indique uniquement celle qui va changer
          done: !task.done,
        };

        // on met ce nouvel objet dans le nouveau tableau
        return modifiedTask;
      }

      // on place dans ce nouveau tableau les anciennes références d'objet
      // qui n'auront pas besoin de changer
      return task;
    });

    this.setState({
      tasks: newTasks,
    });
  }

  render() {
    const { tasks, taskLabel } = this.state;

    const undonetasks = tasks
      // on filtre le tableau de données qui nous renvoie
      // un nouveau avec uniquement les tâche à faire
      .filter((task) => !task.done)
      // comme filter renvoie un tableau, on peut chaîner une opération sur ce tableau
      // ici length
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
