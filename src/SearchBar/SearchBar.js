import React from 'react';

const SearchBar = (props) =>{
    return(
        <div className="ui segment" style={{marginTop : "10px"}}>
            <form className="ui form" onSubmit={props.handleFormSubmit}>
                <div className="field">
                    <label>{props.serchLabel}</label>
                    <input type="text" placeholder="Search..." value={props.searchText} onChange={props.handleSearchBarTextChange}/>
                </div>
            </form> 
        </div>
    );
}

export default SearchBar;