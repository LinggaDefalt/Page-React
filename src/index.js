import React from 'react';
import ReactDOM from 'react-dom';





//const App = () => {
//  const now = new Date()
//  const a = 10
//  const b = 20
//  return (
//    <div>
//      <p> Hello world kone!{now.toString()}</p>
//      <p>
//        {a} plus {b} is {a + b}
//      </p>
//    </div>
//  )
//}

const Hello = (props) => {
  return (
    <div>
      <p> hello {props.name} you are {props.age} years old </p>
    </div>
  )
}

const Pet = (props) => {
  return (
    <di>
      <p>your pet is {props.namepet} and the gender is {props.gender}</p>
    </di>
  )
}

const Footer = () => {
  return (

    <di>
      grettin app created by otong
    </di>
  )
}

const App = () => {
  const name = 'peter'
  const age = 10
  const namepet = 'dog'
  const gender = 'male'
  const now = new Date()
  return (
    <div>
      <h1> Greetings </h1>
      <p> today is {now.toString()}</p>
      <Hello name="maya" age={26 - 10} />
      <Hello name={name} age={age} />
      <Hello />
      <Pet name={namepet} gender={gender} />
      <Footer />
    </div>


  )

}

ReactDOM.render(<App />, document.getElementById('root'))





//ReactDOM.render(
//  React.createElement(App, null),
//  document.getElementById('root')
//)
