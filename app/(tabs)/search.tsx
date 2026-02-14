import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const search = () => {
  return (
    <View className='flex-1 justify-center align-center'>
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{
              minHeight:"100%",
              paddingBottom:10,
              marginTop:20
            }}>
              <Text>search</Text>
            </ScrollView>
      
    </View>
  )
}

export default search

const styles = StyleSheet.create({})