import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function VerseBoxHomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.middleTitle}>
                <Text style={styles.header}>VerseBox</Text>
                <Text style={styles.subTitle}>A simple application for<br></br>storing your Bible verses</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Made by JBruce</Text>
                <Text style={styles.footerText}>@supimjbruce</Text>
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

    middleTitle: {
      flex: 1,
      justifyContent: 'center'
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