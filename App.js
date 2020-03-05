import React, { Component } from 'react';
import { StyleSheet,Text, View,TextInput, AppRegistry,Button,Image,TouchableOpacity,ScrollView} from 'react-native';
import  { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome5";
import  { Header,Card } from "react-native-elements";


/*
import = as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBB0gI-ksLM-urexYi-vxYCIoNWpaDjpjQ",
    authDomain: "mendo-project-4bb25.firebaseapp.com",
    databaseURL: "https://mendo-project-4bb25.firebaseio.com",
    projectId: "mendo-project-4bb25",
    storageBucket: "mendo-project-4bb25.appspot.com",

  };

  firebase.initializeApp(firebaseConfig);
*/
export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

class List extends React.Component {
  render(){
    return (

    <View style={{flex: 1,backgroundColor:"#f2f2f2"}}>
            <Header
                leftContainerStyle={styles.headerLeftContainerStyle}
                containerStyle={styles.headerContainerStyle}
                rightContainerStyle={styles.headerRightContainerStyle}
                rightComponent={<Icon name="search" size={25} color="white"/>}>

                  <Icon name="sliders-h" style={styles.slidersIcon} size={25} color="white"/>
                        <View style={{flexDirection:"row",}}>
                              <TouchableOpacity style={styles.headerButtonFirst}>
                    <Icon name="users" style={styles.headerIconUsers} size={18} color="#545454"/>
                    <Text style={styles.headerTextButtonFirst}>6x</Text>
                                            </TouchableOpacity>
                              <TouchableOpacity style={styles.headerButtonSecond}>
                     <Icon name="calendar" style={styles.headerIconCalendar} size={18} color="#545454"/>
                     <Text style={styles.headerTextButtonSecond}>Today 11.11.2019 | 18:00</Text>
                                            </TouchableOpacity>
                              <TouchableOpacity style={styles.headerButtonThird}>
                     <Icon name="map-marker-alt" style={styles.headerIconMap} size={18} color="#545454"/>
                     <Text style={styles.headerTextButtonThird}>Lviv</Text>
                                            </TouchableOpacity>
                                      </View>
                                                </Header>
<ScrollView style={styles.scrollpage}>
  <View style={{flex:1,marginTop:35,backgroundColor:"#f2f2f2"}}>
                  <TouchableOpacity  onPress={() =>
                                  this.props.navigation.navigate('ItemRestarauntFirst')}>
                  <View style={{flexDirection:"row",marginBottom:25,backgroundColor:"white"}}>
                        <Image style={styles.imageBlock} source={require("./main.jpg")}/>



                                <View style={{flex:1}}>
                                  <Text style={styles.majorBlockText}>Restauracja Bazcewski</Text>
                                  <View style={{justifyContent:"flex-end",flexDirection:"row",position:"absolute",right:30,top:33.5,}}>

                                        </View>
                                  <Text style={styles.minorBlockText}>Цінова категорія $$$</Text>
                                  <Text style={styles.infoBlockText}>Available hours</Text>


                    <View style={{flex:1,flexDirection:"row"}}>
                      <TouchableOpacity style={styles.buttonBlockFirst}>
                        <Text style={styles.buttonBlockText}>9:00</Text>
                                        </TouchableOpacity>
                      <TouchableOpacity style={styles.buttonBlockSecond}>
             <Text style={styles.buttonBlockText}>11:00</Text>
                                        </TouchableOpacity>
                      <TouchableOpacity style={styles.buttonBlockThird}>
                        <Text style={styles.buttonBlockText}>13:00</Text>
                                          </TouchableOpacity>
                                      </View>





                       </View>










                        </View>
                                </TouchableOpacity>
                  <TouchableOpacity  onPress={() =>
                                  this.props.navigation.navigate('ItemRestarauntFirst')}>
                <View style={{flexDirection:"row",marginBottom:25,backgroundColor:"white"}}>
      <Image style={styles.imageBlock} source={require("./main.jpg")}/>
              <View style={{flex:1}}>
                <Text style={styles.majorBlockText}>Restauracja Bazcewski</Text>
                <View style={{justifyContent:"flex-end",flexDirection:"row",position:"absolute",right:30,top:33.5,}}>

                      </View>


                <Text style={styles.minorBlockText}>Цінова категорія $$$</Text>

                <Text style={styles.infoBlockText}>Available hours</Text>



  <View style={{flex:1,flexDirection:"row"}}>
    <TouchableOpacity style={styles.buttonBlockFirst}>
      <Text style={styles.buttonBlockText}>9:00</Text>
                      </TouchableOpacity>
    <TouchableOpacity style={styles.buttonBlockSecond}>
  <Text style={styles.buttonBlockText}>11:00</Text>
                      </TouchableOpacity>
    <TouchableOpacity style={styles.buttonBlockThird}>
      <Text style={styles.buttonBlockText}>13:00</Text>
                        </TouchableOpacity>
                    </View>



     </View>








                            </View>
                                      </TouchableOpacity>

                  <TouchableOpacity  onPress={() =>
                                  this.props.navigation.navigate('ItemRestarauntFirst')}>
                  <View style={{flexDirection:"row",marginBottom:25,backgroundColor:"white"}}>
    <Image style={styles.imageBlock} source={require("./main.jpg")}/>
            <View style={{flex:1}}>
              <Text style={styles.majorBlockText}>Restauracja Bazcewski</Text>
              <View style={{justifyContent:"flex-end",flexDirection:"row",position:"absolute",right:30,top:33.5,}}>

                    </View>
              <Text style={styles.minorBlockText}>Цінова категорія $$$</Text>
              <Text style={styles.infoBlockText}>Available hours </Text>

  <View style={{flex:1,flexDirection:"row"}}>
  <TouchableOpacity style={styles.buttonBlockFirst}>
  <Text style={styles.buttonBlockText}>9:00</Text>
                    </TouchableOpacity>
  <TouchableOpacity style={styles.buttonBlockSecond}>
  <Text style={styles.buttonBlockText}>11:00</Text>
                    </TouchableOpacity>
  <TouchableOpacity style={styles.buttonBlockThird}>
    <Text style={styles.buttonBlockText}>13:00</Text>
                      </TouchableOpacity>
                  </View>



   </View>







                          </View>

                                  </TouchableOpacity>

                                                    </View>
                                                      </ScrollView>
                                                                  </View>

    );
  }
}

 class MyBookings extends React.Component {
  render() {
    return (
<View style= {styles.MyBookings}>


        </View>

    );
  }
}


  class MyProfile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"#f2f2f2", }}>
        <Text>New Page2</Text>
      </View>
    );
  }
}

