import React,{Fragment} from "react";
import Provider from "./Provider";
import Context from "./context";



const Agents = ()=>{
  return(
    <AgentOne/>
  )
}

const AgentOne= ()=>{
  return(
    <AgentBond />
  )
}

const AgentBond= ()=>{
  return (
    <Context.Consumer>
{
  (context)=>(
    <Fragment>
      <h3>Agent Information</h3>
      <h4>MISSION INITIALIZED</h4>
      <p>MY mission completed</p>
      <p>Mission Name: {context.data.mname}</p>
  <h2>Mission Status: {context.data.accept}</h2>
  <button onClick = {context.isMissionAccepted}> Click to Accept</button>
    </Fragment>
  )
}
    </Context.Consumer>
  )
}


const App = ()=>{
  return (
    <div>
      <h1>Context API - Context, Providers, Consumers</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  )
}

export default App;