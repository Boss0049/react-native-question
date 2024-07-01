import React from "react";
import { Text, TouchableOpacity, View } from "../components/ReactNativeCustom";
import { PAGE } from "../utils/constants";
import ProfileRank from "../components/ProfileRank";
import { leaderboardData } from "../mocks/user";

interface IProps {
  navigation: any;
}

const LeaderBoardScreen: React.FC<IProps> = ({ navigation }) => {
  const handleOKButtonClick = () => {
    navigation.replace(PAGE.HOME);
  };

  return (
    <>
      <View className="flex-1 justify-evenly items-center bg-[#531EC4]">
        <Text className="font-black text-7xl text-center text-red-400">
          LEADER BOARD
        </Text>
        <View className="w-full h-2/4 justify-evenly items-center">
          {leaderboardData.map((item, index) => {
            return (
              <ProfileRank
                key={index}
                name={item.name}
                score={item.score}
                description={`Rank ${index + 1}`}
                rank={index}
              />
            );
          })}
        </View>
      </View>
      <View className="flex bg-[#531EC4]">
        <View className="flex flex-row justify-center p-6 w-full bg-[#E75151]">
          <TouchableOpacity onPress={handleOKButtonClick}>
            <Text className="font-black text-2xl text-white">OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LeaderBoardScreen;
