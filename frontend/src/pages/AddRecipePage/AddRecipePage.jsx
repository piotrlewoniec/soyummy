import Header from 'components/Header/Header';
import { Container, RightContainer, Wrapper } from './AddRecipePage.module';
import { AddRecipeForm } from '../../components/AddRecipe/AddRecipeForm/AddRecipeForm';
import { FollowUsAddRecipe } from '../../components/AddRecipe/RecipeSocialMedia/RecipeSocialMedia';
import { PopularRecipe } from '../../components/AddRecipe/RecipePopular/RecipePopular';
import { MainPageTitle } from '../../components/MainPageTitle/MainPageTitle';
import { Footer } from 'components/Footer/Footer';

export const AddRecipePage = () => {
  return (
    <div>
      <Header />
      <Wrapper>
        <MainPageTitle title="Add Recipe" />
        <Container>
          <AddRecipeForm />
          <RightContainer>
            <FollowUsAddRecipe />
            <PopularRecipe />
          </RightContainer>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
};
// export default AddRecipePage;
