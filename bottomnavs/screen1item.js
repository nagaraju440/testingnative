import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

class Screen1item extends React.Component{
        render(){
            return(
                <View style={styles.container}>
                <StatusBar style="auto" />

                    <Text>hello screen2</Text>
                </View>
            )
        }
}
export default Screen1item;
const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: 'yellow',
     alignItems: 'center',
     justifyContent: 'center',
   },
});