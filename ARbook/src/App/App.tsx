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
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { QRCodeReaderPage } from '../QRCodeReaderPage/QRCodeReader';
import { ARViewPage } from '../ARViewPage/ARViewPage';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = Appearance.getColorScheme() === 'dark';
  const refs = useRef({QRPage:React.createRef(),
                       SearchPage: React.createRef(),
                       ARPage: React.createRef()})
  const [ActivePage, setActivePage] = useState("SearchPage");
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  function switchPageTo(pName: string){
    console.log(refs)
    if(ActivePage == pName)return
    refs.current[pName].current.toggle();
    refs.current[ActivePage].current.toggle();
    setActivePage(pName)
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <SearchPage isDarkMode={isDarkMode} pageSwitchF={(name)=>switchPageTo(name)} cref={refs.current.SearchPage}></SearchPage>
      <QRCodeReaderPage isDarkMode={isDarkMode} cref={refs.current.QRPage} pageSwitchF={(name)=>switchPageTo(name)}></QRCodeReaderPage>
      <ARViewPage pageSwitchF={(name)=>switchPageTo(name)} cref={refs.current.ARPage}></ARViewPage>
    </SafeAreaView>
  );
}



export default App;
