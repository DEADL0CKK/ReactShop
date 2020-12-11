import React from "react";

const cart = ({ product}) => {
    const { title, description, category, image, price } = product;
    return (
        <div>
            <div className="product-header">
                <img src={image} alt={title} />
            </div>
            <div className="product_content">
                <div>
                    <label>
                        <h3>Title:</h3>
                        {title}
                    </label>
                    <label>
                        <h4>Description :</h4>
                        {description}
                    </label>
                </div>
                <div>
                    <ul>
                        <li>{category}</li>
                    </ul>
                </div>
            </div>
            <div className="product-footer">
                <h3>{price}$</h3>
                <select>
                    <option value={1} key="1">1</option>
                    <option value={2} key="2">2</option>
                    <option value={3} key="3">3</option>
                    <option value={4} key="4">4</option>
                    <option value={5} key="5">5</option>
                </select>
                <button onClick={addToCart}>Add to cart<i></i></button>
            </div>
        </div>
    );
};

export default memo(Product);
