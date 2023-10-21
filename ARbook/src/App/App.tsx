/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component,useState } from 'react';
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

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = Appearance.getColorScheme() === 'dark';
  
  const [ActivePage, setActivePage] = useState(<SearchPage isDarkMode={Appearance.getColorScheme() === 'dark'}></SearchPage>);
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <SafeAreaView style={backgroundStyle}>
      {ActivePage}
    </SafeAreaView>
  );
}



export default App;
