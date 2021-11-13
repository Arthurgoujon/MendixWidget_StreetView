import { Component, createElement } from "react";
import ReactStreetview from 'react-streetview';

const googleMapsApiKey = 'API KEY'; //this key is disabled

export class View extends Component {
    render() {

        // const latitude = parseFloat(this.props.latitude);
        // const longitude = parseFloat(this.props.longitude);

        const latitude =  52.474874;
        const longitude = -1.881274;

        const streetViewPanoramaOptions = {
            position: { lat: latitude, lng: longitude },
            pov: { heading: 100, pitch: 0 },
            zoom: 1
        };g

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
