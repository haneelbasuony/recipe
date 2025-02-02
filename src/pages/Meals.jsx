import { useEffect, useState } from 'react';
import useMeals from '../hooks/useMeals';
import MealItem from '../components/MealItem';
import Loading from '../components/Loading';

const categories = [
  'Beef',
  'Breakfast',
  'Chicken',
  'Dessert',
  'Goat',
  'Lamb',
  'Miscellaneous',
  'Pasta',
  'Pork',
  'Seafood',
  'Side',
  'Starter',
  'Vegan',
  'Vegetarian',
];

export default function Meals() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let [category, setCategory] = useState('beef');
  let [selectedCat, setSellectedCat] = useState('');
  const { data: meals, isLoading } = useMeals(category);
  console.log(meals);
  if (isLoading) return <Loading></Loading>;

  return (
    <div className="felx flex-wrap w-full ">
      <h1 className="py-5 text-center mt-12 text-5xl font-bold bg-gradient-to-r from-[#F19525] to-[#D02D3E] text-transparent bg-clip-text">
        Learn, Cook, Eat Your Food
      </h1>
      <div className="flex flex-wrap mx-auto px-5 gap-3">
        {categories?.map((category) => (
          <button
            className={`rounded-2xl border-2 border-dashed border-black px-6 py-3 font-semibold uppercase transition-all duration-300 
        ${
          category === selectedCat
            ? 'bg-[#F19525] text-white shadow-[4px_4px_0px_black]'
            : 'bg-[#9F0E0E] text-black hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black]'
        } 
        active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none`}
            key={category}
            onClick={() => {
              setCategory(category);
              setSellectedCat(category);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap px-5 gap-y-10 gap-x-5 mt-16 h-auto w-full ">
        {meals?.map((meal) => (
          <MealItem key={meal?.idMeal} meal={meal}></MealItem>
        ))}
      </div>
    </div>
  );
}
