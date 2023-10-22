import React, { cloneElement, forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { View,Text } from "react-native";
import {Camera, useCameraDevice, useCameraPermission, useCodeScanner} from "react-native-vision-camera"

export const QRCodeReaderPage = forwardRef((props,ref)=>{
    const device = useCameraDevice('back')
    
    useImperativeHandle(props.cref, () => ({
        toggle(){
            setpStyle({...pstyle,display:pstyle.display == "none"?"block":"none"})
            setActive(!active);
        }
    }))
    const [pstyle,setpStyle] = useState({
        display:"none",
        width:"100%",
        height:"100%"
    })
    const [active,setActive] = useState(false)

    if (device == null) return <Text>Камера не найдена</Text>
    const { hasPermission, requestPermission } = useCameraPermission()
    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
            console.log(codes.length);
          codes.forEach(code => {
            console.log(code);
          });
        }
      })
      
      return <Camera vstyle={pstyle} codeScanner={codeScanner} style={pstyle}
      device={device}
      isActive={active}/>
})