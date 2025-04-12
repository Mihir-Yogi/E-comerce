import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { Button } from '@mui/material';
import { FiUser } from 'react-icons/fi';
import { IoBagOutline } from 'react-icons/io5';
import SearchBox from './SearchBox';
import Navigation from './Navigation';


const Header = () => {
    return (
        <div className="headerWrapper">
            <header className="header">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-10 mt-3 d-flex align-items-center part2">

                            <div className="logoWrapper d-flex align-items-center" style={{ marginRight: '10px' }}>
                                <Link to={"/"}><img src={logo} alt="" /></Link>
                            </div>
                                {/* Header Search starts here */}
                                    <SearchBox/>
                                {/* Header Search End here */}

                                <div className="part3 d-flex align-items-center ml-auto" style={{gap: "10px"}}>
                                    <div className='ml-auto cartTab'>
                                        <div className='position-relative ml-2'>
                                            <Button className='circle'><IoBagOutline/></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>
                                    <Button className='circle ml-2'><FiUser/></Button>
                                </div>
                            </div>
                        </div>
                    </div>
            </header>

            <Navigation/>

        </div>
    )
}

export default Header;