import { View, Image } from "react-native";
import React, { useEffect } from "react";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2000);
  }, []);

  return (
    <View className="flex-1 justify-center items-center ">
      <View className="bg-red-300 w-56 h-56 rounded-full">
        <Image
          className="w-full h-full"
          source={require("../../assets/calc-icon.png")}
        />
      </View>
    </View>
  );
};

export default Splash;
