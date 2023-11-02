import { Menu, MenuItem } from "@mui/material";
import Button from '@mui/material/Button';
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";


export const ProfileContainer = styled.div`
  display: flex;
  gap: 50px;
  align-content: center;
  align-items: center;
  position: relative;
`;

export const ProfileDetailsContainer = styled.div`
  position: relative;
  display: flex;
  gap: 14px;
  align-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ProfileImage = styled.div`
  display: block;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
`;

export const ProfileName = styled(Button)`
  &.MuiButton-root {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
    text-transform: none;
    text-transform: none;

    text-decoration: none;
    font-weight: bold;
    padding: 12px 0;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 170%;
    ${({ theme }) => {
        const location = useLocation();
        if (location.pathname.includes("/recipe/")) {
            return `
        color: black;

        :hover {
          color: ${theme.colors.accent};
        }
        &.active {
          color: ${theme.colors.accent};
        }
      `;
        }
    }}

    @media (min-width: 1440px) {
      ${({ theme }) => {
        const location = useLocation();
        if (location.pathname.includes("/main")) {
            return `
        color: black;

      `;
        }
    }}
    }
  }
`;
export const MenuHovered = styled(Menu)`
  &.MuiPaper-root,
  .MuiMenu-paper {
    background-color: ${({ theme }) =>
        theme.colors.backgroundPrimary} !important;
  }
`;

export const MenuItemHover = styled(MenuItem)`


  margin: 0;
  padding: 0;
  text-decoration: none;

  background-color: ${({ theme }) => theme.colors.backgroundPrimary} !important;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  width: 177px;
  height: 160px;
`;

export const HoveredText = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};

  width: 177px;
  height: 160px;


  border-radius: 8px;
  pointer-events: none;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const HoverContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  width: 177px;
  height: 170px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const LogOut = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  width: 141px;
  border-radius: 30px;
  transform: skewX(10deg);
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const EditContainer = styled.div`
  display: flex;
  margin-bottom: 32px;
`;
export const EditText = styled.p`
  margin-right: 53px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
export const LogOutText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: white;
  transform: skewX(-10deg);
  padding: 12px 20px;
`;

export const Pen = styled(HiOutlinePencil)`
  color: ${({ theme }) => theme.colors.textPrimary};
`;
export const ButtonClose = styled(AiOutlineClose)`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;