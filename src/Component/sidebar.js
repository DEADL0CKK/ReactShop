import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css"

const Sidebar = ({
    handleSearch,
    handlePrice,
    handleCategories,
    listCategories,
    pricevalue,
    priceparam
}) => (
    <div>
        <form id="sidebar" name="sidebar">
            <div id="searchzone" name="searchzone">
                <label>
                    Search : <br />
                    <input
                        type="text"
                        id="search"
                        name="search"
                        onChange={handleSearch}
                    />
                </label>
            </div>
            <div id="categorieszone" name="categorieszone">
                {listCategories ? (
                    listCategories.map((el) => {
                        return (
                            <label key={el._id} >
                                {el.name} :
                                <input
                                    type="checkbox"
                                    name={el.id}
                                    id={el.id}
                                    onChange={handleCategories}
                                    value={el.name}
                                />
                            </label>
                        );
                    })
                ) : (
                    <span>No categories found</span>
                )}
            </div>
            <div id="pricezone" name="pricezone">
                <InputRange
                    name="price"
                    draggableTrack
                    minValue={priceparam[1]}
                    maxValue={priceparam[0]}
                    value={pricevalue}
                    onChange={handlePrice}
                />
            </div>
        </form>
    </div>
);

export default Sidebar;
