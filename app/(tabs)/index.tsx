import { StyleSheet, Text,Image, View,ScrollView } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import SearchBar from '@/components/SearchBar'
import { useRouter } from 'expo-router'

const index = () => {
  const router=useRouter();
  return (
    <View className='flex-1 justify-center items-center bg-primary'>
      <Image source={images.bg} className="absolute w-full h-full z-0 "/>
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{
        minHeight:"100%",
        paddingBottom:10
      }}>
        <Image source={icons.logo} className='mt-20 mx-auto'/>

        <View className='flex-1 mt-5'>
          <SearchBar placeholder="Search for a Movie"/>
        </View>
      </ScrollView>
    </View>
  );
}

export default index

const styles = StyleSheet.create({})