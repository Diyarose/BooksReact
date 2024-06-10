import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewBook = () => {
  const [data,changeData]=useState(
    [{
      "title":"sds",
      "category":"dsgd",
      "pubyear":"adsa",
      "author":"dsd",
      "bookdesc":"sdsd",
      "disname":"dsds",
      "pubname":"asa",
      "price":"asas",
      "edition":"asas"
  }]
  )
  return (
    <div>
      <Navbar />
      <h1><center><i>VIEW BOOKS</i></center></h1>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Book Title</th>
                  <th scope="col">Category</th>
                  <th scope="col">Published Year</th>
                  <th scope="col">Author</th>
                  <th scope="col">Book Descriptionm</th>
                  <th scope="col">Distributor name</th>
                  <th scope="col">Publisher Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Edition</th>
                </tr>
              </thead>
              <tbody>
                
                {data.map(
                  (value,index)=>{
                    return <tr>
                    <th scope="row">{value.title}</th>
                    <td>{value.category}</td>
                    <td>{value.pubyear}</td>
                    <td>{value.author}</td>
                    <td>{value.disname}</td>
                    <td>{value.bookdesc}</td>
                    <td>{value.pubname}</td>
                    <td>{value.price}</td>
                    <td>{value.edition}</td>
                  </tr>
                  }
                )}
                


              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ViewBook