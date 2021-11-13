import { Component, createElement } from "react";
import { View } from "./components/view";

import "./ui/StreetView.css";

class StreetView extends Component {
    render() {
        return <View  
                    latitude={this.props.latitude.value || 0} 
                    longitude={this.props.longitude.value || 0} />;
    }
}

export default StreetView;