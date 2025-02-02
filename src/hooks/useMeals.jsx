import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useMeals(category) {
  function getMeals(category) {
    return axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
  }

  return useQuery({
    queryKey: ['meals', category],
    queryFn: () => getMeals(category),
    enabled: !!category,
    select: (data) => data?.data?.meals,
  });
}
