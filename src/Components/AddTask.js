import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../Redux/actions";
const AddTask = () => {
  const tasksList = useSelector((state) => state.tasksList);
  const [task, setTask] = useState({
    id: tasksList.length + 1,
    description: "",
    isDone: false,
  });
  const onChange = (e) => {
    setTask({
      ...task,
      description: e.target.value,
    });
  };
  const Dispatch = useDispatch();
  const handleClick = () => {
    Dispatch(addTask(task));
    setTask({
      id: task.id + 1,
      description: "",
      isDone: false,
    });
  };

  return (
    <div>
      <h1 className="text-center"> Today's Tasks</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Add a new Task"
          aria-label="Add Task"
          aria-describedby="basic-addon2"
          value={task.description}
          onChange={onChange}
        />
        <InputGroup.Append>
          <Button variant="primary" onClick={handleClick}>
            Add
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default AddTask;