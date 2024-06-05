'use client';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Images from '@/app/assets/images';
import Image from 'next/image';
import { Img } from '@/app/utils/styleComponent';
import { PropsImageDetail, PropsProductDetail } from '@/app/product/detail/[id]/page';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const newI: any = Images;
const Picture: React.FC<{ data: PropsImageDetail[] }> = ({ data }) => {
    const [defaultV, setDefault] = useState<PropsImageDetail>(data[0]);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Item sx={{ p: 0, width: '100%', height: '484px' }}>
                        <Img src={defaultV.url} alt="s" $css={`object-fit: contain; background-color: #0d0d0d;`} />
                    </Item>
                </Grid>
                {data.map((img, index) => (
                    <Grid key={img.url} xs={2} sx={{ width: '100px', height: '100px', cursor: 'pointer', opacity: defaultV.id === img.id ? 1 : 0.5 }}>
                        <Item sx={{ p: 0, width: '100%', height: '100%' }} onMouseEnter={() => setDefault(img)}>
                            <Img src={img.url} alt="s" />
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Picture;
