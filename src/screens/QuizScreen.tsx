import React, { useEffect, useState } from "react";
import { View } from "../components/ReactNativeCustom";
import Choice from "../components/Choice";
import TitleQuiz from "../components/TitleQuiz";
import { IQuestion, questions } from "../mocks/question";
import { getShuffledQuestions } from "../utils/help";
import Footer from "../components/Footer";
import { PAGE } from "../utils/constants";

interface IProps {
  navigation: any;
}

const QuizScreen: React.FC<IProps> = ({ navigation }) => {
  const [score, setScore] = useState<number>(0);
  const [questionList, setQuestionList] = useState<IQuestion[] | []>([]);
  const [current, setCurrent] = useState<number>(0);
  const [questionSelected, setQuestionSelected] = useState<string[]>([]);
  const [isDisable, setIsDisable] = useState({
    nextButton: true,
    backButton: true,
  });

  useEffect(() => {
    setQuestionList(getShuffledQuestions(questions));
  }, []);

  const handleSelectButtonClick = (questionTarget: string, index: number) => {
    const newQuestionSelected = [...questionSelected];
    newQuestionSelected[index] = questionTarget;
    setQuestionSelected(newQuestionSelected);
    setIsDisable({ backButton: false, nextButton: false });
  };

  const handleNextButtonClick = () => {
    if (questionSelected[current] && current < questionList.length - 1) {
      setCurrent((perv: number) => perv + 1);
    } else {
      navigation.replace(PAGE.LEADER);
    }
    setIsDisable({
      ...isDisable,
      nextButton: !Boolean(questionSelected[current + 1]),
    });
    if (questionSelected[current] === questionList[current]?.correctAnswer) {
      setScore((pervScore) => pervScore + 1);
    }
  };

  const handleBackButtonClick = () => {
    if (questionSelected[current - 1]) {
      setCurrent((perv: number) => perv - 1);
    }
    setIsDisable({ nextButton: false, backButton: current === 0 });
    if (
      questionSelected[current - 1] === questionList[current - 1]?.correctAnswer
    ) {
      setScore((pervScore) => pervScore - 1);
    }
  };

  return (
    <>
      <View className="flex-1 justify-evenly items-center bg-[#531EC4]">
        <TitleQuiz text={questionList[current]?.question} num={current + 1} />
        <View className="flex justify-between items-center w-full my-5 h-2/4 ">
          {questionList[current]?.answers.map((answers) => (
            <Choice
              key={answers}
              selected={answers === questionSelected[current]}
              text={answers}
              index={current}
              handleButtonClick={handleSelectButtonClick}
            />
          ))}
        </View>
      </View>
      <View className="flex bg-[#531EC4]">
        <Footer
          limitMax={questionList.length}
          limitMin={0}
          current={current}
          isDisable={isDisable}
          handleNextButtonClick={handleNextButtonClick}
          handleBackButtonClick={handleBackButtonClick}
        />
      </View>
    </>
  );
};

export default QuizScreen;
