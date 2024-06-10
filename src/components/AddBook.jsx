import React, { useState } from 'react'
import Navbar from './Navbar'

const AddBook = () => {
    const [data,changeData]=useState(
        {
            "title":"",
            "category":"",
            "pubyear":"",
            "author":"",
            "bookdesc":"",
            "disname":"",
            "pubname":"",
            "price":"",
            "edition":""
        }
    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <h1><center><i>BOOK REGISTRATION</i></center></h1>
            <div className="row g-3">
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6">
                            <label htmlFor="" className="form-label">Book Title</label>
                            <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6">
                            <label htmlFor="" className="form-label">Category</label>
                            <select name="" id="" className="form-control" name='category' value={data.category} onChange={inputHandler}>
                                <option value="Biography">Biography</option>
                                <option value="Bibliography">Bibliography</option>
                                <option value="Fiction">Fiction</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6">
                            <label htmlFor="" className="form-label">Published Year</label>
                            <input type="text" className="form-control" name='pubyear' value={data.pubyear} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6">
                            <label htmlFor="" className="form-label">Author Name</label>
                            <input type="text" className="form-control" name='author' value={data.author} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                            <label htmlFor="" className="form-label">Book Description</label>
                            <textarea name="" id="" className="form-control" name='bookdesc' value={data.bookdesc} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6">
                            <label htmlFor="" className="form-label">Distributor Name</label>
                            <input type="text" className="form-control" name='disname' value={data.disname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6">
                            <label htmlFor="" className="form-label">Publisher Name</label>
                            <input type="text" className="form-control" name='pubname' value={data.pubname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6">
                            <label htmlFor="" className="form-label">Price</label>
                            <input type="text" className="form-control" name='price' value={data.price} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6">
                            <label htmlFor="" className="form-label">Edition</label>
                            <input type="text" className="form-control" name='edition' value={data.edition} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
    </div>
  )
}

export default AddBook