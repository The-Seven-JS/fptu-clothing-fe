import React from "react";
import "./Tower.css"; 

const Brick = ({ rotation, color, extraClass = "" }) => {
  return (
    <div className={`tower__brick tower__brick--${rotation} ${color ? `tower__brick--${color}` : ""} ${extraClass}`}>
      <div className="tower__brick-side"></div>
      <div className="tower__brick-side"></div>
      <div className="tower__brick-side"></div>
      <div className="tower__brick-side"></div>
      <div className="tower__brick-stud"></div>
      <div className="tower__brick-stud"></div>
    </div>
  );
};

const BrickLayer = ({ layerNumber, bricks }) => {
  return (
    <div className={`tower__brick-layer tower__brick-layer--${layerNumber}`}>
      {bricks.map((brick, index) => (
        <Brick key={index} {...brick} />
      ))}
    </div>
  );
};

const Message = () => {
  const messages = [
    "Loading…",
    "Sorting out the pieces…",
    "Assembling one brick at a time…",
    "Following every step…",
    "Being very careful not to step on the pieces…",
    "Trying not to get finger blisters…",
    "Might take longer to build than the Death Star…",
    "Wrapping it up…"
  ];
  return (
    <div className="message">
      {messages.map((msg, index) => (
        <p key={index} className="message__line">{msg}</p>
      ))}
    </div>
  );
};

const Tower = () => {
  const layers = [
    {
      layerNumber: 4,
      bricks: [
        { rotation: 0 },
        { rotation: 90, color: "red" },
        { rotation: 180, color: "orange" },
        { rotation: 270, color: "purple" }
      ]
    },
    {
      layerNumber: 3,
      bricks: [
        { rotation: 45, color: "magenta" },
        { rotation: 135 },
        { rotation: 225, color: "green" },
        { rotation: 315, color: "orange" }
      ]
    },
    {
      layerNumber: 2,
      bricks: [
        { rotation: 0, color: "red" },
        { rotation: 90, color: "green" },
        { rotation: 180, color: "purple" },
        { rotation: 270 }
      ]
    },
    {
      layerNumber: 1,
      bricks: [
        { rotation: 45, color: "purple" },
        { rotation: 135, color: "magenta" },
        { rotation: 225, color: "red" },
        { rotation: 315, color: "green" }
      ]
    }
  ];
  return (
    <main>
      <div className="tower">
        <div className="tower__group">
          {layers.map((layer, index) => (
            <BrickLayer key={index} {...layer} />
          ))}
        </div>
      </div>
      <Message />
    </main>
  );
};

export default Tower;
