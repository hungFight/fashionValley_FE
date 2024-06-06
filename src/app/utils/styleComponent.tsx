'use client';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

export const Div = styled.div<{ $css?: string; $width?: string; $height?: string }>`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    ${(props) => props.$css};
`;
export const Links = styled(Link)<{ $css?: string; $width?: string; $height?: string }>`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    ${(props) => props.$css};
`;

export const H3 = styled.h3<{ $css?: string; $width?: string; $height?: string }>`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    ${(props) => props.$css};
`;
export const H3BOX = styled.h3<{ $css?: string; $width?: string; $height?: string }>`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    ${(props) => props.$css};
`;

export const P = styled.p<{ $css?: string; $width?: string; $height?: string }>`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    ${(props) => props.$css};
`;
export const Img = styled.img<{ $css?: string; $width?: string; $height?: string }>`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    ${(props) => props.$css};
`;
