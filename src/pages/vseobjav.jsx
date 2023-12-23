import Header from "../components//header";
import Footer from "../components/footer";
import React from 'react';
import Search from "../components/search";


function SearchP() {

    return (
        <div >
            <Header />
            <h1 className="text-center text-white bg-primary m-1">Поиск</h1>
            <Search />
            <Footer />
        </div>
    );
}
export default SearchP;