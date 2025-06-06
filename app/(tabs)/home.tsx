import BeanDesign from "@/components/beanDesign";
import CoffeeDesign from "@/components/coffeeDesign";
import BeansData from "@/data/BeansData";
import CoffeeData from "@/data/CoffeeData";
import React from "react";
import { FlatList, ScrollView, Text, TextInput, View } from "react-native";


const Home = () => {
  const coffeeType = [
    "All",
    "Cappucchino",
    "Espresso",
    "Americano",
    "Macchiato",
    "Latte",
    "Black Coffee",
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="ml-[28px]">
      <Text className="w-[195px] h-[72px] mt-[120px] font-poppins font-semibold text-[28px] text-white-light leading-[36px]">Find the best coffee for you</Text>
      
      <View className="flex flex-row items-center w-[330px] h-[45px] mt-[28px] pl-[18px] bg-gray-two rounded-[10px]">
        
         <TextInput
            className='h-[20px] w-[90px] ml-[19px] outline-none font-poppins font-medium text-[10px] text-gray-five align-center'
            placeholder="Find your coffee"
         />
      </View>

         <FlatList
           className='w-[401px] h-[34px] mt-[10px] rounded-[7px] pr-[40px]'
            data={coffeeType}
            keyExtractor={(index)=>index}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>(
              <View className="h-[34px]  ml-[15px] flex items-center">
                <Text className="h-[20px]  font-poppins font-semibold text-[18px] text-gray-two ">{item}</Text>
                <Text className="h-[8px] w-[8px] mt-[6px] bg-yellow rounded-[7px]"></Text>
              </View>
            )}
         />

         <FlatList
            className='w-[491px] h-[256px] mt-[20px] pr-[100px]'
            data={CoffeeData}
            keyExtractor={(item)=>item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>(
             <CoffeeDesign/>
            )}
         />
          

         <View className="mt-[20px]">
            <Text className="h-[20px] w-[108px] font-poppins font-medium text-[16px] text-white-light leading-[20px]">Coffee beans</Text>
            <FlatList
                className="h-[246px] w-[492px] mt-[15px] pr-[100px]"
                data={BeansData}
                keyExtractor={(item)=>item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=>(
                  <BeanDesign/>
                )}
            />
             
         </View>
      <Text>red</Text>
    </ScrollView>
  );
};

export default Home;
