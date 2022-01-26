import React, { Component } from "react";
export class NoteCard extends Component {
  state = {};
  render() {
    return (
      <section className="note-card">
        <header>
          <h3>Annotation title</h3>
          <p className="note-text">Annotation text </p>
        </header>
      </section>
    );
  }
}
