import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
} from "../components/ReactNativeCustom";
import { PAGE } from "../utils/constants";

interface IProps {
  navigation: any;
}

const HomeScreen: React.FC<IProps> = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center bg-[#531EC4]">
      <Text className="font-black text-9xl text-red-400 text-center">
        Hello World
      </Text>
      <TouchableHighlight
        underlayColor="#273080"
        className="flex items-center bg-[#d97968] rounded-2xl p-4 w-4/5 border-[#998484] border-solid border-2"
        onPress={() => navigation.navigate(PAGE.QUIZ)}
      >
        <Text className="font-black text-2xl text-white">Start Quiz</Text>
      </TouchableHighlight>
    </View>
  );
};

export default HomeScreen;
