import { ArViewerView } from "react-native-ar-viewer";

import { Platform, View } from 'react-native';
import React, { forwardRef, useImperativeHandle, useState } from "react";

export const ARViewPage = forwardRef((props,ref)=>{
    const [visible,setVisible] = useState(false)
    useImperativeHandle(props.cref, () => ({
        toggle(){
            setVisible(!visible);
        }
    }))
    return visible? <ArViewerView 
    style={{width: "100%",height:"100%"}}
    model={Platform.OS === 'android' ? 'PeterHeadSimpleHairMesh.glb' : 'dice.usdz'}
    allowRotate
    allowScale
    allowTranslate

    onStarted={() => console.log('started')}
    onEnded={() => console.log('ended')}
    onModelPlaced={() => console.log('model displayed')}
    onModelRemoved={() => console.log('model not visible anymore')}
    planeOrientation="both" />:<View style={{display:"none"}}></View>
})