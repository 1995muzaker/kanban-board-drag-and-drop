import React, { Component } from "react";
import {
  KanbanDiv,
  DroppableDiv,
  DraggableDiv,
  Header,
  MainDiv,
} from "../styles/drag";

const tasksData = [
  { name: "Task1", category: "progress", },
  { name: "pending task", category: "progress", bgcolor: "pink" },
  { name: "Yesterday task", category: "complete" },
  { name: "main task", category: "stuck" },
  { name: "yet to decide", category: "empty" },
  { name: "hello", category: "review" },
  { name: "Serious bug", category: "bug" },
  { name: "deadline to be done", category: "deadline" },
  { name: "new task", category: "new" },
];

class DragDrop extends Component {
  state = {
    task1: [],
  };

  onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };

  onDragOver = (ev) => {
    ev.preventDefault();
  };

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    console.log(id);

    let tasks = tasksData.filter((task) => {
      if (task.name === id) {
        task.category = cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks,
    });
  };

  render() {
    var tasks = {
      progress: [],
      complete: [],
      stuck: [],
      empty: [],
      review: [],
      bug: [],
      deadline: [],
      new: []
    };

    tasksData.forEach((t) => {
      tasks[t.category].push(
        <DraggableDiv
          key={t.name}
          onDragStart={(e) => this.onDragStart(e, t.name)}
          draggable
        >
          {t.name}
        </DraggableDiv>
      );
    });

    return (
      <MainDiv>
        <h1>Kanban Board - Drag and Drop</h1>
      <KanbanDiv>
        <DroppableDiv
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => {
            this.onDrop(e, "progress");
          }}
          style={{ backgroundColor: "#fdab3d" }}
        >
          <Header>Working on it</Header>
          {tasks.progress}
        </DroppableDiv>

        <DroppableDiv
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "complete")}
          style={{ backgroundColor: "#00c875" }}
        >
          <Header>Done</Header>
          {tasks.complete}
        </DroppableDiv>
        <DroppableDiv
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "stuck")}
          style={{ backgroundColor: "#e2445c" }}
        >
          <Header>Stuck</Header>
          {tasks.stuck}
        </DroppableDiv>
        <DroppableDiv
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "empty")}
          style={{ backgroundColor: "#c4c4c4" }}
        >
          <Header>Empty</Header>
          {tasks.empty}
        </DroppableDiv>
        <DroppableDiv
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "review")}
          style={{ backgroundColor: "#589bfb" }}
        >
          <Header>Waiting for review</Header>
          {tasks.review}
        </DroppableDiv>
        <DroppableDiv
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "review")}
          style={{ backgroundColor: "lightgreen" }}
        >
          <Header>Bug</Header>
          {tasks.bug}
        </DroppableDiv>
        <DroppableDiv
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "review")}
          style={{ backgroundColor: "purple" }}
        >
          <Header>Deadline</Header>
          {tasks.deadline}
        </DroppableDiv>
        <DroppableDiv
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "review")}
          style={{ backgroundColor: "yellow" }}
        >
          <Header>New</Header>
          {tasks.new}
        </DroppableDiv>
      </KanbanDiv>
      </MainDiv>
    );
  }
}

export default DragDrop;
