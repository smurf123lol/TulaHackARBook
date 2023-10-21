import React from "react";
import { TextInput, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBarStyle = {
    backgroundColor:"grey",
    width: "85%",
    padding: 10,
    borderRadius:5
}
type SearchPageState = {
    isDarkMode: boolean,
    SearchViewStyle
};
type SearchPageProps = {
    isDarkMode: boolean
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
                }
            }
    }

    render(): React.ReactNode {
        return (<View style={this.state.SearchViewStyle}>
            <View style={{flexDirection:'row',flexWrep:'wrap'}}>
            <TextInput placeholder="Поиск" style={SearchBarStyle}></TextInput>
            <Icon name="qrcode" size={40} style={{width:"10%",margin:5,marginLeft:10}}></Icon>
            </View>
        </View>)
    }
}