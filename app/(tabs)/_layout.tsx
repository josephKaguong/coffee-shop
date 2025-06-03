import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import Foundation from '@expo/vector-icons/Foundation';
import { Tabs } from "expo-router";

export default function TabsLayout(){
    return(
        
        <Tabs 
            
            screenOptions={{
                tabBarActiveTintColor:"#D17842",
                tabBarInactiveTintColor:"#52555A",
                headerShown:false,
                sceneStyle:{
                    backgroundColor:"#0C0F14"
                },
                tabBarStyle:{
                    backgroundColor:"#0C0F14",
                    borderTopWidth:0,
                    
                    height:89
                },
                tabBarLabelStyle:{
                    opacity:0
                }
               
            }}>
            <Tabs.Screen name="home"  options={{ tabBarIcon:({color})=><Entypo name="home" size={24} color={color} />}}/>
            <Tabs.Screen name="cart"  options={{ tabBarIcon:({color})=><Fontisto name="shopping-bag" size={24} color={color} />}}/>
            <Tabs.Screen name="favourite"  options={{ tabBarIcon:({color})=><Foundation name="heart" size={24} color={color} />}}/>
            <Tabs.Screen name="notification"  options={{ tabBarIcon:({color})=><FontAwesome name="bell" size={24} color={color} />}}/>
        </Tabs>
      
    )
}