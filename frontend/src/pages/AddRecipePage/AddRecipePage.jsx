import Header from 'components/Header/Header';
import { Container, RightContainer, Wrapper } from "./AddRecipePage.module";
import { AddRecipeForm } from "../../components/AddRecipe/AddRecipeForm/AddRecipeForm";
import { FollowUsAddRecipe } from "../../components/AddRecipe/RecipeSocialMedia/RecipeSocialMedia";
import { PopularRecipe } from "../../components/AddRecipe/RecipePopular/RecipePopular";
import { Title } from "../../components/Title/Title";
import { Footer } from 'components/Footer/Footer';

export const AddRecipePage = () => {
    return (
        <div>
            <Header />
            <Wrapper>
                <Title>Add recipe</Title>
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