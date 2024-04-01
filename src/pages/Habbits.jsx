import React, { useState } from "react";
import Navbar from "./Navbar";

const Habbits = () => {
  const habitsData = [
    {
      title: "Aerobic Exercise",
      emoji: "🏃‍♂️",
      answer:
        "Engage in aerobic exercises to get your heart pumping. Aerobic exercise, such as walking, running, or cycling, increases the release of endorphins, which are chemicals in the brain that act as natural mood lifters. It also helps reduce stress and anxiety, promoting an overall positive mood.",
    },
    {
      title: "Mindfulness Meditation",
      emoji: "🧘",
      answer:
        "Practice mindfulness meditation to bring awareness to the present moment. Mindfulness helps in reducing stress and promoting emotional well-being. By focusing on your breath and being present in the moment, you can cultivate a sense of calm and contentment, contributing to a positive mood.",
    },
    {
      title: "Adequate Sleep",
      emoji: "😴",
      answer:
        "Ensure you get sufficient and quality sleep each night. Lack of sleep can negatively impact mood, cognitive function, and emotional resilience. Prioritize a consistent sleep schedule and create a relaxing bedtime routine to improve the quality of your sleep, ultimately contributing to a better mood.",
    },
    {
      title: "Healthy Nutrition",
      emoji: "🥗",
      answer:
        "Maintain a balanced and nutritious diet. The food you eat plays a crucial role in your mood and energy levels. Include a variety of fruits, vegetables, whole grains, and lean proteins in your diet. Avoid excessive consumption of processed foods, sugars, and caffeine, as they can contribute to mood swings and energy crashes.",
    },
    {
      title: "Social Connections",
      emoji: "👫",
      answer:
        "Nurture positive social connections. Spending time with friends and loved ones provides emotional support and fosters a sense of belonging. Engaging in meaningful conversations and activities with others can boost your mood and provide a support system during challenging times.",
    },
    {
      title: "Gratitude Practice",
      emoji: "🙏",
      answer:
        "Cultivate a gratitude practice by regularly expressing appreciation for the positive aspects of your life. Keeping a gratitude journal or taking time each day to reflect on things you are thankful for can shift your focus towards positivity, enhancing your overall mood and well-being.",
    },
    {
      title: "Creative Outlets",
      emoji: "🎨",
      answer:
        "Engage in creative activities that bring you joy. Whether it's drawing, writing, playing music, or any other form of self-expression, creative outlets provide a means to channel emotions positively. Expressing yourself creatively can be a therapeutic way to enhance your mood and cope with stress.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleHabitClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <div className="container mb-20">
        <h1 className="font-bold text-3xl">
          Recommended Habits for a Good Mood
        </h1>

        {habitsData.map((habit, index) => (
          <div
            key={index}
            className="mt-10 mb-20 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => handleHabitClick(index)}
          >
            <div className="w-full p-5 bg-[#222222] rounded-[10px] flex justify-center items-center gap-5">
              <div className="flex justify-center items-center !w-[80px] !h-[80px] bg-[#505050] rounded-full">
                <p className="text-5xl w-[80px] h-[80px] flex justify-center items-center">
                  {habit.emoji}
                </p>
              </div>
              <div className="text-white">
                <h2 className="font-bold text-2xl">{habit.title}</h2>
                <p
                  className="text-[14px] overflow-hidden"
                  style={{
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {habit.answer}
                </p>
              </div>
            </div>
            {expandedIndex === index && (
              <div className="p-5 bg-[#222222] rounded-b-[10px] text-white transition duration-200">
                <p>{habit.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <Navbar />
    </>
  );
};

export default Habbits;
