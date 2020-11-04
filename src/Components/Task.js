import React from "react";
import ModalEdit from "./ModalEdit";
import "./Task.css";
import {
  FaCalendarTimes,
  FaSmileBeam,
  FaSadTear,
  FaCheckCircle,
} from "react-icons/fa";
import { BsToggleOn } from "react-icons/bs";
const Task = ({ description, isDone, toggleTask, deleteTask }) => (
  <div className="task-container">
    <div className="description">
      <span>{description}</span>
      {isDone ? (
        <FaSmileBeam className="icon green" />
      ) : (
        <FaSadTear className="icon red" />
      )}
    </div>
    <div className="description">
      <span>{isDone ? "You did it!" : "Not Yet!"}</span>
      {isDone ? (
        <FaCheckCircle className="icon green" onClick={toggleTask} />
      ) : (
        <BsToggleOn className="icon red" onClick={toggleTask} />
      )}
    </div>

    <div className="edit">
      <ModalEdit description={description} />
      <FaCalendarTimes className="icon red" onClick={deleteTask} />
    </div>
  </div>
);

export default Task;
