import React from "react";
import { TextInput, View,Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Icon, { Button } from 'react-native-vector-icons/FontAwesome';
import { NavBookElement, NBEProps } from "../NavBookElement/NavBookElement";
import { QRCodeReaderPage } from "../QRCodeReaderPage/QRCodeReader";

const SearchBarStyle = {
    backgroundColor:"grey",
    width: "85%",
    padding: 10,
    borderRadius:5
}
type SearchPageState = {
    isDarkMode: boolean,
    SearchViewStyle,
    searchResults:Array<NBEProps>,
    pageSwitchF
};
type SearchPageProps = {
    isDarkMode: boolean,pageSwitchF
}
export class SearchPage extends React.Component<SearchPageProps,SearchPageState>{
    state: SearchPageState

    constructor(props:SearchPageProps){
        super(props);
        this.state = 
            {
                isDarkMode: props.isDarkMode,
                SearchViewStyle: {
                    backgroundColor:props.isDarkMode ? "dark":Colors.lighter,
                    padding: 15,
                    height: "100%",
                },
                pageSwitchF: props.pageSwitchF,
                searchResults: []
            }
    }
    doSearch(e){
        this.setState((state)=>({
            searchResults: [...state.searchResults,{id:"1",name:JSON.stringify(e),img:3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]
            })
        )
    }
    render(): React.ReactNode {
        return (<View style={this.state.SearchViewStyle}>
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
            <TextInput placeholder="Поиск" style={SearchBarStyle} onEndEditing={(e)=>this.doSearch(e.nativeEvent.text)}></TextInput>
            <View style={{width:"15%"}} onTouchEnd={()=>{this.state.pageSwitchF(<QRCodeReaderPage></QRCodeReaderPage>)}}><Icon name="qrcode" size={40} style={{margin:5,marginLeft:10}}></Icon></View>
            </View>
            <View style={{overflow:"scroll"}}>
                {this.state.searchResults.length?this.state.searchResults.map((p, index) => 
                (<NavBookElement key={index} id={p.id} name={p.name} img={p.img} description={p.description}></NavBookElement>)):
                <Text>Ничего не найдено</Text>}
            </View>
        </View>)
    }
}