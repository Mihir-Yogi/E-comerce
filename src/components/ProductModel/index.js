import Dialog from '@mui/material/Dialog';
import { Button,Rating } from "@mui/material";
import { MdClose } from "react-icons/md";
import QuantityBox from '../QuantityBox';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { MdExpandMore } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import ProductZoom from '../ProductZoom';



const ProductModel = (props) => {

    return (
        <Dialog open={true} className='productModal' onClose={()=>props.closeProductModal()}>
            <Button className="close_" onClick={()=>props.closeProductModal()}><MdClose/></Button>
            
            <div className='row mt-2 productDetaileModal'>
                <div className='col-md-5'>

                <ProductZoom/>

                </div>
                <div className='col-md-7'>
                    <div className='d-flex align-item-center mr-4'>
                        <span> InkX</span>
                    </div>
                    <h4 className="mb-1">Product item Name <span className="badge modelbadge badge-primary">28%</span></h4> 
                    <p className="mt-2">Vivamus adipiscing nisl ut dolor dignisim semper.</p>
                    <div className='d-flex align-items-center'>
                    </div>
                    <div className='d-flex info info-price align-items-center'>
                        <span className='oldPrice lg mr-2 modelold'>₹399.00</span>
                        <span className='netPrice lg mr-2 modelnet '>₹249.00 </span>
                        <span className='netPrice text-danger lg modelsave'>Save ₹150.00</span>
                    </div>
                        <Rating name="read-only" value={4.5} size='small' precision={0.5} readOnly />
                    <hr />
                    <span className='badge bg-success mr-2'>IN STOCK</span>

                    <div className="size-box mb-2">
                        small - 2 inch
                    </div>

                    <div className='d-flex detailsFeatures'>
                    <FaLeaf className='mr-2 leaf' style={{color: "#88B04B"}}/><p>No Irritation. No Fading. Just Real AF Ink.</p>
                    </div>

                    <div className='d-flex align-items-center'>
                        <QuantityBox/>
                    <Button className='btn-blue btn-lg btn-big btn-round'>Add to Cart</Button>
                    </div>

                    <div className='align-items-center mt-3 mr-4'>
                        <div className='d-flex mb-1'>
                            <Accordion slotProps={{ heading: { component: 'h3' } }} className='detailsDrop'>
                            <AccordionSummary
                                expandIcon={<MdExpandMore />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                >
                                Accordion
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                                lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className='d-flex mb-1'>
                            <Accordion slotProps={{ heading: { component: 'h3' } }} className='detailsDrop'>
                            <AccordionSummary
                                expandIcon={<MdExpandMore />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                >
                                Accordion
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                                lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className='d-flex mb-1'>
                            <Accordion slotProps={{ heading: { component: 'h3' } }} className='detailsDrop'>
                            <AccordionSummary
                                expandIcon={<MdExpandMore />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                >
                                Accordion
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                                lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    );
}
export default ProductModel;