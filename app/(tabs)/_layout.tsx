import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const TabIcon=({focused,icon,title}:any)=>{
    if(focused){
        return(
         <ImageBackground source={images.highlight} className='flex flex-row min-w-[112px] flex-1 justify-center width-full items-center min-h-16 mt-4 rounded-full overflow-hidden ml-4'>
                        <Image source={icon} tintColor="#151312" className='size-5 '/>
                        <Text className='text-secondary text-base font-semibold mx-1.5'>{title}</Text>
                        </ImageBackground>
    )
    }
    else{
        return(
            <View className='size-full justify-center items-center mt-5 rounded-full min-h-16'>
                <Image source={icon} tintColor="lightgray"  className='size-5'/>
            </View>
        )
    }
}

const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel:false,
            tabBarItemStyle:{
                width:"100%",
                height:"100%",
                justifyContent:"center",
                alignItems:"center"
            },
            tabBarStyle:{
                backgroundColor:"#0f0d23",
                borderRadius:50,
                marginHorizontal:20,
                marginVertical:36,
                height:52,
                position:"absolute",
                overflow:"hidden",
            }
        }}
    >
        <Tabs.Screen
            name='index'
            options={{
                headerShown: false,
                tabBarIcon:({ focused })=>(
                       <TabIcon focused={focused} icon={icons.home} title='Home'/>
            
                )
            }}
        />
        <Tabs.Screen
            name='search'
            options={{
                title:"Search",
                headerShown: false,
                tabBarIcon:({focused})=>(
                    <TabIcon focused={focused} icon={icons.search} title='Search'/>
                )
            }}
        />
        <Tabs.Screen
            name='saved'
            options={{
                title:"Saved",
                headerShown: false,
                tabBarIcon:({focused})=>(
                    <TabIcon focused={focused} icon={icons.save} title='Saved'/>
                )
            }}
        />
        <Tabs.Screen
            name='profile'
            options={{
                title:"Profile",
                headerShown: false,
                tabBarIcon:({focused})=>(
                    <TabIcon focused={focused} icon={icons.person} title='Profile'/>
                )
            }}
        />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})