/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component,useRef,useState } from 'react';
import type {PropsWithChildren} from 'react';
import { SearchPage} from '../SearchPage/SearchPage';
import {
  Appearance,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { QRCodeReaderPage } from '../QRCodeReaderPage/QRCodeReader';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = Appearance.getColorScheme() === 'dark';
  const refs = useRef({QRPage:React.createRef(),
                       SearchPage: React.createRef(),
                       BookPage: React.createRef()})
  const [ActivePage, setActivePage] = useState("SearchPage");
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  function switchPageTo(pName: string){
    console.log(refs)
    refs.current[pName].current.toggle();
    refs.current[ActivePage].current.toggle();
    setActivePage(pName)
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <SearchPage isDarkMode={isDarkMode} pageSwitchF={(name)=>switchPageTo(name)} cref={refs.current.SearchPage}></SearchPage>
      <QRCodeReaderPage isDarkMode={isDarkMode} cref={refs.current.QRPage}></QRCodeReaderPage>
    </SafeAreaView>
  );
}



export default App;