class ItemRestarauntFirst extends React.Component {
 render() {
   return (
<ScrollView style={styles.scroll}>
     <View style={{backgroundColor:"#E9E9E9",flex:1}}>





        <Image style={styles.imagerestaurant} source={require("./main.jpg")}/>





     <View style={{flexDirection:"row"}}>
     <View style={{flexDirection:"column"}}>
       <Text style={styles.pagerestname}>Restauracja Bazcewski</Text>

     <Text style={styles.pagerestmoney}>Ресторан  $$$</Text>
     </View>

     <View style={{flexDirection:"row",alignSelf:"flex-end",marginBottom:19,marginRight:15}}>
     <Icon name="star" style={{marginLeft:5,marginTop:2,}}size={12} color="orange"/>
     <Icon name="star" style={{marginLeft:5,marginTop:2,}}size={12} color="orange"/>
     <Icon name="star" style={{marginLeft:5,marginTop:2,}}size={12} color="orange"/>
     <Icon name="star" style={{marginLeft:5,marginTop:2,}}size={12} color="orange"/>
     <Icon name="star" style={{marginLeft:5,marginTop:2,}}size={12} color="orange"/>
     </View>
     </View>



     <View style={{flexDirection:"row",}}>
            <TouchableOpacity style={styles.restpagebutton}>
              <Icon name="users" style={styles.restpageuser} size={15} color="#545454"/>
                 <Text style={styles.restpagetext}>6x</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.restpagebutton2}>
                      <Icon name="calendar" style={styles.restpagecalendar} size={15} color="#545454"/>
                        <Text style={styles.restpagedata}>Today 11.11.2019</Text>
                            </TouchableOpacity>
                            </View>





                 <View style={styles.resttime}>


                 <View style={styles.restbuttontext}>


                      <Text style={styles.restbuttonbook}>Book table for 6 person:</Text>

                             </View>
          <View style={{flexDirection:"row",marginTop:14}}>


                              <TouchableOpacity style={styles.restpagetimefirst}>
                                <Text style={styles.restpagetime}>9:00</Text>
                                                </TouchableOpacity>
                              <TouchableOpacity style={styles.restpagetimesecond}>
                          <Text style={styles.restpagetime}>11:00</Text>
                                                </TouchableOpacity>
                              <TouchableOpacity style={styles.restpagetimethird}>
                                <Text style={styles.restpagetime}>13:00</Text>
                                                  </TouchableOpacity>
                                                  <TouchableOpacity style={styles.restpagetimefourth}>
                                                    <Text style={styles.restpagetime}>15:00</Text>
                                                                      </TouchableOpacity>


               </View>


                                              </View>
            <View style={styles.restdescription}>

                    <View style={styles.restdescriptionphone}>

           <View style={{flexDirection:"row"}}>
           <Icon name="mobile" style={{marginRight:3,marginTop:2,}}size={15} color="red"/>

                     <Text style={styles.restphonetext}>Phone</Text>


                 </View>
                         <Text style={styles.restphonenumber}>+380(67)123-123</Text>



                    </View>

                       <View style={styles.restdescriptionhours}>
                <View style={{flexDirection:"row"}}>
                <Icon name="clock" style={{marginRight:3,marginTop:2,}}size={15} color="red"/>
                         <Text style={styles.resthourstext}>Hours</Text>


                         </View>
                         <Text style={styles.resthourstime}>Monday – Sunday: 9:00 – 24:00 </Text>



                         </View>

               <View style={styles.restdescriptionend}>
            <View style={{flexDirection:"row"}}>
            <Icon name="comments" style={{marginRight:3,marginTop:2,}}size={15} color="red"/>
                 <Text style={styles.restdescriptiondescriptiontext}>Description:</Text>


                 </View>
                 <Text style={styles.restdescriptiondescrptiontext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>




               </View>


             </View>
  </View>



</ScrollView>




   );
 }
}

