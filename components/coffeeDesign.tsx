import React from 'react'
import { Image, Text, View } from 'react-native'

const CoffeeDesign = () => {
  return (
     <View className="w-[149px] h-[246px] p-[12px] rounded-lg">
         <Image
            source={require('../assets/coffee_assets/arabica_coffee_beans/arabica_coffee_beans_portrait.png')}
            style={{width:126, height:126, borderRadius:20}}
            resizeMode='cover'
         />
         
         <Text className="h-[23px] mt-[10px] font-poppins text-[13px] text-white-light  leading-[20px]">Cappuchino</Text>
         <Text className="font-poppins text-[9px] text-white-light leading-[20px]">With Milk</Text>
   
         <View className="flex flex-row items-center">
           <Text className="h-[22.75] font-poppins font-semibold text-[15px] text-yellow text-center leading-[20px]">$<Text className="text-white-light">4.20</Text></Text>
           <View className="w-[28px] h-[28px] ml-[50px] bg-yellow rounded-[10px]">
                <Text className="font-poppins text-[20px] text-center text-white-light">+</Text>
           </View>
           
         </View>
       </View>
  )
}

export default CoffeeDesign