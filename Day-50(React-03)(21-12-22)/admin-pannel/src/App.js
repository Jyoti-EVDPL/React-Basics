import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Counter from './components/Counter';

function App99(){
  return(
    <>
    <Navbar></Navbar>
    </>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class App2 extends React.components {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// function App() {
// return React.createElement('div', null,
//   React.createElement('h1', null, 'Hyy'),
//   React.createElement('h1', null, 'Hyy'),
//   React.createElement('h1', null, 'Hyy'),
// )
//     return (
//       <h1>Hyy</h1>
//     );
// }

// function App() {
//   const buttonClick=()=>{
//     console.log('clicked');
//   }
//   return (
//     <React.Fragment>
//       <div>
//         <button onClick={buttonClick} className="">Submit</button>
//         <button onClick={buttonClick} className="">Apply Changes</button>
//       </div>
//     </React.Fragment>
//   );
// }
//------------------------------------------------------------------------------------------------

function App() {
  let isSubmitted = false;

  const onOnceApply = (message = "") => {
    console.log('from Once clicked', message, isSubmitted);
    isSubmitted = true;
  }
  return (
    <React.Fragment>
      <div>
        <SubmitButton label="Submit" />
        <SubmitButton label="Apply" onCompmete={onOnceApply} />
      </div>
      <Navbar />
    </React.Fragment>
  );
}

// function SubmitButton({ label, onCompmete }) {
function SubmitButton(props) {
  const handleClick = () => {
    console.log('clicked');
    if (props.onCompmete) {
      props.onCompmete('This is done');
    }
  }
  return (
    <button onClick={handleClick} className="">{props.label}</button>
  );
}

//-------------------------------------------------------------------------
//CLASS BASED COMPONENT EXPLANATION

class App2 extends React.Component {
  onOnceApply = (message = "") => {
    console.log('Apply button is clicked', message, this.isSubmitted);
    this.isSubmitted = true;
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <SubmitButton2 label="Submit" />
          <SubmitButton2 label="Apply" onComplete={this.onOnceApply} />
        </div>
      </React.Fragment>
    )
  }
}

class SubmitButton2 extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    console.log('clicked');
    if (this.props.onComplete) {
      this.props.onComplete('This clicked is done');
    }
  }
  render() {
    return (
      <button onClick={this.handleClick} className="">{this.props.label}</button>
    );
  }
}

//-------------------------------------------------------------------------
//STATE AND LIFECYCLE(Mounting,Updating,Unmounting)
import { Component } from 'react';
import Counter1 from './components/Counter1';

class App3 extends Component {
  constructor() {
    super();
    this.state = { count: 0 }
  }
  componentDidMount() {
    console.log("ComponentDidmount: When component render first time")
  }
  incrementCount() {
    this.setState({ count: this.state.count + 1 })
  }
  componentWillUnmount(){
    console.log("ComponentWillUnmount: When component remove")
  }
  render() {
    return (
      <div>
        <Navbar title="DEXTER"/>
        <Counter1 number={this.state.count}></Counter1>
        <button onClick={() => { this.incrementCount() }}>Click Here</button>
      </div>
    )
  }
}

export default App3;

