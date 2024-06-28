import React from 'react'

export default function Main() {
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form">
         <div className="feild">
             <label>Name</label>
             <input type="text" name="name" placeholder="Name"/>
         </div>
         <div className="feild">
             <label>Email</label>
             <input type="email" name="email" placeholder="Email"/>
         </div>
         <button className="ui button blue">Add</button>
      </form>
    </div>
  )
}