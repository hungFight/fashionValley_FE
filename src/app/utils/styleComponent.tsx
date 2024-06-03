'use client';
import Link from 'next/link';
import styled from 'styled-components';

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
