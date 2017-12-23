import React,{Component} from 'react';
import {View,StatusBar,ScrollView} from 'react-native';
import {Container,ListContainer} from '../components/Container';
import {Header} from '../components/Header';
import {ListItem,Separator} from '../components/ListItem';
import styles from '../components/ListItem/styles';

class Home extends Component{
    constructor() {

        super();
   this.createNewListItem = this.createNewListItem.bind(this);
  // this.handleCheckboxClick=this.handleCheckBoxClick.bind(this);
        this.state = {
            newListItem: [] ,
            selected:false
        };
    };
        
    createNewListItem(){
        console.log('new list item',this.state.selected);
        this.state.newListItem.push(<ListItem/>)
        this.setState({ newListItem: this.state.newListItem ,selected:false})
      };
      handleCheckBoxClick=()=> {
    
        
        if(this.state.selected===false)
        {
            console.log("checkbox clicked before",this.state.selected);
        this.setState({ selected:true});
        console.log("checkbox clicked",this.state.selected);
        }
        else  if(this.state.selected===true)
        {
        this.setState({ selected:false});
        console.log("checkbox clicked",this.state.selected);
        }
};
render (){
    let newListItem = this.state.newListItem.map((r, i) => {
        return(<ListItem key={i} selected={this.state.selected} onPress={this.handleCheckBoxClick}/>) 
       
    })
    return(
    <Container>
      <StatusBar translucent={false} barStyle="light-content"/>
        <Header onPress={this.createNewListItem}/>
      {/* <ScrollView> */}
      <ListContainer>
       
        {newListItem}
        </ListContainer>
        {/* </ScrollView> */}
     
       
       
        </Container>
    )
}
};
export default Home;