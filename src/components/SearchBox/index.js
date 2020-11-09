import React, { useContext } from "react";
import "./SearchBox.css";
import DataAreaContext from "../../utils/DataAreaContext";

const SearchName = () => {
    const context = useContext(DataAreaContext);

    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control form-control-sm"
                    type="search"
                    placeholder="Name"
                    aria-label="Search"
                    onChange={e => context.handleSearchChange(e)}/>
                <button className="btn my-2 my-sm-2 btn-sm" type="submit">Search</button>
            </form>
        </div>
    );
}
export default SearchName;