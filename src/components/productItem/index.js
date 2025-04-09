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
                    <img src="https://www.inkbolt.in/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0672%2F0474%2F3306%2Ffiles%2Fdownload_cfdf3cc1-989c-4863-9561-8f1e6cce3286.jpg%3Fv%3D1744101857&w=256&q=100" alt='IMAGE' className="w-100" />
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