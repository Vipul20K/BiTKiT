import React, { useEffect } from 'react';
import Navbar from "../../components/Navbar";
import Banner from './Banner';
import Developer from './Developer';
import Footer from '../../components/Footer';
import Review from "./Review";
function Home() {

    return (
        <>
            {/* <Navbar /> */}
            <div
                className="w-full bg-cover bg-center bg-no-repeat h-[50vh] md:h-[70vh]"
                style={{ backgroundImage: "url('/banner1.jpeg')" }}
            >
                <Banner />
            </div>
            <Developer />
            <Review />
            {/* <Footer /> */}
        </>
    );
}

export default Home;
