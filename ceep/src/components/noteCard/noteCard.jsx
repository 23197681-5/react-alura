import React, { Component } from "react";
import "./style.css";
export class CardAnnotation extends Component {
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
