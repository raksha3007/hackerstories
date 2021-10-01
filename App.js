import React, { Component } from 'react'; 
import List from './List'; 
class App extends React.Component {  
   constructor(props) {  
      super(props);  
      this.state = {  
         name: "JavaTpoint",         
      }  
   }  
   render() {  
      return ( 
          <> 
         <div>  
            <JTP jtpProp = {this.state.name}/>             
         </div> 
         <List 
         imgsrc="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/07/cocomelon-1.jpg?q=50&fit=crop&w=750&dpr=1.5"
         title="Netflix Series"
         sname="COCOMELON"
         link="https://www.netflix.com/title/81273085"/>
         </> 
      );  
   }  
}  
class JTP extends React.Component {  
   render() {  
      return (  
          <div>  
              <h1>State & Props Example</h1>  
              <h3>Welcome to {this.props.jtpProp}</h3>  
              <p>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad.</p>  
         </div>    
      );  
   }  
}  
export default App;  