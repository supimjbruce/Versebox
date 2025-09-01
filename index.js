/* Versebox */
/* Home Page [index.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function VerseBoxHomeScreen() {

  const BibleVerse = ({verse}) => {
    return (
      <View>
        <Text>{verse}</Text>
      </View>
    );
  };

  const StackOfVerses = () => {
    return (
      <View>
        <BibleVerse verse="2 Peter 1:3" />
        <BibleVerse verse="John 3:16" />
      </View>
    );
  };

    return (
        <View style={styles.container}>
            <View style={styles.verseBox}>
              <StackOfVerses />
            </View>
            <View style={styles.footer}>
              <View /*style={styles.middleTitle}*/>
                  <Text style={styles.header}>Versebox</Text>
                  <Text style={styles.subTitle}>A simple application for<br></br>storing your Bible verses</Text>
              </View>
              <View>
                  <Text style={styles.footerText}>Made by JBruce</Text>
                  <Text style={styles.footerText}>@supimjbruce</Text>
              </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3396D3',
    },

    /*middleTitle: {
      justifyContent: 'center'
    },*/

    verseBox: {
      height: '40%',
      width: '80%',
      backgroundColor: '#C6D870',
      marginBottom: 25,
    },

    header: {
      textAlign: 'center',
      /*fontFamily: - Get a different font in here than the basic font. */
      fontSize: 48,
      fontWeight: 1000,
      color: 'white',
    },

    subTitle: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 500,
      color: 'white',
    },

    footer: {
      marginBottom: 25,
    },

    footerText: {
      textAlign: 'center',
      fontSize: 14,
      color: 'white',
    },
});