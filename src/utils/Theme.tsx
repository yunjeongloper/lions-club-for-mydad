import baseStyled, { ThemedStyledInterface } from 'styled-components';

// 이렇게 글로벌 테마 프롭스를 관리한다.
export const theme = {
    color: {
        lightShade: '#eeeee8' /* Cararra */,
        lightAccent: '#949b92' /* Stack */,
        mainBrand: '#876351' /* Shadow */,
        darkShade: '#252423' /* Shark */,
        darkAccent: '#ac7742' /* Cape Palliser */,
        primary: '#282c34' /* Shadow */,
        info: '#232525' /* Shark */,
        success: '#5e9850' /* Fruit Salad */,
        warning: '#db8818' /* Zest */,
        danger: '#f44336' /* Pomegranate */,
    },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;