const TabNavigate = createSwitchNavigator ({
ItemRestarauntFirst:ItemRestarauntFirst,
List:List,
});

const TabNavigator = createBottomTabNavigator(
  {
  List: { screen: List,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
    <Icon name="list-ul" size={25} color={tintColor} />
  ),
},


},
  MyBookings: { screen: MyBookings,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <Icon name="calendar-alt" size={25} color={tintColor} />
      ),
  },

},
  MyProfile: {screen: MyProfile,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" size={25} color={tintColor} />
      ),
  },    },

},

  {initialRouteName: "List",
    tabBarOptions: {
      activeTintColor: "#ff1a40",
      innactiveTIntColor:"#666666",},},

);

const Roots  = createStackNavigator({
  go: {screen: TabNavigator,
    navigationOptions:{
    header:null,
    }},
     app: {screen: TabNavigate,
     navigationOptions: {
       headerStyle: {
     backgroundColor: '#ff1a40',
     }, headerTintColor: 'white',


     }},

});



const styles = StyleSheet.create({
  headerContainerStyle: {
    backgroundColor: "#ff1a40",
    height:130,
  },
  headerLeftContainerStyle: {
    alignSelf:"baseline",
    marginLeft:15,
    marginTop:10,
  },
  headerRightContainerStyle: {
    alignSelf:"baseline",
    marginRight:15,
    marginTop:10,
  },
  slidersIcon: {
    alignSelf:"flex-start",
    marginLeft:5,
    marginTop:4,
  },
  headerButtonFirst: {
    backgroundColor:"white",
    borderRadius:21,
    width:70,
    height:36,
    alignSelf:"flex-start",
    flexDirection:"row",
    marginTop:85,
    marginRight:20,
  },
  headerButtonSecond: {
    backgroundColor:"white",
    borderRadius:21,
    alignSelf:"stretch",
    height:36,
    marginTop:85,
    alignSelf:"center",
    flexDirection:"row",

    width:185,
  },
  headerButtonThird: {
    backgroundColor:"white",
    borderRadius:21,
    marginTop:85,
    width:70,
    height:36,
    alignSelf:"flex-end",
    marginTop:13,
    flexDirection:"row",
    marginLeft:20,

  },

  headerIconUsers: {
marginTop:10,
marginLeft:10,
  },
  headerTextButtonFirst:{
    color:"#545454",
    fontSize:15,
    marginTop:10,
    marginLeft:10,

  },
  headerIconCalendar: {
    marginTop:7,
    marginLeft:7,
  },
  headerTextButtonSecond: {
    color:"#545454",
    fontSize:13,
    marginLeft:10,

    alignSelf:"center",

  },

  headerIconMap:{
    marginTop:7,
    marginLeft:8,

},

  headerTextButtonThird: {
    color:"#545454",
    fontSize:15,
    marginTop:8,
    marginLeft:8,

  },




  imageBlock: {
    width:130,
    height:80,
    marginLeft:20,
    marginTop:32,
    marginBottom:35,
    borderRadius:10,
  },
  majorBlockText: {
    fontSize:17,
    fontWeight:"500",
    marginLeft:35,
    marginTop:27,
  },
  minorBlockText: {
    fontSize:11,
    color:"grey",
    marginLeft:35,
    marginBottom:10,
  },
  infoBlockText:{
    fontSize:12,
    color:"black",
    marginLeft:35,

},

  buttonBlockFirst: {
    backgroundColor:"red",
    borderRadius:13,
    width:97,
    height:27,
    marginRight:10,
    marginLeft:36,
    marginTop:13
  },
  buttonBlockSecond: {
    backgroundColor:"red",
    borderRadius:13 ,
    width:97,
    height:27,
    marginRight:10,
    marginTop:13,
  },
  buttonBlockThird: {
    backgroundColor:"red",
    borderRadius:13,
    width:97,
    height:27,
    marginTop:13
  },
  buttonBlockText: {
    color:"white",
    fontSize:12,
    alignSelf:"center",
    marginTop:4,
  },
imagerestaurant:{
  width:500,
  height:280,
  marginTop:0,
},
pagerestname:{
  marginBottom:0,
  marginLeft:20,
  marginTop:10,
  fontSize:17,
  fontWeight:"500",
},
pagerestmoney:{
  marginBottom:0,
  marginLeft:25,
  marginTop:5,
  fontSize:10,
  fontWeight:"500",
  color:"#C0C5C3",
},



restpageuser:{

  marginLeft:36,
  marginTop:10,

},
restpagetext:{
  color:"#545454",
  fontSize:15,
  marginTop:9,
  marginLeft:9
},restpagebutton:{
  backgroundColor:"#C6C6C6",
  borderRadius:15,
  width:120,
  height:35,
  alignSelf:"flex-start",
  flexDirection:"row",
  marginTop:10,
  marginLeft:25,

},
restpagebutton2:{
  backgroundColor:"#C6C6C6",
  borderRadius:15,
  height:35,
  alignSelf:"flex-end",
  flexDirection:"row",
  marginLeft:20,

},
restpagecalendar:{
  marginLeft:30,
  marginTop:10,

},
restpagedata:{
  marginTop:10,
  marginRight:30,
  marginLeft:10,
},
restpagetimefirst:{
  backgroundColor:"red",
  borderRadius:13,
  width:97,
  height:27,
  marginLeft:10,
  marginBottom:20,
},
restpagetimesecond:{
  backgroundColor:"red",
  borderRadius:13,
  width:97,
  height:27,
  marginLeft:12,
marginBottom:20,
},
restpagetimethird:{
  backgroundColor:"red",
  borderRadius:13,
  width:97,
  height:27,
  marginLeft:15,
  marginBottom:20,
},
restpagetime:{
  color:"white",
  fontSize:12,
  alignSelf:"center",
  marginTop:6,
},
resttime:{
  backgroundColor:"white",
  width:500,
  height:80,
  marginTop:10,
},
restpagetimefourth:{
  backgroundColor:"red",
  borderRadius:13,
  width:97,
  height:27,
  marginLeft:18,
marginBottom:20,
},
restbuttontext:{
  fontSize:13,
  flexDirection:"row",
},
restbuttonbook:{
  marginTop:10,
  marginLeft:20,
},
restdescriptionphone:{
  marginLeft:30,
  marginTop:20,
},
restdescriptionhours:{
  marginLeft:30,
  marginTop:15,

},
restdescriptionend:{
  marginLeft:30,
  marginTop:15,
},
restphonetext:{
color:"red",
fontSize:16,
marginLeft:10,

},
resthourstext:{
  color:"red",
  fontSize:16,
  marginLeft:7,
},
restdescriptiondescriptiontext:{
  color:"red",
  fontSize:16,
  marginLeft:6,
},
restdescription:{
  width: 300,
 height: 265,

}

});



const AppContainer =  createAppContainer(Roots);
