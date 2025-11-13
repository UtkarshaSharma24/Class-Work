import React from "react";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (todos.length === 0) {
    return (
      <p style={{ textAlign: "center", color: "#666", marginTop: "20px" }}>
        No tasks yet. Add one! 🌟
      </p>
    );
  }

  return (
    <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px",
            borderBottom: "1px solid #eee",
          }}
        >
          <span
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "#999" : "#000",
              cursor: "pointer",
              flex: 1,
            }}
          >
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            style={{
              background: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 8px",
              cursor: "pointer",
              marginLeft: "8px",
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
