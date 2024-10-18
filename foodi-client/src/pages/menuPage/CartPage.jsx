import React, { useState } from "react";

const mealsData = {
  breakfast: [
    {
      name: "Omelette",
      image: "https://via.placeholder.com/150",
      protein: 12,
      carbs: 1,
      fats: 10,
      fiber: 0,
      calories: 150
    },
    {
      name: "Pancakes",
      image: "https://via.placeholder.com/150",
      protein: 6,
      carbs: 20,
      fats: 8,
      fiber: 2,
      calories: 300
    }
  ],
  lunch: [
    {
      name: "Chicken Salad",
      image: "https://via.placeholder.com/150",
      protein: 30,
      carbs: 5,
      fats: 15,
      fiber: 3,
      calories: 250
    },
    {
      name: "Grilled Cheese",
      image: "https://via.placeholder.com/150",
      protein: 14,
      carbs: 30,
      fats: 22,
      fiber: 1,
      calories: 400
    }
  ],
  dinner: [
    {
      name: "Steak",
      image: "https://via.placeholder.com/150",
      protein: 40,
      carbs: 0,
      fats: 25,
      fiber: 0,
      calories: 500
    },
    {
      name: "Spaghetti",
      image: "https://via.placeholder.com/150",
      protein: 10,
      carbs: 60,
      fats: 8,
      fiber: 4,
      calories: 600
    }
  ]
};

const NutritionalInfo = ({ protein, carbs, fats, fiber }) => (
  <div className="flex justify-around text-xl">
    <div className="flex flex-col justify-center items-center mx-5">
      <div>Protein</div>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/755/755346.png"
          className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
          alt="Protein Icon"
        />
      </div>
      <div className="mt-1 text-xl">{protein} gm</div>
    </div>
    <div className="flex flex-col justify-center items-center mx-5">
      <div>Carbs</div>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5562/5562026.png"
          className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
          alt="Carbs Icon"
        />
      </div>
      <div className="mt-1 text-xl">{carbs} gm</div>
    </div>
    <div className="flex flex-col justify-center items-center mx-5">
      <div>Fats</div>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2400/2400736.png"
          className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
          alt="Fats Icon"
        />
      </div>
      <div className="mt-1 text-xl">{fats} gm</div>
    </div>
    <div className="flex flex-col justify-center items-center mx-5">
      <div>Fiber</div>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4661/4661512.png"
          className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
          alt="Fiber Icon"
        />
      </div>
      <div className="mt-1 text-xl">{fiber} gm</div>
    </div>
  </div>
);

const MealCard = ({ meal }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <div
        className="flex justify-between p-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <div className="text-xl font-bold">{meal.name}</div>
          <span className="ml-4 text-lg">{meal.calories} Cal</span>
        </div>
        <div className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="p-3">
          <div className="flex justify-between">
            <img src={meal.image} className="w-48 rounded-lg" alt={meal.name} />
            <div className="flex flex-col justify-center flex-grow ml-4">
              <NutritionalInfo
                protein={meal.protein}
                carbs={meal.carbs}
                fats={meal.fats}
                fiber={meal.fiber}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Section = ({ title, meals }) => (
  <div className="my-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {meals.map((meal, index) => (
      <MealCard key={index} meal={meal} />
    ))}
  </div>
);

const CartPage = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* banner */}
      <div className="bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className="pt-20 flex flex-col items-center justify-center">
          {/* content */}
          <div className="text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              ME<span className="text-green">ALS</span>
            </h2>
          </div>
        </div>
      </div>

      <Section  title="Breakfast" meals={mealsData.breakfast} />
      <Section title="Lunch" meals={mealsData.lunch} />
      <Section title="Dinner" meals={mealsData.dinner} />
    </div>
  );
};

export default CartPage;




