import { Stack, useRouter } from "expo-router";
import {
  Pressable,
  Text,
  View,
  Image,
  StatusBar,
} from "react-native";
import SvgComponent from "../components/svg";
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "../consts/colors";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const headerHeight = useHeaderHeight();
  useEffect(() =>{
    StatusBar.setBarStyle("light-content");
  },[])

  const handleClick = () => {
    router.push("/auth");
  };
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
        }}
      />
      <View
        className="flex-1 bg-[#FF4B3A] relative flex "
        style={{ paddingTop: headerHeight }}
      >
        <StatusBar barStyle="light-content" />

        <View className="w-[80%] mx-auto">
          <View className="bg-white w-16 h-16  p-2 rounded-full flex justify-center items-center mb-11">
            <Image
              source={require("./../assets/icons/logo.jpeg")}
              className=" w-12 h-12 rounded-full"
            />
          </View>
          <View>
            <SvgComponent />
          </View>
          <Pressable className="bg-white mt-24 py-6 rounded-3xl shadow-xl shadow-zinc-700" onPress={handleClick}>
            <Text
              className="text-xl  text-center font-semibold tracking-wider"
              style={{ color: Colors.primary }}
            >
              Get starteed
            </Text>
          </Pressable>
        </View>

        <View className="absolute  bottom-0 -left-8">
          <View className="flex flex-row items-end">
            <Image
              source={{
                uri: "https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG96748.png",
              }}
              className="w-[200px] h-[250px] shadow-sm  shadow-black/50 "
            />
            <Image
              source={{
                uri: "https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG96765.png",
              }}
              className="w-[200px] h-[200px] -ml-9 -mb-5 shadow-sm shadow-black"
            />
          </View>
        </View>
      </View>
    </>
  );
}

// exp://w4zphuo-anonymous-8081.exp.direct
