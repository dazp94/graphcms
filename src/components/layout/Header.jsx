import Link from "next/link";
import styled from "styled-components";
import routes from "../../../config/routes";

const HeaderContainer = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background: white;
`;

const LinkContainer = styled.a`
  margin: 5px;
  text-decoration: none;
`;

const Header = () => (
  <HeaderContainer>
    {routes.map((route) => (
      <Link key={route} href={route.route} passHref>
        <LinkContainer>{route.name}</LinkContainer>
      </Link>
    ))}
  </HeaderContainer>
);

export default Header;
