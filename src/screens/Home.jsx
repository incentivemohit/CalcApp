import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Btn from "../components/Btn";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Home = () => {
  const [input, setInput] = useState("");

  const handleResult = (data) => {
    if (data == "c") {
      setInput("");
    } else if (data == "b") {
      setInput(input.substring(0, input.length - 1));
    } else if (data == "=") {
      setInput("" + eval(input));
    } else {
      setInput(input + data);
    }
  };

  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex-1">
        <TextInput
          editable={false}
          className="bg-violet-100 text-black flex-1 text-right  text-[60px] "
          value={input}
          onChangeText={setInput}
          placeholder="0"
        />
      </View>
      <View className="flex-[2_2_15%]  rounded-t-3xl bg-red-500 flex-row justify-center items-center">
        <View className="flex-row flex-wrap m-auto justify-center ">
          <Btn clickBtn={() => handleResult("c")} title="c" />

          <Btn clickBtn={() => handleResult("%")} title="%" />

          <Btn
            clickBtn={() => handleResult("/")}
            title={<FontAwesome5 name="divide" size={30}></FontAwesome5>}
          />

          <Btn
            clickBtn={() => handleResult("b")}
            title={<Ionicons name="backspace" size={30}></Ionicons>}
          ></Btn>
          <Btn clickBtn={() => handleResult(7)} title="7" />

          <Btn clickBtn={() => handleResult(8)} title="8" />
          <Btn clickBtn={() => handleResult(9)} title="9" />
          <Btn
            clickBtn={() => handleResult("*")}
            title={<Entypo name="cross" size={30}></Entypo>}
          />
          <Btn clickBtn={() => handleResult(4)} title="4" />
          <Btn clickBtn={() => handleResult(5)} title="5" />
          <Btn clickBtn={() => handleResult(6)} title="6" />
          <Btn
            clickBtn={() => handleResult("-")}
            title={<Entypo name="minus" size={30}></Entypo>}
          />
          <Btn clickBtn={() => handleResult(1)} title="1" />
          <Btn clickBtn={() => handleResult(2)} title="2" />
          <Btn clickBtn={() => handleResult(3)} title="3" />
          <Btn
            clickBtn={() => handleResult("+")}
            title={<Entypo name="plus" size={30}></Entypo>}
          />
          <Btn clickBtn={() => handleResult("00")} title="00" />
          <Btn clickBtn={() => handleResult(0)} title="0" />
          <Btn
            clickBtn={() => handleResult(".")}
            title={<Entypo name="dot-single" size={30}></Entypo>}
          />
          <Btn
            clickBtn={() => handleResult("=")}
            title={<FontAwesome5 name="equals" size={30}></FontAwesome5>}
          />
          <Text className="w-full bg-black text-white text-center my-2 py-2">
            Developed By MkBot Solutions
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
