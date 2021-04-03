import {createStore,combineReducers} from 'redux';
var hlo={x:0,y:0}
const city=(state,action)=>{
    switch(action.type){
         case "hii":
            // state.x=1;
            state.x=state.x+1;
            console.log("huhuhuhuh")
              break;         
    }
    return state;
}

const store=createStore(city,hlo);
store.subscribe(()=>{
    console.log(store.getState(),"hloooooooooo")
}
)
export default store;