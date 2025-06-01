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
                tabBarLabelStyle:{
                    fontFamily:"poppins"
                }
            }}>
            <Tabs.Screen name="home"  options={{tabBarLabel:"Home", tabBarIcon:({color})=><Entypo name="home" size={24} color={color} />}}/>
            <Tabs.Screen name="cart"  options={{tabBarLabel:"Cart", tabBarIcon:({color})=><Fontisto name="shopping-bag" size={24} color={color} />}}/>
            <Tabs.Screen name="favourite"  options={{tabBarLabel:"Favourite", tabBarIcon:({color})=><Foundation name="heart" size={24} color={color} />}}/>
            <Tabs.Screen name="notification"  options={{tabBarLabel:"Notification", tabBarIcon:({color})=><FontAwesome name="bell" size={24} color={color} />}}/>
        </Tabs>
    )
}