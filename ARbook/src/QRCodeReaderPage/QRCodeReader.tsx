import React from "react";
import { View,Text } from "react-native";
import {Camera, getCameraDevice} from "react-native-vision-camera"

export class QRCodeReaderPage extends React.Component{
    
    render(): React.ReactNode { 
        return(
            <View><Camera style={{}}
            device={Camera.getAvailableCameraDevices()[0]}
            isActive={true}
      ></Camera></View>
        )
    }
}