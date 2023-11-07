import { toast } from "react-toastify";
import {
    Button,
    Image,
    ImageWrapper,
    InputImage,
    NewImage,
} from "./RecipeImage.module";

import svg from "../../../../assets/icons/icons.svg";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../../../../redux/slice/addRecipeForm";

export const ImageRecipe = () => {
    const dispatch = useDispatch();
    const selectedFile = useSelector((state) => state.data.image);

    const handleFileSelect = (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            const fileSizeInBytes = file.size;
            const maxSizeInBytes = 5 * 1024 * 1024;

            if (fileSizeInBytes > maxSizeInBytes) {
                toast.error(
                    "File size exceeds 5 MB. Please select a smaller file size."
                );

                return;
            }

            dispatch(setImage(URL.createObjectURL(file)));
        }
    };

    return (
        <ImageWrapper>
            <InputImage
                type="file"
                id="fileElem"
                accept="image/*"
                onChange={handleFileSelect}
            />
            <Button id="fileSelect">
                {!selectedFile ? (
                    <Image src={svg} alt="icon-foto" />
                ) : (
                    <NewImage src={selectedFile} alt="photoRecipe" />
                )}
            </Button>
        </ImageWrapper>
    );
};