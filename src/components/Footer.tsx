import React from "react";
import { TouchableOpacity, Text, View } from "./ReactNativeCustom";

interface IFooterProps {
  current: number;
  limitMax: number;
  limitMin: number;
  handleNextButtonClick: () => void;
  handleBackButtonClick: () => void;
  isDisable: {
    nextButton: boolean;
    backButton: boolean;
  };
}

const Footer: React.FC<IFooterProps> = ({
  current,
  handleNextButtonClick,
  handleBackButtonClick,
  limitMax,
  limitMin,
  isDisable,
}) => {
  return (
    <View className="flex flex-row p-6 w-full bg-[#E75151]">
      <TouchableOpacity
        className="flex w-2/4"
        disabled={limitMin === current || isDisable.backButton}
        onPress={handleBackButtonClick}
      >
        <Text
          className={`font-black text-2xl ${
            limitMin === current || isDisable.backButton
              ? "text-[#C6C6C6]"
              : "text-white"
          }`}
        >
          Back
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="flex w-2/4"
        disabled={limitMax === current || isDisable.nextButton}
        onPress={handleNextButtonClick}
      >
        <Text
          className={`font-black text-2xl text-right ${
            limitMax === current || isDisable.nextButton
              ? "text-[#C6C6C6]"
              : "text-white"
          }`}
        >
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
