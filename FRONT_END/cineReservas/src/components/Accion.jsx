import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { Box } from '@mui/material';



export const Accion = () => {
    const [usuario, setUsuario] = useState([])


    useEffect(()=>{
    const apiUrl = (`https://api.themoviedb.org/3/discover/movie?api_key=39776421d833d97a09a219ee03f2844a&with_genres=28&language=es-MX`)
    axios.get(apiUrl)
    .then((response) => {
        setUsuario(response.data.results);
    })
    .catch((error) => {
        console.error(error);
    });
    console.log(apiUrl)
    },[])

return (
    <Box> 
        <h5 fontweight={600} sx= {{color: '#fff'}}>ACCIÓN</h5>
        <Swiper
            modules={[Navigation]}
            spaceBetween={5}
            slidesPerView={5}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
        {usuario.map((movie) => (
        <SwiperSlide key={movie.id} className="movie-item">
        <img
            style = {{
                width: '100%',
                aspectRatio: '16/9',
                objectFit: 'cover',
                borderRadius: '10px'
            }}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
            alt={movie.title}
        />
        </SwiperSlide>
    ))}
        ...
    </Swiper>
    </Box>    
)
}
