import React, { useState } from "react";

export default function Contact() {
  const [newNote, setNewNote] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleInputChange(e) {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  }

  function handleSend() {
    setNewNote({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={newNote.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
            value={newNote.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="3"
            value={newNote.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="button" className="btn btn-outline-primary mt-3" onClick={handleSend}>
          Send
        </button>
      </form>
    </>
  );
}
