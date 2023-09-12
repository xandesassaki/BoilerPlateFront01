import { HeaderContainer, HeaderOptions, HeaderOptionsGroup, StyledLogo, MenuButton } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/logo.svg";

export const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <MenuButton>
                <AiOutlineMenu style={{ width: '2rem', height: '2rem' }} />
            </MenuButton>
            <HeaderOptionsGroup>
                <HeaderOptions>Opção A</HeaderOptions>
                <HeaderOptions>Opção B</HeaderOptions>
            </HeaderOptionsGroup>
            <a href="/"><StyledLogo src={Logo} alt="Logo" /></a>
        </HeaderContainer>
    )
}