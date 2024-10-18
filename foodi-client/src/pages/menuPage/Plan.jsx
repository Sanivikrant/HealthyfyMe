import React, { useContext, useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Plan = () => {

const { calory } = useParams();
  const [isLoading, setIsloading] = useState(true);

  const [breakFastFooods, setBreakFaseFoods] = useState();
  const [lunchFoods, setLunchFoods] = useState();
  const [dinnerFoods, setDinnerFoods] = useState();
  const [totalCalory, setTotalCalory] = useState();

  const getData = async () => {
    try {
      const apidata = await axios.post(
        "https://healthapp-backend.onrender.com/api/v1/plan/calculate",
        {
          calories: 4000,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let cal = 0;
      apidata.data.breakfast.currentFoods.forEach((ele) => {
        cal += ele.calory;
      });
      apidata.data.lunch.currentFoods.forEach((ele) => {
        cal += ele.calory;
      });
      apidata.data.dinner.currentFoods.forEach((ele) => {
        cal += ele.calory;
      });

      setTotalCalory(cal);
      setBreakFaseFoods(apidata.data.breakfast);
      setLunchFoods(apidata.data.lunch);
      setDinnerFoods(apidata.data.dinner);
      setIsloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [open1, setOpen1] = useState(0);
  const [open2, setOpen2] = useState(0);
  const [open3, setOpen3] = useState(0);
  const [open4, setOpen4] = useState(0);
  const [open5, setOpen5] = useState(0);
  const [open6, setOpen6] = useState(0);
  
  const handleOpen1 = (value) => setOpen1(open1 === value ? 0 : value);
  const handleOpen2 = (value) => setOpen2(open2 === value ? 0 : value);
  const handleOpen3 = (value) => setOpen3(open3 === value ? 0 : value);
  const handleOpen4 = (value) => setOpen4(open4 === value ? 0 : value);
  const handleOpen5 = (value) => setOpen5(open5 === value ? 0 : value);
  const handleOpen6 = (value) => setOpen6(open6 === value ? 0 : value);

  if (isLoading) return <></>;
  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="sm:container sm:mx-auto backdrop-blur-xl backdrop-brightness-90 rounded-3xl"
      >

        <div className="flex justify-between">
          <div className="p-12 break-words w-full">
            <div className="w-full flex justify-center mb-5">
              <p className="text-3xl font-bold text-gray-600">Diet Plan</p>
            </div>
            {/* Breakfast */}
            <p className="text-2xl font-semibold text-green-700">Breakfast</p>
            {breakFastFooods.currentFoods.map((ele, index) => (
              <Accordion
                open={open1 === index + 1}
                icon={<Icon id={1} open={open1} />}
                className="bg-white p-3 rounded-lg my-4"
              >
                <AccordionHeader onClick={() => handleOpen1(index + 1)}>
                  <div className="flex justify-between w-full">
                    <div className="text-2xl ml-4 pb-1">{ele.name}</div>
                    <div className="mr-20 flex items-center">
                      {ele.calory} Cal / {ele.contentPerType}
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <div className="flex justify-between p-3">
                    <div>
                      <img src={ele.image} className="w-48 rounded-lg" />
                    </div>
                    <div className="flex justify-around text-xl">
                      {/* Protein */}
                      <div className="flex flex-col justify-center items-center mx-5">
                        <div>Protein</div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/755/755346.png"
                          className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                        />
                        <div className="mt-1 text-xl">{ele.protein} gm</div>
                      </div>
                      {/* Carbs */}
                      <div className="flex flex-col justify-center items-center mx-5">
                        <div>Carbs</div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/5562/5562026.png"
                          className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                        />
                        <div className="mt-1 text-xl">{ele.carbs} gm</div>
                      </div>
                      {/* Fats */}
                      <div className="flex flex-col justify-center items-center mx-5">
                        <div>Fats</div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/2400/2400736.png"
                          className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                        />
                        <div className="mt-1 text-xl">{ele.fats} gm</div>
                      </div>
                      {/* Fiber */}
                      <div className="flex flex-col justify-center items-center mx-5">
                        <div>Fiber</div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/4661/4661512.png"
                          className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                        />
                        <div className="mt-1 text-xl">{ele.fiber} gm</div>
                      </div>
                    </div>
                  </div>
                </AccordionBody>
              </Accordion>
            ))}
            {/* Lunch */}
            <p className="text-2xl font-semibold text-green-700">Lunch</p>
            {lunchFoods.currentFoods.map((ele, index) => (
              <Accordion
                open={open2 === index + 1}
                icon={<Icon id={1} open={open2} />}
                className="bg-white p-3 rounded-lg my-4"
              >
                <AccordionHeader onClick={() => handleOpen2(index + 1)}>
                  <div className="flex justify-between w-full">
                    <div className="text-2xl ml-4 pb-1">{ele.name}</div>
                    <div className="mr-20 flex items-center">
                      {ele.calory} Cal / {ele.contentPerType}
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <div className="flex justify-between p-3">
                    <div>
                      <img src={ele.image} className="w-48 rounded-lg" />
                    </div>
                    <div className="flex justify-around text-xl">
                      {/* Protein */}
                      <div className="flex flex-col justify-center items-center mx-5">
                        <div>Protein</div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/755/755346.png"
                          className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                        />
                        <div className="mt-1 text-xl">{ele.protein} gm</div>
                      </div>
                      {/* Carbs */}
                      <div className="flex flex-col justify-center items-center mx-5">
                        <div>Carbs</div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/5562/5562026.png"
                          className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                        />
                        <div className="mt-1 text-xl">{ele.carbs} gm</div>
                      </div>
                      {/* Fats */}
                      <div className="flex flex-col justify-center items-center mx-5">
                        <div>Fats</div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/2400/2400736.png"
                          className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                        />
                        <div className="mt-1 text-xl">{ele.fats} gm</div>
                      </div>
                      {/* Fiber */}
                      <div className="flex flex-col justify-center items-center mx-5">
                        <div>Fiber</div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/4661/4661512.png"
                          className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                        />
                        <div className="mt-1 text-xl">{ele.fiber} gm</div>
                      </div>
                    </div>
                  </div>
                </AccordionBody>
              </Accordion>
            ))}
            {/* Dinner */}
            <p className="text-2xl font-semibold text-green-700">Dinner</p>
            {dinnerFoods.currentFoods.map((ele, index) => (
              <Accordion
                open={open3 === index + 1}
                icon={<Icon id={1} open={open3} />}
                className="bg-white p-3 rounded-lg my-4"
              >
                <AccordionHeader onClick={() => handleOpen3(index + 1)}>
                  <div className="flex justify-between w-full">
                    <div className="text-2xl ml-4 pb-1">{ele.name}</div>
                    <div className="mr-20 flex items-center">
                      {ele.calory} Cal / {ele.contentPerType}
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <div className="flex justify-between p-3">
                    <div>
                      <img src={ele.image} className="w-48 rounded-lg" />
                    </div>
                    <div className="flex justify-around text-xl">
                      {/* Protein */}
                      <div className="flex flex-col justify-center items-center mx-5">
                        <div>Protein</div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/755/755346.png"
                          className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                        />
                        <div className="mt-1 text-xl">{ele.protein} gm</div>
                      </div>
                      {/* Carbs */}
                      <div className="flex flex-col justify-center items-center mx-5">
                        <div>Carbs</div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/5562/5562026.png"
                          className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                        />
                        <div className="mt-1 text-xl">{ele.carbs} gm</div>
                      </div>
                      {/* Fats */}
                      <div className="flex flex-col justify-center items-center mx-5">
                        <div>Fats</div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/2400/2400736.png"
                          className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                        />
                        <div className="mt-1 text-xl">{ele.fats} gm</div>
                      </div>
                      {/* Fiber */}
                      <div className="flex flex-col justify-center items-center mx-5">
                        <div>Fiber</div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/4661/4661512.png"
                          className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                        />
                        <div className="mt-1 text-xl">{ele.fiber} gm</div>
                      </div>
                    </div>
                  </div>
                </AccordionBody>
              </Accordion>
            ))}
            {/* Total Calorie Section */}
            <div className="my-10 text-center">
              <div className="text-2xl font-bold">Total Calories:</div>
              <div className="text-3xl font-semibold text-green-700">
                {totalCalory} Cal
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </>)
}

export default Plan