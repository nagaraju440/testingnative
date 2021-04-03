import React from 'react';
import Button from '@ant-design/react-native/lib/button';
// import fire from './firebase'
import { TextInput,View,Text} from 'react-native';
// import auth from '@react-native-firebase/auth';
// import fire from './config/firebase'
import * as firebase from 'firebase'
import '@firebase/firestore';
import fire from './config/firebase1'
import {API_KEY,m} from '@env'
// import { Button, InputItem, List } from '@ant-design/react-native';
var db = firebase.firestore();
var data=db.collection('item').doc('na');
data.get()
.then(res=>{console.log(res.data(),"hiiiii alllll")})
db.collection("cities").doc("LA").set({
    name: "Nagarajuuuu",
    state: "llllllllllllllllllllll",
    country: "huhuhuhuuuuuuhuhuhuhuhuhuhuuuhhuu"
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
// import firestore from '@react-native-firebase/firestore';
class Log extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render() { 
        // console.log(API_KEY,m,"hssslooo")
        // var pass="123456";
        // var email="5@gmail.com";
        // fire.auth().createUserWithEmailAndPassword(email,pass)
        // .then(()=>{console.log("sucsesfulyy signup")})
        return ( 
            <View>
                <Text>hiiilooooooo</Text>
                {/* <Button>click me  </Button> */}
            </View>
         );
    }
}
 
export default Log;
