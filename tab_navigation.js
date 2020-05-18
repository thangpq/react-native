
import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* avoid bug in while import Ionicons lib
1. close running packager
2. run react-native link react-native-vector-icons
3. and run react-native start --reset-cache
4. Finally use react-native run-ios
*/
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen(navigation, route){
  return(  <View>
      <Text>Home list all Screen</Text>
    </View>
  );
}
function FeedScreen(navigation, route){
  return(
    <View>
      <Text>Home list all Screen</Text>
    </View>
  );
}
function FriendsScreen(navigation, route){
  return(
    <View>
      <Text>Friends Screen</Text>
    </View>
  );
}
function VideoScreen(navigation, route){
  return(
    <View>
      <Text>Video Screen</Text>
    </View>
  );
}
function HeartScreen(navigation, route){
  return(
    <View>
      <Text>Heart Screen</Text>
    </View>
  );
}
function NotifyScreen(navigation, route){
  return(
    <View>
      <Text>Notify Screen</Text>
    </View>
  );
}
function InfoScreen(navigation, route){
  return(
    <View>
      <Text>Infor here</Text>
    </View>
  );
}

function ProfileScreen(navigation, route){
  return(
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
}

function SettingsScreen(navigation, route){
  return(
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
}

class Home extends Component{
  render(){
    return(
      /*
      <NavigationContainer>
       <Tab.Navigator
         screenOptions={({ route }) => ({
           tabBarIcon: ({ focused, color, size }) => {
             let iconName;

             if (route.name === 'Home') {
               iconName = focused
                 ? 'ios-information-circle'
                 : 'ios-information-circle-outline';
             }else if (route.name === 'Friends'){
               iconName = focused ? 'ios-people' : 'ios-people';
             }else if (route.name === 'Video'){
               iconName = focused ? 'ios-videocam' : 'ios-videocam';
             }else if(route.name ==='Info'){
               iconName = focused ? 'ios-list':'ios-list';
             }else if(route.name ==='Heart'){
               iconName = focused ? 'ios-bicycle':'ios-bicycle';
             }
             // You can return any component that you like here!
             return <Ionicons name={iconName} size={size} color={color} />;
           },
         })}
         tabBarOptions={{
           activeTintColor: 'red',
           inactiveTintColor: 'gray',
         }}
       >
         <Tab.Screen name="Home" component={HomeScreen} />
         <Tab.Screen name="Friends" component={FriendsScreen} />
         <Tab.Screen name="Video" component={VideoScreen} />
         <Tab.Screen name="Info" component={InfoScreen} />
         <Tab.Screen name="Heart" component={HeartScreen} />
       </Tab.Navigator>
     </NavigationContainer>
*/

      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) =>({
          tabBarIcon: ({focused, color, size}) =>{
            let iconName;
            if(route.name === 'Home'){
              iconName = focused ? 'ios-home':'ios-home'
            }else if(route.name === 'Friends'){
              iconName = focused ? 'ios-people':'ios-people';
            }else if(route.name ==='Video'){
              iconName = focused ? 'ios-videocam':'ios-videocam';
            }else if(route.name ==='Heart'){
              iconName = focused ? 'md-heart':'md-heart';
            }else if(route.name ==='Notify'){
              iconName = focused ? 'ios-notifications':'ios-notifications';
            }else if(route.name ==='Info'){// problem ios-menu cant find
              iconName = focused ? 'ios-menu':'ios-menu';
            }
            else{
              iconName = focused ? 'md-help':'md-help';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
        >

        <Tab.Screen name="Home" component={FeedScreen} />
        <Tab.Screen name="Friends" component={FriendsScreen} />
        <Tab.Screen name="Video" component={VideoScreen} />
        <Tab.Screen name="Heart" component={HeartScreen} />
        <Tab.Screen name="Notify" component={NotifyScreen} />
        <Tab.Screen name="Info" component={InfoScreen} />
      </Tab.Navigator>
      </NavigationContainer>

    );
  }
}

export default Home;
