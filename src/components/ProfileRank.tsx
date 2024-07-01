import React from "react";
import { Text, View } from "./ReactNativeCustom";
import { rankFiveColor } from "../mocks/user";

interface IProfileRank {
  name: string;
  description: string;
  score: number;
  rank: number;
}

const ProfileRank: React.FC<IProfileRank> = ({
  name,
  description,
  score,
  rank,
}) => {
  return (
    <View
      className={`rounded-full px-4 w-4/5 bg-[${rankFiveColor[rank]}] border-[#998484] border-solid border-2`}
    >
      <View className="flex-row justify-between items-center px-5 py-2">
        <View className="flex justify-between">
          <Text className="font-bold text-xl text-white">{name}</Text>
          <Text className="font-medium text-base text-white">
            {description}
          </Text>
        </View>
        <View className="flex justify-between">
          <Text className="font-bold text-xl text-white">{score}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileRank;
