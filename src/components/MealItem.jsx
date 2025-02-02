import { useNavigate } from 'react-router-dom';

export default function MealItem({ meal }) {
  let { idMeal, strMealThumb, strMeal } = meal ?? {};
  const navigate = useNavigate();
  function handleClick() {
    navigate('/mealdetails', { state: { idMeal: meal.idMeal } });
  }
  return (
    <div className="sm:w-full  lg:w-1/3 xl:w-1/4 text-center text-white hover:shadow-xl group  hover:scale-105 duration-300 transition-all bg-[#17191A] p-12 pb-4  rounded-[35px]">
      <img
        src={strMealThumb}
        className="w-full group-hover:rotate-[360deg] duration-700 transition-all rounded-full drop-shadow-xl  -translate-y-20  shadow-2xl"
      />
      <h3 className="font-semibold -mt-12 font-Pacifico tracking-wider	 text-xl">
        {strMeal}
      </h3>
      <button
        onClick={handleClick}
        className="text-white bg-gradient-to-r mt-4 bg-secondary bg-emerald-500 hover:bg-emerald-600 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300  px-8 py-2 rounded-full"
      >
        View Recipe
      </button>
    </div>
  );
}
