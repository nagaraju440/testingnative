import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

class Screen4 extends React.Component{

        render(){
            return(
                <View style={styles.container}>
                <StatusBar style="auto" />

                    <Text>hello screen4</Text>
                    <Button title="open" 
                     />
                </View>
            )
        }
}
export default Screen4;
const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: 'yellow',
     alignItems: 'center',
     justifyContent: 'center',
   },
});