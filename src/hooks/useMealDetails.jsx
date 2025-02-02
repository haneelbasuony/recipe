import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useMealDetails(idMeal) {
  function getDetails(idMeal) {
    return axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
  }

  return useQuery({
    queryKey: ['details', idMeal],
    queryFn: () => getDetails(idMeal),
    select: (data) => data?.data?.meals?.[0],
  });
}
