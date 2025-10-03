/* Versebox */
/* Title Screen [./screens/titleScreen.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TitleScreen() {
  //Put the onPress function here

    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.appTitle}>Versebox</Text>
            <Text>A simple application for<br></br>storing your Bible verses</Text>
            <br />
            <Text></Text>
            <Text>Made by JBruce</Text>
            <Text>@supimjbruce</Text>
          </View>
          // Put a button here to go into the app
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'teal',
    },

    appTitle: {
      color: 'peachpuff',
      fontSize: 60,
      fontWeight: '1000',
      textAlign: 'center',
    },
});