import { Component, createElement } from "react";
import ReactStreetview from 'react-streetview';

const googleMapsApiKey = 'AIzaSyD4BXZerACfMj8nKD9x3gOq5cibevb_4PU';

export class View extends Component {
    render() {

        // const latitude = parseFloat(parseFloat(this.props.latitude).toString());
        // const longitude = parseFloat(parseFloat(this.props.longitude).toString());

        const latitude =  52.474874;
        const longitude = -1.881274;
        // 52.474874
        const streetViewPanoramaOptions = {
            position: { lat: latitude, lng: longitude },
            pov: { heading: 100, pitch: 0 },
            zoom: 1
        };

        return (
            <div style={{
                width: '100%',
                height: '450px',
                backgroundColor: '#eeeeee'
            }}>
                <ReactStreetview
                    apiKey={googleMapsApiKey}
                    streetViewPanoramaOptions={streetViewPanoramaOptions}
                />
            </div>)
        // return (
        //     <div>
        //         <input type="text" value={latitude} />
        //         <input type="text" value={longitude} />
        //         <input type="text" value={typeof latitude} />
        //     </div>
        // )
    }
}
