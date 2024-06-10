'use client';
import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';
import Paper from '@mui/material/Paper';
import { Box, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import lgZoom from 'lightgallery/plugins/zoom';
import { styled } from '@mui/material/styles';
import lgShare from 'lightgallery/plugins/share';
import lgHash from 'lightgallery/plugins/hash';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import { PropsImageDetail } from '@/app/product/detail/[id]/page';
import Images from '@/assets/images';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

import { Div, Img } from '@/utils/styleComponent';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const newI: any = Images;
const Picture: React.FC<{ data: PropsImageDetail[]; imageColor?: PropsImageDetail; setImageColor: React.Dispatch<React.SetStateAction<PropsImageDetail>> }> = ({ data, imageColor, setImageColor }) => {
    const lightGalleryRef = useRef<any>(null);
    const [defaultV, setDefault] = useState<PropsImageDetail & { index: number }>({ ...data[0], index: 0 });
    const onInit = useCallback((detail: { instance: any }) => {
        if (detail) {
            detail.instance.closeGallery();
            lightGalleryRef.current = detail.instance;
        }
    }, []);
    const handleImageClick = () => {
        lightGalleryRef.current.openGallery(defaultV.index);
    };
    return (
        <Box sx={{ flexGrow: 1, zIndex: 1 }}>
            <Box>
                <Div $css=".masonry-gallery-demo{display: none;} ">
                    <LightGallery onInit={onInit} elementClassNames="masonry-gallery-demo" thumbnail={true} zoom={true} plugins={[lgThumbnail, lgZoom, lgHash]} speed={500}>
                        {data.map((img, index) => (
                            <Grid
                                key={img.src}
                                xs={2}
                                sx={{ width: '100px', height: '100px', cursor: 'pointer', maxWidth: 'none !important', opacity: defaultV.id === img.id ? 1 : 0.5 }}
                                data-lg-size="1600-1067"
                                className="gallery-item"
                                data-src={img.src}
                                data-sub-html={img.subHtml}
                            >
                                <Item sx={{ p: 0, width: '100%', height: '100%', cursor: 'pointer' }}>
                                    <Img src={img.src} alt="layers of blue." className="img-responsive" onClick={() => setDefault({ ...img, index })} />
                                </Item>
                            </Grid>
                        ))}
                    </LightGallery>
                </Div>
                <Grid xs={12}>
                    <Item sx={{ p: 0, width: '100%', height: '484px' }}>
                        <Img src={defaultV.src} alt="s" $css={`object-fit: contain; background-color: #0d0d0d;`} onClick={handleImageClick} />
                    </Item>
                </Grid>
                <div className="flex items-center mt-2">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        className="mySwiper"
                    >
                        {data.map((img, index) => (
                            <SwiperSlide key={img.id}>
                                <Grid xs={2} sx={{ mr: 2, width: '100px', height: '100px', cursor: 'pointer', opacity: defaultV.id === img.id ? 1 : 0.5 }}>
                                    <Item sx={{ p: 0, width: '100%', height: '100%' }} onMouseEnter={() => setDefault({ ...img, index })}>
                                        <Img src={img.src} alt="layers of blue." />
                                    </Item>
                                </Grid>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Box>
        </Box>
    );
};

export default Picture;
