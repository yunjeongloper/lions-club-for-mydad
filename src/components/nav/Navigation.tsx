import React, { useState } from 'react';
import styled, { keyframes, css } from "styled-components";

const Navigation = () => {
    const [toggled, setToggled] = useState<boolean>(false);

    return (
        <NavigationContainer>
            <Logo>
                LOGO
            </Logo>
            <ResponsibleLinks toggled={toggled}>
                <span></span>
                <MainLinks>
                    <MainLink1>
                        <Link1Title href="#">
                          국제라이온스협회
                        </Link1Title>
                        {/* <Stripe style={{ left: left }} /> */}
                        <Link1Desc>
                            <ul>
                                <li>
                                    <a>라이온스란?</a>
                                </li>
                                <li>
                                    <a>창시자 및 라이온스 연혁</a>
                                </li>
                                <li>
                                    <a>슬로건과 모토</a>
                                </li>
                            </ul>
                        </Link1Desc>
                    </MainLink1>

                    <MainLink2>
                        <Link2Title href="#">
                          356-D지구밀알
                        </Link2Title>
                        <Link2Desc>
                            <ul>
                                <li>
                                    <a>D1</a>
                                </li>
                                <li>
                                    <a>D2</a>
                                </li>
                                <li>
                                    <a>D3</a>
                                </li>
                            </ul>
                        </Link2Desc>
                    </MainLink2>

                    <MainLink3>
                        <Link3Title href="#">
                          지구소식
                        </Link3Title>
                        <Link3Desc>
                            <ul>
                                <li>
                                    <a>날짜</a>
                                </li>
                                <li>
                                    <a>장소</a>
                                </li>
                                <li>
                                    <a>어쩌구</a>
                                </li>
                            </ul>
                        </Link3Desc>
                    </MainLink3>

                    <MainLink4>
                        <Link4Title href="#">
                          커뮤니티
                        </Link4Title>
                        <Link4Desc>
                            <ul>
                                <li>
                                    <a>갤러리</a>
                                </li>
                            </ul>
                        </Link4Desc>
                    </MainLink4>
                </MainLinks>
                <AuthLinks>
                    <AuthLink>회원가입</AuthLink>
                    <AuthLink>로그인</AuthLink>
                </AuthLinks>
            </ResponsibleLinks>
            <ResponsibleHamburger>
                <button onClick={() => setToggled(!toggled)}>
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
`;

const Logo = styled.span`
  align-self: center;
`;

const MainLinks = styled.ul`
  display: flex;
  flex-direction: row;
`;

// const Stripe = styled.div`
//   width: 200px;
//   height: 10px;
//   background: blue;
//   position: absolute;
//   bottom: 0;
//   transition: left 0.3s;
// `;

// const MainLink = styled.li`
//   margin: 10px;
// `;

const MainLink1 = styled.li`
  margin: 10px;
`;
const Link1Title = styled.a`
  color: white;
  text-decoration: none;
`;
const Link1Desc = styled.div`
  position: absolute;
  display: none;

  opacity: 1;
  transition: opacity 0.3s ease-out;

  ${MainLink1}:hover & {
    display: block;
    // opacity: 1;
  }
`;

const MainLink2 = styled.li`
  margin: 10px;
`;
const Link2Title = styled.a`
  color: white;
  text-decoration: none;
`;
const Link2Desc = styled.div`
  position: absolute;
  display: none;

  ${MainLink2}:hover & {
    display: block;
  }
`;

const MainLink3 = styled.li`
  margin: 10px;
`;
const Link3Title = styled.a`
  color: white;
  text-decoration: none;
`;
const Link3Desc = styled.div`
  position: absolute;
  display: none;

  ${MainLink3}:hover & {
    display: block;
  }
`;

const MainLink4 = styled.li`
  margin: 10px;
`;
const Link4Title = styled.a`
  color: white;
  text-decoration: none;
`;
const Link4Desc = styled.div`
  position: absolute;
  display: none;

  ${MainLink4}:hover & {
    display: block;
  }
`;

const AuthLinks = styled.ul`
  display: flex;
  flex-direction: row;
`;

const AuthLink = styled.li`
  margin: 10px;
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
  flex: 1;
  display: flex;
  flex-direction: row;
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
    `}
    & > ul {
      display: ${({toggled}) => toggled? 'block' : 'flex'};
    }
    & ${Link1Desc}, ${Link2Desc}, ${Link3Desc}, ${Link4Desc} {
      position: relative;
    }
  }
`;

export default Navigation;