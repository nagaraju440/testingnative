import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

class Screen2 extends React.Component{

    c=()=>{
        var n=this.props.navigation
        console.log(n,"hiii andii")
        n.openDrawer();

    }
        render(){
            return(
                <View style={styles.container}>
                <StatusBar style="auto" />

                    <Text>hello screen2</Text>
                    <Button title="open" onPress={ this.c} />
                </View>
            )
        }
}
export default Screen2;
const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: 'yellow',
     alignItems: 'center',
     justifyContent: 'center',
   },
});