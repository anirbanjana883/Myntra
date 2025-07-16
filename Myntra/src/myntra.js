import React, { useState } from "react";
import ReactDom from "react-dom/client";
import Card from "./component/Card";
import Header from "./component/Header";            
import Footer from "./component/Footer";
import products from "./utils/DummyData";

function App() {
    const [sortedProducts, setSortedProducts] = useState(products);

    function sortArray() {
        // Make a copy of products, sort by price
        const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
        setSortedProducts(sorted); 
        console.log("Sorted:", sorted);
    }

    return (
        <>
            <div>
                <Header />
                <button onClick={sortArray} className="sort-button">Sort By Price</button>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "10px" }}>
                {sortedProducts.map((product, index) => (
                    <Card 
                        key={index}
                        cloths={product.cloths}
                        offers={product.offers}
                        imageUrl={product.imageUrl}
                        price={product.price}
                    />
                ))}
            </div>

            <div>
                <Footer />
            </div>
        </>
    );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
