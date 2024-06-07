import React from 'react'
import Navbar from './Navbar'

const ViewBook = () => {
  return (
    <div>
        <Navbar/>
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
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Gullivers</th>
      <td>Fiction</td>
      <td>1976</td>
      <td>Rs 500</td>
    </tr>
    <tr>
      <th scope="row">Wuthering Heights</th>
      <td>Biography</td>
      <td>1984</td>
      <td>Rs 540</td>
    </tr>
    <tr>
      <th scope="row">Pride and Prejudice</th>
      <td>Bibliograpgy</td>
      <td>1989</td>
      <td>Rs 600</td>
    </tr>
    <tr>
      <th scope="row">To Kill a Mockingbird</th>
      <td>Fiction</td>
      <td>1977</td>
      <td>Rs 670</td>
    </tr>
    <tr>
      <th scope="row">Jane Eyre</th>
      <td>Bibliography</td>
      <td>1985</td>
      <td>Rs 460</td>
    </tr>
    <tr>
      <th scope="row">The House of Mirth</th>
      <td>Biography</td>
      <td>1971</td>
      <td>Rs 880</td>
    </tr>
    <tr>
      <th scope="row">Moby Dick</th>
      <td>Fiction</td>
      <td>1983</td>
      <td>Rs 700</td>
    </tr>
    <tr>
      <th scope="row">David Copperfield</th>
      <td>Fiction</td>
      <td>1967</td>
      <td>Rs 750</td>
    </tr>
   
    
  </tbody>
</table>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ViewBook