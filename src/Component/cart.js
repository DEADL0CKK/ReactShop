import React from "react";

const cart = ({ product}) => {
    
    return (
        <div>
            <div className="product-header">
            </div>
            <div className="product_content">
                <div>
                    <label>
                        <h3>Title:</h3>
                     
                    </label>
                    <label>
                        <h4>Description :</h4>
                       
                    </label>
                </div>
            </div>
            <div className="product-footer">
                <h3>$</h3>
                <select>
                    <option value={1} key="1">1</option>
                    <option value={2} key="2">2</option>
                    <option value={3} key="3">3</option>
                    <option value={4} key="4">4</option>
                    <option value={5} key="5">5</option>
                </select>
                <button >Add to cart<i></i></button>
            </div>
        </div>
    );
};

export default cart;
