import Sidebar from "../../components/Sidebar";

const Listing = () => {
    return (
        <>
            <hr/>
        <section className="product_listing_page">
            <div className="container">
                <div className="product_listing d-flex">
                    <Sidebar/>
                    <div className="content_right">
                        content_right
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Listing;