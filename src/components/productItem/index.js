import Rating from '@mui/material/Rating';
import { IoMdHeartEmpty } from "react-icons/io";
import { Button } from "@mui/material";
import ProductModel from '../ProductModel';
import { useState } from 'react';

const ProductItem = () => {

    const [isOpenProductModel, setIsOpenProductModel] = useState(false);
    const viewProductDetails = (id) => {
        setIsOpenProductModel(true);
    }

    const closeProductModal = () => {
        setIsOpenProductModel(false);
    }
    return (
        <>
        <div className="item productItem">
            <div className="imgWrapper">
                <div className="imgWrapperInner">
                    <img src="https://cmsimages.shoppersstop.com/Only_web_622bbd1f03/Only_web_622bbd1f03.png" alt='IMAGE' className="w-100" />
                    <span className="badge badge-primary">28%</span>
                </div>
                <div className="actionsquickView"  onClick={()=>viewProductDetails(1)}>
                    <Button style={{color: 'white'}}><span>Quick View</span></Button>
                </div>
                <div className='actions'>
                    <Button><IoMdHeartEmpty /></Button>
                </div>
            </div>
            <div className="info">
                <h4>Werther's Original Caramel Hard Candies</h4>
                <span className="text-success d-block">In Stock</span>
                <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5} />
                <div className="d-flex">
                    <span className="oldPrice">$20.00</span>
                    <span className="netPrice text-danger ml-3">$15.00</span>
                </div>
            </div>
        </div>

        {
            isOpenProductModel === true && <ProductModel closeProductModal={closeProductModal}/>
        }

        
        </>
    )
}

export default ProductItem;