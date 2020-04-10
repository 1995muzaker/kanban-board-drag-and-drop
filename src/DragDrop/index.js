import React, { Component } from "react";
import {
  KanbanDiv,
  DroppableDiv,
  DraggableDiv,
  Header,
  // AddTask,
  // TaskInput,
  // TaskButton,
} from "../styles/drag";

const tasksData = [
  { name: "Task1", category: "wip", bgcolor: "yellow" },
  { name: "pending task", category: "wip", bgcolor: "pink" },
  { name: "Yesterday task", category: "complete", bgcolor: "skyblue" },
  { name: "main task", category: "stuck", bgcolor: "skyblue" },
  { name: "yet to decide", category: "empty", bgcolor: "skyblue" },
  { name: "hello", category: "review", bgcolor: "skyblue" },
  { name: "Serious bug", category: "bug", bgcolor: "skyblue" },
  { name: "deadline to be done", category: "deadline", bgcolor: "skyblue" },
  { name: "new task", category: "new", bgcolor: "skyblue" },
];

class DragDrop extends Component {
  state = {
    task1: [],
  };

  onDragStart = (ev, id) => {
    console.log("dragstart:", id);
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

  handleChange = (e) => {
    this.setState({ task1: e.target.value });
    //   this.state.task1.push(e)
    console.log(this.state.task1);
  };

  onDeleteTag = (tag) => {
    var tags = this.state.tags.filter((t) => {
      return t !== tag;
    });

    console.log("tags: ", tags);

    this.setState({
      tags: tags,
    });
  };

  render() {
    var tasks = {
      wip: [],
      complete: [],
      stuck: [],
      empty: [],
      review: [],
      bug: [],
      deadline: [],
      new: []
    };

    // const handleClick = (e) => {
    //   let temp = tasks;
    //   //   temp.push(e);
    //   this.setState({
    //     task1: temp,
    //   });
    //   console.log(this.state.task1);
    // };

    tasksData.forEach((t) => {
      tasks[t.category].push(
        <DraggableDiv
          key={t.name}
          onDragStart={(e) => this.onDragStart(e, t.name)}
          draggable
          //   style={{ backgroundColor: t.bgcolor }}
        >
          {t.name}
        </DraggableDiv>
      );
    });

    return (
      <KanbanDiv>
        <DroppableDiv
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => {
            this.onDrop(e, "wip");
          }}
          style={{ backgroundColor: "#fdab3d" }}
        >
          <Header>Working on it</Header>
          {tasks.wip}
          {/* <AddTask>
            <TaskInput
              type="text"
              placeholder="Add"
              value={this.state.task1}
              onChange={(event, i) => {
                this.handleChange(event, i);
              }}
              //   style={iStyle}
              //   onKeyUp={(e) => this.onKeyUp(e)}
              //   type="text"
              //   placeholder={this.props.placeholder}
            />
            <TaskButton
              onClick={(e) => {
                handleClick(e, 'wip');
              }}
            >
              + Add
            </TaskButton>
          </AddTask> */}
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
    );
  }
}

export default DragDrop;
