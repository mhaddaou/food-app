import { Stack, useRouter } from "expo-router";
import { Text, View, Pressable } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../consts/colors";

export default function Auth(){
    const headerHeight = useHeaderHeight();
    const router = useRouter()
   const handleBack = () =>{
    router.back()
    }
    return (
    <>
    <Stack.Screen options={{
        headerTransparent: true,
        headerTitle: "",
        headerLeft: () => (
            <View></View>
        ),
    
    }} />
    <View className="flex-1  bg-[#E7E7E7]" >

        <View className="h-[40%] w-full bg-white rounded-[40px] flex flex-row items-end justify-around ">
            <View className="border-b-2 pb-4">
                <Text>Login</Text>
            </View>
            <View> 
                <Text>sign-up</Text>
            </View>
        </View>
        <View></View>

    </View>
    </>
 )   
}