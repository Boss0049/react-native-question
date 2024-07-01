import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import QuizScreen from "../screens/QuizScreen";
import LeaderBoardScreen from "../screens/LeaderBoardScreen";
import { Text, View } from "../components/ReactNativeCustom";
import { PAGE } from "../utils/constants";

type RootStackParamList = {
  [PAGE.HOME]: React.FC;
  [PAGE.QUIZ]: React.FC;
  [PAGE.LEADER]: React.FC;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const screenOptions = {
    headerBackTitle: "",
    headerShadowVisible: false,
    headerBackTitleStyle: { fontSize: 30 },
    headerStyle: {
      backgroundColor: "#531EC4",
    },
  };

  const renderHeaderTitle = (title: string) => (
    <View className="">
      <Text className={`font-black text-5xl text-right`}>{title}</Text>
    </View>
  );

  return (
    <Stack.Navigator initialRouteName={PAGE.HOME}>
      <Stack.Screen
        name={PAGE.HOME}
        component={HomeScreen}
        options={{
          ...screenOptions,
          headerTitle: () => renderHeaderTitle(PAGE.HOME),
        }}
      />
      <Stack.Screen
        name={PAGE.QUIZ}
        component={QuizScreen}
        options={{
          ...screenOptions,
          headerTitle: () => renderHeaderTitle(PAGE.QUIZ),
          headerTitleStyle: { color: "white" },
        }}
      />
      <Stack.Screen
        name={PAGE.LEADER}
        component={LeaderBoardScreen}
        options={{
          ...screenOptions,
          headerTitle: () => renderHeaderTitle(PAGE.LEADER),
        }}
      />
    </Stack.Navigator>
  );
}
