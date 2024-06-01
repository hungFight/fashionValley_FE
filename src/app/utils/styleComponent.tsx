'use client';
import styled from 'styled-components';

export const Div = styled.div<{ css?: string; width?: string; height?: string }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    ${(props) => props.css};
`;
