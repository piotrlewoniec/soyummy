import { Points } from "../../components/Points/Points";

import { TitleText, Wrapper, Section } from "./Title.module";

export const Title = ({ children }) => {
    return (
        <Section>
            <Points />
            <Wrapper>
                <TitleText>{children}</TitleText>
            </Wrapper>
        </Section>
    );
};