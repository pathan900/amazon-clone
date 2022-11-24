import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_img" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg" alt="" />
                <div className="home_row">
                    <Product id="1" title="OnePlus Nord 5G (Gray Onyx, 8GB RAM, 128GB Storage)" price={27999} image="https://images-eu.ssl-images-amazon.com/images/I/71gag816F7L._AC_UL200_SR200,200_.jpg" rating={5} />
                    <Product id="2" title="Acer Predator Triton Intel i5 10th Gen 15.6 FHD IPS 144 Hz Display Full Metal Thin & Light Gaming Laptop (8GB RAM/512GB SSD/Win10/GTX 1650Ti Graphics/19.9mm Thin/Abyssal Black), PT315-52" price={74990} image="https://images-na.ssl-images-amazon.com/images/I/81EiTAEiBxL._SL1500_.jpg" rating={4} />


                </div>
                <div className="home_row">
                    <Product id="3" title="
Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black" price={799} image="https://images-na.ssl-images-amazon.com/images/I/51kdFjyPRAL._SL1500_.jpg" rating={5} />

                    <Product id="4" title="
boAt Airdopes 441 TWS Ear-Buds with IWP Technology, Immersive Audio, Up to 30H Total Playback" price={2499} image="https://images-na.ssl-images-amazon.com/images/I/61-1B-m03bL._SL1500_.jpg" rating={4} />
                    <Product id="5" title="Bourge Men's Vega-3 Running Shoes" price={700} image="https://images-na.ssl-images-amazon.com/images/I/819agPzrzFL._UY695_.jpg" rating={4} />
                    
                </div>
                <div className="home_row">
                    <Product id="7" title="
Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)" price={4499} image="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SL1000_.jpg" rating={5} />
                </div>
            </div>
        </div>
    );
}

export default Home;