import { Container, RightContainer, Wrapper } from "./AddRecipePage.module";
import { AddRecipeForm } from "../../components/AddRecipe/AddRecipeForm/AddRecipeForm";
import { FollowUsAddRecipe } from "../../components/AddRecipe/RecipeSocialMedia/RecipeSocialMedia";
import { PopularRecipe } from "../../components/AddRecipe/RecipePopular/RecipePopular";
import { Title } from "../../components/Title/Title";

export const AddRecipePage = () => {
    return (
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
    );
};
// export default AddRecipePage;