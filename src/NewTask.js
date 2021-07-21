import React from "react";

export default function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="New task"
        value={newTask.title || ""}
        onChange={handleChange}
      />
      {!newTask.title ? null : (
        <>
          <textarea
            name="description"
            placeholder="Details..."
            value={newTask.description || ""}
            onChange={handleChange}
          />
          <button style={{backgroundColor: "#c94c4c", color: "white", border: "solid white", fontWeight: "bold", borderRadius: "5px"}}type="submit">ADD TASK</button>
        </>
      )}
    </form>
  );
}