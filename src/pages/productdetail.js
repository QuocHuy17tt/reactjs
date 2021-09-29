import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ProAPI from '../api/ProAPI';

const ProductDetail = () => {
    const { id } = useParams();
    const [ products , setProducts ] = useState({});
    useEffect(() => {
    //call api
    const getProducts = async () => {
        try {
            const { data } = await ProAPI.get(id)
            setProducts(data);
        } catch (error) {
            
        }
    }
    getProducts();
    }, [])

    return (
        <div>
             <div>
  <div className="breacrumb-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-text">
            <a><i className="fas fa-home" /> Home</a>
            <span>Product Detail</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br /><br />
  <div className="row">
    <div className="col-6">
      <img src={`http://localhost:4000/api/product/photo/${products._id}`} height="500px" />
    </div>
    <div className="col-6">
      <h1>{products.name}</h1>
      <br />
      <h3>Giá : {products.price}</h3>
      <br />
      <h4>Thông tin sản phẩm : <br/><br/><p>{products.description}</p></h4>
      <br />
      <a href="#" className="btn btn-warning">Add To Cart</a>
      <br /><br />
     
    </div>
  </div><hr/>
  <div>
  <form className="send">
        <input type="text" placeholder="Nhập bình luận..." name="nd_bl" required /><br/>
        <input type="submit" defaultValue="Send" name="btn_luu" className="btn btn-warning"/>
      </form>
    </div>
</div>

        </div>
    )
}

export default ProductDetail
