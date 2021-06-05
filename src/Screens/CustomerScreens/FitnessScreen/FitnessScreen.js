import React, { Component } from 'react'
import { Text, View} from 'react-native'
import GoogleFit, { Scopes } from 'react-native-google-fit'


export default class FitnessScreen extends Component {


    state = {

    }

    componentDidMount(){
        this.googleFitCheck()
        
    }

   googleFitCheck = ()=>{
    const options = {
        scopes: [
          Scopes.FITNESS_ACTIVITY_READ,
          Scopes.FITNESS_ACTIVITY_WRITE,
          Scopes.FITNESS_LOCATION_READ,
          Scopes.FITNESS_BODY_READ,
          Scopes.FITNESS_BODY_WRITE,
        ],
      }
      GoogleFit.authorize(options)
        .then(authResult => {
          if (authResult.success) {
            console.log("AUTH_SUCCESS");
          } else {
            alert(JSON.stringify(authResult))
          }
        })
        .catch(() => {
          console.log("AUTH_ERROR");
        });


        
       
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
