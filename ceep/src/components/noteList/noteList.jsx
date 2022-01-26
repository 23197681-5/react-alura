import React, { Component } from "react";
import NoteCard from "../noteCard/index";

export class NoteList extends Component {
  render() {
    return (
      <div className=" grid place-items-center v-screen">
        <ul className="w-full max-w-md bg-gray-800 ">
          <li>
            {Array.of("Work", "Work", "Study").map((category, index) => (
              <li className="bg-white shadow-md rounded px-8 py-8 pt-8">
                {" "}
                <NoteCard>{category}</NoteCard>
              </li>
            ))}
          </li>
        </ul>
      </div>
    );
  }
}
