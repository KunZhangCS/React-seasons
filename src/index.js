import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {
    // state = { lat: null, errorMessage: ''};

    // componentDidMount() {
    //     window.navigator.geolocation.getCurrentPosition(
    //         (position) => this.setState({lat: position.coords.latitude}),
    //         (err) => this.setState({ errorMessage: err.message})
    //     );
    // } 
    
    // const RenderContent = () => {
    //     if (errorMessage && !lat) {
    //         return <div>Error: {errorMessage}</div>
    //     }
        
    //     if (!errorMessage && lat){
    //         return <SeasonDisplay lat={lat}/>
    //     }
    
    //     return <Spinner  message="Please accept location request"/>;
    // }

    // return (
    //     <div className="border red">
    //         <RenderContent />
    //     </div>
    // );

    const [lat, errorMessage] = useLocation();

    let content;
    if (errorMessage) {
        content = <div>Error: {errorMessage}</div>
    } else if (lat) {
        content = <SeasonDisplay lat={lat} />
    } else {
        content = <Spinner message="Please accept location request" />
    }
    
    return <div className="border red">{content}</div>  
}

ReactDOM.render(
    <App />, document.querySelector("#root")
);
