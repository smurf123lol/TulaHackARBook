import React, { forwardRef, useImperativeHandle, useState } from "react";
import { TextInput, View,Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavBookElement, NBEProps } from "../NavBookElement/NavBookElement";

const SearchBarStyle = {
    backgroundColor:"grey",
    width: "85%",
    padding: 10,
    borderRadius:5
}
type SearchPageState = {
    isDarkMode: boolean,
    searchResults:Array<NBEProps>,
    pageSwitchF:any
};
type SearchPageProps = {
    isDarkMode: boolean,pageSwitchF:any,cref
}
export const SearchPage = forwardRef((props:SearchPageProps,ref)=>{
    useImperativeHandle(props.cref, () => ({
        toggle(){
            setpStyle({...pstyle,display:pstyle.display=="none"?"block":"none"})
            console.log(pstyle.display)
        }
    }))

    const [pstyle,setpStyle] = useState({
        backgroundColor:props.isDarkMode ? "dark":Colors.lighter,
        padding: 15,
        height: "100%", 
        display: "block"
    })
    const [state,setState] = useState<SearchPageState>({
        isDarkMode: props.isDarkMode,
        pageSwitchF: props.pageSwitchF,
        searchResults: []
    })

        
    function doSearch(e){
        setState({...state,
            searchResults: [...state.searchResults,{id:"1",name:JSON.stringify(e),img:3,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            ],
            })
    }
    return (<View style={pstyle}>
        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
        <TextInput placeholder="Поиск" style={SearchBarStyle} onEndEditing={(e)=>doSearch(e.nativeEvent.text)}></TextInput>
        <View style={{width:"15%"}} onTouchEnd={()=>{state.pageSwitchF("QRPage")}}><Icon name="qrcode" size={40} style={{margin:5,marginLeft:10}}></Icon></View>
        </View>
        <View style={{overflow:"scroll"}}>
            {state.searchResults.length?state.searchResults.map((p, index) => 
            (<NavBookElement key={index} id={p.id} name={p.name} img={p.img} description={p.description}></NavBookElement>)):
            <Text>Ничего не найдено</Text>}
        </View>
    </View>)
})