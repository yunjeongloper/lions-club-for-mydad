import React, { useState, useEffect } from 'react';
import styled, { css } from "styled-components";
import emblem from '../../assets/images/emblem.png';

const Navigation = () => {
    const [toggled, setToggled] = useState<boolean>(false);

    useEffect(() => {
      console.log(localStorage);
    });

    return (
        <NavigationContainer>
            <Logo href="#" >
              <img src={emblem} style={{margin: '3px 5px 0 0', width: 100}} />
            </Logo>
            <ResponsibleLinks toggled={toggled}>
                <MainLinks>
                    <MainLink1>
                        <Link1Title href="#">
                          국제라이온스협회
                        </Link1Title>
                          <Link1Dropdown>
                            <SubMenuLink>라이온스란?</SubMenuLink>
                            <SubMenuLink>창시자 및 라이온스 연혁</SubMenuLink>
                            <SubMenuLink>슬로건과 모토</SubMenuLink>
                          </Link1Dropdown>
                    </MainLink1>
                    <MainLink2>
                        <Link2Title href="#" >
                          356-D지구밀알
                        </Link2Title>
                        <Link2Dropdown >
                          <ul>
                              <li>
                                  <SubMenuLink>D1</SubMenuLink>
                              </li>
                              <li>
                                  <SubMenuLink>D2</SubMenuLink>
                              </li>
                              <li>
                                  <SubMenuLink>D3</SubMenuLink>
                              </li>
                          </ul>
                        </Link2Dropdown>
                    </MainLink2>
                    <MainLink3>
                        <Link3Title href="#" >
                          지구소식
                        </Link3Title>
                        <Link3Dropdown>
                          <ul>
                              <li>
                                  <SubMenuLink>날짜</SubMenuLink>
                              </li>
                              <li>
                                  <SubMenuLink>장소</SubMenuLink>
                              </li>
                              <li>
                                  <SubMenuLink>어쩌구</SubMenuLink>
                              </li>
                          </ul>
                        </Link3Dropdown>
                    </MainLink3>
                    <MainLink4>
                        <Link4Title href="#" >
                          커뮤니티
                        </Link4Title>
                        <Link4Dropdown >
                            <ul>
                                <li>
                                    <SubMenuLink>갤러리</SubMenuLink>
                                </li>
                            </ul>
                        </Link4Dropdown>
                    </MainLink4>
                </MainLinks>
            </ResponsibleLinks>
            <AuthLink href='http://localhost:3000/kakao'>
              <AuthText>로그인</AuthText>
            </AuthLink>
            <ResponsibleHamburger>
                <button onClick={() => {setToggled(!toggled); console.log(toggled)}}>
                    Ham
                </button>
            </ResponsibleHamburger>
        </NavigationContainer>
    )
}

interface IResponsibleLinksProps {
  toggled: boolean
}

const NavigationContainer = styled.div`
  width: 100wh;
  display: flex;
  flex-direction: row;
  color: white;
  padding: 20px 30px;
`;

const Logo = styled.a`
  align-self: center;
`;

const MainLinks = styled.ul`
  display: flex;
  flex-direction: row;
`;

const LinkTitle = styled.a`
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: 20px;
  padding-bottom: 10px;
  &::after {
    margin-top: 10px;
    content: '';
    display: block;
    width: 0;
    height: 4px;
    background: #0a3dab;
    transition: width .3s;
  }
`;

const MainLink = styled.li`
  margin-left: 2em;
  margin-right: 2em;
  &:hover ${LinkTitle} {
    color: #f9c910;
  }
  &:hover ${LinkTitle}::after {
    width: 100%;
  }
`;

const SubMenuLink = styled.a`
  display: block;
  margin-bottom: 10px;
  transition: font-size 0.1s ease-out;
  &:hover {
    cursor: pointer;
    font-size: 17px;
    font-weight: bold;
  }
`;

const LinkDropdown = styled.div`
  position: relative;
  display: none;
  margin-top: 15px;
  opacity: 1;
  transition: opacity 0.3s ease-out;
`;

const Link1Title = styled(LinkTitle)``;
const Link1Dropdown = styled(LinkDropdown)``;
const MainLink1 = styled(MainLink)`
  width: 180px;
  margin-right: 0px;
  &:hover ${Link1Dropdown} {
    display: block;
  }
`;

const Link2Title = styled(LinkTitle)``;
const Link2Dropdown = styled(LinkDropdown)``;
const MainLink2 = styled(MainLink)`
  &:hover ${Link2Dropdown} {
    display: block;
  }
`;

const Link3Title = styled(LinkTitle)``;
const Link3Dropdown = styled(LinkDropdown)``;
const MainLink3 = styled(MainLink)`
  &:hover ${Link3Dropdown} {
    display: block;
  }
`;

const Link4Title = styled(LinkTitle)``;
const Link4Dropdown = styled(LinkDropdown)``;
const MainLink4 = styled(MainLink)`
  &:hover ${Link4Dropdown} {
    display: block;
  }
`;

const AuthLink = styled.a`
  position: absolute;
  right: 30px;
  padding: 15px;
  width: 120px;
  margin-top: 30px;
  background-color: #0a3dab;
  border-radius: 10px;
  text-align: center;
`;

const AuthText = styled.span`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-family: Noto Sans KR;
`;

const ResponsibleHamburger = styled.div`
  display: none;
  z-index: 2000;
  @media (max-width: 900px) {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
`;

const ResponsibleLinks = styled.div<IResponsibleLinksProps>`
  display: flex;
  position: absolute;
  margin-top: 43px;
  margin-left: 130px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    display: none;
    ${props => props.toggled && css`
      height: 100vh;
      width: 100%;
      display: block;
      position: absolute;
      right: 0;
      justify-content: flex-end;
      background-color: black;
      padding-top: 30px;
      margin-top: -20px;
    `}
    & > ul {
      display: ${({toggled}) => toggled? 'block' : 'flex'};
    }
    & ${Link1Dropdown}, ${Link2Dropdown}, ${Link3Dropdown}, ${Link4Dropdown} {
      position: relative;
    }
  }
`;

export default Navigation;