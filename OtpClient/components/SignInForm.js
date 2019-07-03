import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import axios from 'axios';


const ROOT_URL = 'https://us-central1-opt-practise.cloudfunctions.net';
class SignInForm extends Component{
    
    constructor(props){
        super(props);

        this.state = {phone: '', code: ''};
    }

    handleSubmit = async () => {
        
      try
      {  
          let {data} = await axios.post(`${ROOT_URL}/verifyOtp`,
        { 
        phone: this.state.phone,
        code: this.state.code
    })

        firebase.auth().signInWithCustomToken(data.token);
        }
    catch(error){
        console.log(error);
    }
    }


    render(){
        return(
            <View>
                 <View style={{marginBottom: 10}}>
                      <Input
                      label="Enter Phone Number"
                      value={this.state.phone}
                      onChangeText={phone => this.setState({phone})}
                    />
                </View>
                 <View style={{marginBottom: 10}}>
                      <Input
                      label="Enter Code"
                      value={this.state.code}
                      onChangeText={code => this.setState({code})}
                      
                      />
                </View>
                <Button 
                onPress={this.handleSubmit.bind(this)}

                title="Submit"></Button>
            </View>
                    
        );


    }
}

export default SignInForm;