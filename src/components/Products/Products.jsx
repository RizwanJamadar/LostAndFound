import React from 'react'
import './products.css'
import SearchIcon from '@mui/icons-material/Search';
import product1 from '../../data'
import { useNavigate } from 'react-router-dom';


const Products = () => {
  const navigate = useNavigate()
  return (
    <div className='products'>
      <div className='table'>
        <div className='table__header'>
          <h1>All Products</h1>
          <div class="input-group">
            <input type="search" placeholder="Search Data..." />
            <SearchIcon
              sx={{
                fontSize:"30px",
                paddingRight:"1rem",
                cursor:"pointer",
                fontWeight:"bold"
              }}
            />
          </div>
        </div>
        <div className='table__body'>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Color</th>
                <th>Model</th>
                <th>Found In</th>
                <th>Room No</th>
                <th>Category</th>
              </tr>
            </thead>

            <tbody>
              {
                product1.map((item) => (
                  <tr onClick={()=>navigate("/products/123")}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.color}</td>
                    <td>{item.model}</td>
                    <td>{item.foundIn}</td>
                    <td>{item.roomNo}</td>
                    <td>{item.category}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default Products