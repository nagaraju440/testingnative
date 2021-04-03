import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,ScrollView } from 'react-native';
// // import About from './about'
import About from './about'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Navigation } from 'react-native-navigation';
import {connect} from 'react-redux' 
// import store from './redux'
import axios from 'axios'

const Stack = createStackNavigator();
var time=0;
var goo;
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            x:0,
            y:0,
            m:0,
            n:0,
            mn:0,
            da:0,
        }
    }
    componentDidMount=()=>{
    //   console.log("hii andiii")

//  fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => {console.log(data)
//     console.log("hiiiiiiiiiiiiiiii")
//        this.state.y=JSON.stringify(data)
//        this.setState({y:this.state.y})
//        console.log(this.state.y,"hiiiiiii")
// })
// .catch(err=>console.log("errro"))
  
   
      
    }
    click=()=>{
        // var emsil=docume.value
        // var pass=di.ba
        // var obj={email,pass}
        this.props.click1(obj);
        // console.log("state iss",store.getState())
        // console.log(this.props.navigation)
        // navigation=this.props;
        var n=this.props.navigation
        // this.props.clicked();
        this.setState({m:1})
        // time=time+1;
        // n.navigate('Profile', { name: 'Jane' })
        if(this.state.x==0){
            this.setState({x:1})     
        }
        if(this.state.x==1){
            this.setState({x:0}) 
        }
            console.log("clickedd")  
            axios.get('https://backened1.herokuapp.com/data')
            .then(res=>{
                // console.log(res.data)
                this.state.y=JSON.stringify(res.data)
        //    console.log(this.state.y,"hiiiiiii")
           this.setState({y:this.state.y})
                // console.log("hiiiiiiii")
            })
            const article = { title: 'React Hooks POST Request Example' };
        // this.state.n=this.state.n+1;

            axios.post('https://backened1.herokuapp.com/hehe',JSON.stringify(article))
            .then(res=>{console.log("hehehehehhe",res.data)}) 
            .catch(err=>{console.log(err,"error hiii")}
            )   
        //    setTimeout(()=>{
            //    console.log("hiii andiiiiiiiiiiiiiiiiii")
            axios.get('https://backened1.herokuapp.com/hehe')
            .then(res=>{
                console.log("res isssss",res.data)
                this.setState({da:JSON.stringify(res.data)})
            }) 
        //    },1000)
    //  this.goo(); 
   this.goto()  
    //   const res=await axios.get('http://192.168.43.236:3000/hehe')
        //  .then(res=>{
        //      console.log(res.data)
        //      this.setState({n:JSON.stringify(res.data)})

        //  })
            // axios.get('http://192.168.43.236:5000/wholeitems')
            // .then(res=>{console.log(res.data,"my dataaaa")}) 
    }
    goto=()=>{
        this.state.mn=this.state.mn+1;
        this.state.n=this.state.n+1;
        // console.log("sravaniii")
        console.log("clicked raaa",this.state.mn)
    }
    //  goo=async()=>{
    //     // console.log("hrhrhhrhrhrhh,hiii andiiiiii")
    //     const article = { title: 'React Hooks POST Request Example' };
    //   const res=await axios.post('http://192.168.43.236:3000/hehe',article)
      
    //   this.setState({n:JSON.stringify(res.data)})
    // }
    render(){
    // console.log("time iss",time)    

        return(
            <View>
                <Text>hello home</Text>
                <StatusBar style="auto" />
                <Button
                onPress={this.click}
                title="hoo hi uhuhu"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />   
       <Text>{this.state.x===0?"hehehuhuuhuh":<About/>}</Text>
       {/* <Text>{store.getState().x}</Text> */}
       <Text>{time}</Text>
       {/* <ScrollView style={{height:500}>
       <Text >{this.state.y}</Text>
        </ScrollView> */}
    {/* //    </ScrollView> */}
    <ScrollView>
       {/* <Text >{this.state.y}</Text> */}
       <Text>{
           this.state.y===0 && this.state.m===1?"please wait loading your information":this.state.y
           }</Text>
        
<Text>{this.state.n}have a look</Text>
<Text>{this.state.mn}vammo</Text>
<Text>data is {this.state.da}</Text>
    </ScrollView>
       {/* <Text>{this.state.y}</Text> */}

       
            </View>
       
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return({
        clicke1:()=>{dispatch({type:"hii"})}
    })
}
// export default Home;
// export default Home;
export default connect(null,mapDispatchToProps)(Home);
