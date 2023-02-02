import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';//MDB css
import "@fortawesome/fontawesome-free/css/all.min.css";//MDB css


import Navbar from './components/Navbar';
import About from './components/About';
import Todo from './components/Todo';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Api from './components/Api_Testing';
import Footer from './components/Footer';
import Counter from './components/Counter';
import ActionHooks from './hooks/ActionHooks';
import ActionHooks2 from './hooks/ActionHooks2';
import ActionHooks3 from './hooks/ActionHooks3';
import CustomHooks from './hooks/CustomHooks1';
import CustomHooks2 from './hooks/CustomHooks2';
import CustomHooks3 from './hooks/CustomHooks3';
// import Memo from './useMemo';


function App() {
  return (
    <>
      {/* <Navbar title="DExtER" /> */}
      {/* <Todo/> */}
      {/* <About/> */}
      {/* <Action Label="Click me" counte={5}/> */}
      {/* <ActionHooks label="Click Here" count={5}/> */}
      {/* <ActionHooks2/> */}
      {/* <ActionHooks3/> */}
      {/* <CustomHooks/> */}
      {/* <CustomHooks2/> */}
      {/* <CustomHooks3/> */}
      {/* <Memo/> */}
      <Router>
        <Navbar title="DExtER" />
        <Routes>
          <Route path='about' element={<About />} />
          <Route path='todo' element={<Todo />} />
          <Route path='SignIn' element={<SignIn />} />
          <Route path='SignUp' element={<SignUp />} />
          <Route path='Api_Testing' element={<Api />} />
        </Routes>

        <Footer />
      </Router>
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

// function App22() {
//   let isSubmitted = false;

//   const onOnceApply = (message = "") => {
//     console.log('from Once clicked', message, isSubmitted);
//     isSubmitted = true;
//   }
//   return (
//     <React.Fragment>
//       <div>
//         <SubmitButton label="Submit" />
//         <SubmitButton label="Apply" onCompmete={onOnceApply} />
//       </div>
//       <Navbar />
//     </React.Fragment>
//   );
// }

// function SubmitButton({ label, onCompmete }) {
// function SubmitButton(props) {
//   const handleClick = () => {
//     console.log('clicked');
//     if (props.onCompmete) {
//       props.onCompmete('This is done');
//     }
//   }
//   return (
//     <button onClick={handleClick} className="">{props.label}</button>
//   );
// }

//-------------------------------------------------------------------------
//CLASS BASED COMPONENT EXPLANATION

// class App2 extends React.Component {
//   onOnceApply = (message = "") => {
//     console.log('Apply button is clicked', message, this.isSubmitted);
//     this.isSubmitted = true;
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <div>
//           <SubmitButton2 label="Submit" />
//           <SubmitButton2 label="Apply" onComplete={this.onOnceApply} />
//         </div>
//       </React.Fragment>
//     )
//   }
// }

// class SubmitButton2 extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   handleClick = () => {
//     console.log('clicked');
//     if (this.props.onComplete) {
//       this.props.onComplete('This clicked is done');
//     }
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick} className="">{this.props.label}</button>
//     );
//   }
// }

//-------------------------------------------------------------------------
//STATE AND LIFECYCLE(Mounting,Updating,Unmounting)
// import { Component } from 'react';
// import Counter1 from './components/Counter1';

// class App3 extends Component {
//   constructor() {
//     super();
//     this.state = { count: 0 }
//   }
//   componentDidMount() {
//     console.log("ComponentDidmount: When component render first time")
//   }
//   incrementCount() {
//     this.setState({ count: this.state.count + 1 })
//   }
//   componentWillUnmount() {
//     console.log("ComponentWillUnmount: When component remove")
//   }
//   render() {
//     return (
//       <div>
//         <Navbar title="DEXTER" />
//         <Counter1 number={this.state.count}></Counter1>
//         <button onClick={() => { this.incrementCount() }}>Click Here</button>
//       </div>
//     )
//   }
// }

// class Action extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: props.count
//     }
//   }
//   onApply = () => {
//     // console.log(this)
//     // this.fetchData();
//     // this.fetchData.call();
//     // this.props.counter = this.props.counter + 1
//     const { count } = this.state
//     this.setState({ count: count + 1 })
//   }
//   onBindApply(){
//     const {count} = this.state
//     console.log(this);
//     this.fetchData()
//   }

//   fetctData(){
//     console.log("Fetching")
//   }

//   componentDidMount() {
//     console.log("ComponentDidmount: When component render first time")
//   }
//   componentWillUnmount() {
//     console.log("ComponentWillUnmount: When component remove")
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Navbar title="DExtER" />
//         <h1>Hello World {this.props.count}</h1>
//         <h1>Hello World {this.state.count}</h1>
//         <button onClick={this.onApply}>{this.props.label}Click Here</button>
//       </React.Fragment>
//     )
//   }
// }



export default App;