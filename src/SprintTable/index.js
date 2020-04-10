import React from "react";
import { TableDiv, HeaderList, PriorityDiv } from "../styles/TableDrag";
import Avatar from "./avatar.png";

class SprintTable extends React.Component {
  state = {
    items: [
      {
        title: "Write Online Help",
        status: "Working on it",
        epic: "Bug",
        priority: "High",
        estimation: "1 days",
        color: "#e2445c",
        assignColor: "#f9a93c",
      },
      {
        title: "Add error logging",
        status: "Working on it",
        epic: "Bug",
        priority: "High",
        estimation: "1 days",
        color: "#e2445c",
        assignColor: "#f9a93c",
      },
      {
        title: "Test the middle tier",
        status: "Stuck",
        epic: "Bug",
        priority: "Medium",
        estimation: "1 days",
        color: "#833c80",
        assignColor: "#e2445c",
      },
    ],
  };

  onDragStart = (e, index) => {
    this.draggedItem = this.state.items[index];
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  onDragOver = (index) => {
    const draggedOverItem = this.state.items[index];

    // if the item is dragged over itself, ignore
    if (this.draggedItem === draggedOverItem) {
      return;
    }

    // filter out the currently dragged item
    let items = this.state.items.filter((item) => item !== this.draggedItem);

    // add the dragged item after the dragged over item
    items.splice(index, 0, this.draggedItem);

    this.setState({ items });
  };

  onDragEnd = () => {
    this.draggedIdx = null;
  };

  render() {
    return (
      <TableDiv>
        <main>
          <h1>Table List Drag and Drop</h1>
          <ul>
            <HeaderList>
              <span style={{ color: "#2196f3" }}>Sprint2 (This Week)</span>
              <span>Assignee</span>
              <span>Status</span>
              <span>Epic</span>
              <span>Priority</span>
              <span>Estimation</span>
            </HeaderList>
            {this.state.items.map((item, idx) => (
              <li key={item} onDragOver={() => this.onDragOver(idx)}>
                <div
                  className="drag"
                  draggable
                  onDragStart={(e) => this.onDragStart(e, idx)}
                  onDragEnd={this.onDragEnd}
                >
                  <span>{item.title}</span>
                  <span>
                    <img src={Avatar} alt={'avatar'} />
                  </span>
                  <PriorityDiv colors={item.assignColor}>
                    {item.status}
                  </PriorityDiv>
                  <span>{item.epic}</span>
                  <PriorityDiv colors={item.color}>{item.priority}</PriorityDiv>
                  <span>{item.estimation}</span>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </TableDiv>
    );
  }
}

export default SprintTable;
