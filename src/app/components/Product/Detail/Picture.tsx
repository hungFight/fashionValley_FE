'use client';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Images from '@/app/assets/images';
import Image from 'next/image';
import { Img } from '@/app/utils/styleComponent';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const newI: any = Images;
const Picture = () => {
    const [defaultV, setDefault] = useState<string>(Images.theme6.src);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Item sx={{ p: 0, width: '100%', height: '484px' }}>
                        <Img src={defaultV} alt="s" $css={`object-fit: contain; background-color: #0d0d0d;`} />
                    </Item>
                </Grid>
                {Object.keys(Images).map((key, index) => {
                    if (index < 5)
                        return (
                            <Grid xs={2} key={key} sx={{ width: '100px', height: '100px', cursor: 'pointer', opacity: defaultV === newI[key].src ? 1 : 0.5 }}>
                                <Item sx={{ p: 0, width: '100%', height: '100%' }} onMouseEnter={() => setDefault(newI[key].src)}>
                                    <Img src={newI[key].src} alt="s" />
                                </Item>
                            </Grid>
                        );
                })}
            </Grid>
        </Box>
    );
};

export default Picture;
