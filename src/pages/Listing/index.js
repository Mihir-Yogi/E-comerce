import Sidebar from "../../components/Sidebar";
import Button from "@mui/material/Button";
import { MdMenu } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineViewCompact } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import ProductItem from "../../components/productItem";
import Pagination from "@mui/material/Pagination";

const Listing = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [productView, setProductView] = useState('four');
    const openDropdown = Boolean (anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseDropdown = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <hr/>
        <section className="product_listing_page">
            <div className="container">
                <div className="product_listing d-flex">
                    <Sidebar/>
                    <div className="content_right">
                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg"/>
                        
                        <div className="showby mt-3 mb-3 d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center btnWrapper">
                                <Button className={productView==='one' && 'act'} onClick={()=>setProductView('one')}><MdMenu/></Button>
                                <Button className={productView==='three' && 'act'} onClick={()=>setProductView('three')}><CgMenuGridR/></Button>
                                <Button className={productView==='four' && 'act'} onClick={()=>setProductView('four')}><MdOutlineViewCompact/></Button>
                            </div>

                            <div className="showbyfilter">
                                <Button onClick={handleClick}>Show 9 <FaAngleDown/></Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={openDropdown}
                                    onClose={handleCloseDropdown}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                    >
                                    <MenuItem onClick={handleCloseDropdown}>Show 9</MenuItem>
                                    <MenuItem onClick={handleCloseDropdown}>Show 18</MenuItem>
                                    <MenuItem onClick={handleCloseDropdown}>Show 27</MenuItem>
                                    <MenuItem onClick={handleCloseDropdown}>Show 36</MenuItem>
                                </Menu>
                            </div>
                        </div>
                        <div className="productListing">
                            <ProductItem itemView={productView}/>
                            <ProductItem itemView={productView}/>
                            <ProductItem itemView={productView}/>
                            <ProductItem itemView={productView}/>
                            <ProductItem itemView={productView}/>
                        </div>


                        <div className="d-flex align-item-center justify-content-center mt-5">
                            <Pagination count={10} color="primary"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Listing;