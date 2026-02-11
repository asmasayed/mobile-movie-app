import { View, Text,Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props{
    placeholder:string;
    onPress?:void;
}

const SearchBar = ({placeholder,onPress}:Props) => {
  return (
    <View className='flex-row items-center px-5 py-4 rounded-full bg-secondary-300'>
      <Image source={icons.search} className='size-5' tintColor="#ab8bff" resizeMode='contain'/>
      <TextInput 
        onPress={()=>{}}
        placeholder='Search'
        value=''
        onChangeText={()=>{}}
        placeholderTextColor="#ab8bff"
        className='flex-1 ml-2 text-white'
      />
    </View>
  )
}

export default SearchBar