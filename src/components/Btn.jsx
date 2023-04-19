import { Text, TouchableOpacity } from "react-native";
import React from "react";

const Btn = (props) => {
  return (
    <TouchableOpacity
      onPress={props.clickBtn}
      className=" w-20 h-20 rounded-full justify-center items-center m-1  bg-violet-200"
    >
      <Text className=" text-3xl">{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Btn;
