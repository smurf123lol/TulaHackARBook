import React from "react";
import { TextInput, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const SearchBarStyle = {
    backgroundColor:"grey",
    width: "95%",
    padding: 10,
    borderRadius:5,
    marginLeft:"auto",
    marginRight:"auto"
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
                    height: "100%"
                }
            }
    }

    render(): React.ReactNode {
        return (<View style={this.state.SearchViewStyle}>
            <TextInput placeholder="Поиск" style={SearchBarStyle}></TextInput>
        </View>)
    }
}