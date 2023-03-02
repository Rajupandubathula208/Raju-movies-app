import  React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeContainer from '../containers/home';
import ContactContainer from '../containers/contact';
import DetailsContainer from '../containers/details';
import MoviesContainer from '../containers/movies';
import TvSeriesContainer from '../containers/tvSeries';
import SearchContainer from '../containers/search';
import AboutContainer from '../containers/about';
import FooterComponent from '../components/footer';
import HeaderCompomemt from '../components/header';
const  RouteComponent = ()=>{

    return (
        <>
            <BrowserRouter>
              <HeaderCompomemt/>
                    <Routes>
                        <Route path="/" element={<HomeContainer />} />
                        <Route path='/about' element={<AboutContainer />} />
                        <Route path="/movies" element={<MoviesContainer />} />
                        <Route path="/series" element={<TvSeriesContainer />} />
                        <Route path="/search" element={<SearchContainer />} />
                        <Route path="/contact" element={<ContactContainer />} />
                        <Route path="/details/:movieid/:mediatype" element={<DetailsContainer />} />
                    </Routes>        
                  <FooterComponent/>
            </BrowserRouter>
        </>
    )
}

export default RouteComponent;