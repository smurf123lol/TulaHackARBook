import React from "react";
import { View,Text,Image, Dimensions } from "react-native";

type NBEState = {
    id,
    name,
    img,
    description
}
export type NBEProps = {
    id,
    name,
    img,
    description
}
export class NavBookElement extends React.Component<NBEProps,NBEState>{
    state:NBEState
    constructor(props:NBEProps){
        super(props);
        this.state ={
            id: props.id,
            name: props.name,
            img:props.img,
            description:props.description
        }
    }
    render(): React.ReactNode {
        return(<View style={{flexDirection:'row',flexWrap:'wrap', padding:7}}>
            <Image style={{width:Dimensions.get("window").width*0.3,
                           height:Dimensions.get("window").width*0.423,
                           backgroundColor:"white"}}
            source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}></Image>
            <View style={{width:"65%",padding:5}}>
                <Text style={{fontSize:20}}>{this.state.name}</Text>
                <Text numberOfLines={6}>{this.state.description}</Text>
            </View>
        </View>)
    }
}