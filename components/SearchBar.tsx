import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  onPress?: ()=>void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <View className=" flex-row items-center justify-center px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        tintColor="#ab8bff"
        resizeMode="contain"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#ab8bff"
        className="flex-1 ml-4 text-white"
      />
    </View>
  );
};

export default SearchBar;
