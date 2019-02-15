import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component{
    onSearchSubmit(term){
        axios.get("https://api.unsplash.com/search/photos", {
            params: {query: term},
            headers:{
                Authorization: "Client-ID 6524243b1c058c99e8bb916eca67ad5b47ca167f29d574e5e95f8d491ea228d2"
            }
        });
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: "20px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div >
        );
    }
}


export default App;