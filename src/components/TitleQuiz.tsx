import React from "react";
import { View, Text } from "./ReactNativeCustom";

interface ITitleQuizProps {
  text: string;
  num: number;
}

const TitleQuiz: React.FC<ITitleQuizProps> = ({ text, num = 1 }) => {
  return (
    <View className="flex p-6 justify-start w-[90%] h-1/5 rounded-3xl bg-[#EBC3C4] border-[#998484] border-solid border-1">
      <Text className="font-bold text-lg text-white">{`${num} / 20`}</Text>
      <Text className="font-black text-2xl">{text}</Text>
    </View>
  );
};

export default TitleQuiz;
