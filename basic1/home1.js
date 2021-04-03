import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View,Button,ScrollView } from 'react-native';
// // import About from './about'
import About from './about'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Navigation } from 'react-native-navigation';
import {connect} from 'react-redux' 
// import store from './redux'
import axios from 'axios'
import { request } from "graphql-request";
import { ApolloClient, InMemoryCache, ApolloProvider,gql, useQuery } from '@apollo/client';
const hi1=gql`{
    books1{
        author
        title
        hi
    }
}`;
// request('http://192.168.43.237:3000/graphql',hi1)
// .then(res=>{
//     console.log("finally",res)
// })
// .catch(err=>{console.log("errorr raaa",err)})
const userdataid=gql`{
    user{
        title
        id
    }
}`;
const ex=gql`
{
    ex2{
        name
    }
}`;
request('http://192.168.43.237:3000/graphql',ex)
.then(res=>{
    console.log("finally",res)
})
.catch(err=>{console.log("errorr raaa",err)})
const Stack = createStackNavigator();
var time=0;
var goo;
 
class Home1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            x:0,
            y:0,
            m:0,
            n:0,
            mn:0,
            da:0,
            use:"",
            mn1:0,
        }
    }
    componentDidMount=()=>{
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(res=>{
        //     console.log("hiii data")
          
        //     this.state.use=res.data;
        //     this.state.mn1=1;
        //     this.setState({use:this.state.use})
        //     this.setState({mn1:this.state.mn1})
           
        // })
       
        // console.log("hwhehehhehehhehuueeuue")
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
        var a={data:this.state.use}
        // axios.post('http://192.168.43.237:3000/users',a).then(res=>{
        //     console.log("sucsesss");
        // }).catch(err=>{console.log(err,"error royyyyy")})
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
            .catch(err=>{console.log(err,"error hii")}
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
<Text>{JSON.stringify(this.state.use)}</Text>
    </ScrollView>
       {/* <Text>{this.state.y}</Text> */}
            </View>
       
        )
    }
}

// const mapDispatchToProps=(dispatch)=>{
//     return({
//         clicked:()=>{dispatch({type:"hii",payload:0})}
//     })
// }
// export default Home;
export default Home1;
