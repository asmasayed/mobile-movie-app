import { Link } from "expo-router";
import { Text, View } from "react-native";
import "./globals.css";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl text-primary-300">Hello World!</Text>
      <Link href="/welcome">Click me</Link>
      <Link href={{
        pathname:"/movies/[id]",
        params:{id:"avengers"}
      }
      }>Click me to see avengers</Link>
    </View>
  );
}
