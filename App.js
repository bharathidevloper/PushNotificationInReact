import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
} from 'react-native'
import PushNotification from "react-native-push-notification";

class App extends Component {
  constructor(props){
    super(props)
    this.state={

    }
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },
    
           onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
    
        // process the notification
    
             },
    
      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);
    
      },
    
      onRegistrationError: function(err) {
        console.error(err.message, err);
      },
    
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
    
      popInitialNotification: true,
    
      requestPermissions: true,
    });
  }
  
  sendNotification=()=>{
    PushNotification.localNotification({
     
      title: "Bharathi Ji", // (optional)
      message: "Notification created by  Bharathi", // (required)
     
    });
  }

 render() {
    return (
      <View style={styles.container}>
       <Button title='send Notification' onPress={()=>this.sendNotification()}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})

export default App;
