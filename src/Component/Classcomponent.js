// What is class components.

// It is stateful component without hooks.

//it is used when big data is used only to show while functional components are used when there is modification mostly needed.

// Making class component

import React from "react";
// if we import component then we direct write class comp extends component
// import { Component } from 'react'

class comp extends React.Component {
  render() {
    return (
      <>
        <h1 > This is class component</h1>
      </>
    );
  }
}

export default comp;

//The render method returns JSX, which represents the structure of your component.

// There is also a constructor method inside it and we have to use super keyword inside constructor. and we can call life cycle too.
