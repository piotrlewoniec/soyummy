import { RecipeDetails } from 'components/RecipeDetails/RecipeDetails';
import { useParams } from 'react-router-dom';

export const DescriptionPage = () => {
  const { id } = useParams();

  return (
    <div>
      <RecipeDetails id={id} />
    </div>
  );
};
