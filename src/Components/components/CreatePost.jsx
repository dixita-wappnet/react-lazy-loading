import React from 'react'

export default function CreatePost() {
  return (
    <form className='container'>
     <div className="mb-3 title">
    <label for="exampleInputEmail1" className="form-label" >Title</label>
    <input type="text" placeholder='title....' id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" placeholder='Descripation....' id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox"  id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" id="btn" className="btn btn-primary">Submit</button>
</form>
  )
}
