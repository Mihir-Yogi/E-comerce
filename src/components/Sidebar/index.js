
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import 'react-range-slider-input/dist/style.css';
import { useState } from "react";

const Sidebar = () => {
    const [value,setValue] = useState([100, 60000]);
    const [value2, setValue2] = useState(0);
    return(
        <div className="sidebar">
            <div className="filterBox">
                <h5>PRODUCT CATEGORIES</h5>
                <div className="scroll">
                    <ul>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Semi-Permanent Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Temporary Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="UV Reactive Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Fragrance Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Scratch & Reveal Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Custom Design Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Kids Tattoos (Safe & Fun)"/>
                        </li>



                        
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Semi-Permanent Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Temporary Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="UV Reactive Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Fragrance Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Scratch & Reveal Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Custom Design Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Kids Tattoos (Safe & Fun)"/>
                        </li>

                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Semi-Permanent Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Temporary Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="UV Reactive Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Fragrance Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Scratch & Reveal Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Custom Design Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Kids Tattoos (Safe & Fun)"/>
                        </li>

                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Semi-Permanent Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Temporary Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="UV Reactive Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Fragrance Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Scratch & Reveal Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Custom Design Tattoos"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="Kids Tattoos (Safe & Fun)"/>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="filterBox mr-2">
                <h5>FILTER BY PRICE</h5>

                <RangeSlider value={value} onInput={setValue} min={100} max={60000} step={5} />

                <div className="d-flex pt-2 pb-2 priceRange">
                    <span>From: <strong className="text-dark"> Rs: {value[0]}</strong></span>
                    <span className="ml-auto">From: <strong className="text-dark"> Rs: {value[1]}</strong></span>
                </div>
            </div>

            <div className="filterBox">
                <h5>PRODUCT STATUS</h5>
                <div className="scroll">
                    <ul>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="IN STOCK"/>
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked/>} label="ON SALE"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );

}

export default Sidebar;