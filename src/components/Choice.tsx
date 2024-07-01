import React from "react";
import { TouchableHighlight, Text } from "./ReactNativeCustom";

interface IChoice {
  text: string;
  index: number;
  selected: boolean;
  handleButtonClick: (questionTarget: string, index: number) => void;
}

const Choice: React.FC<IChoice> = ({
  text,
  index,
  selected,
  handleButtonClick,
}) => {
  return (
    <TouchableHighlight
      underlayColor="#273080"
      className={`${
        selected ? "bg-[#4250D1]" : "bg-[#EACFCF]"
      } rounded-2xl p-4 w-4/5 border-[#998484] border-solid border-2`}
      onPress={() => handleButtonClick(text, index)}
    >
      <Text className="font-black text-2xl">{text}</Text>
    </TouchableHighlight>
  );
};

export default Choice;
