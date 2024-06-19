import Onboard1 from "../../assets/images/onboard_img1.png";
import Onboard2 from "../../assets/images/onboard_img2.png";
import Onboard3 from "../../assets/images/onboard_img3.png";

import Google from "../../assets/images/Google.svg";
import Apple from "../../assets/images/Apple.svg";

import Slider1 from "../../assets/images/Slider1.png";
import Slider2 from "../../assets/images/Slider2.png";
import Slider3 from "../../assets/images/Slider3.png";

import Recommend1 from "../../assets/images/recommend1.png";
import Recommend2 from "../../assets/images/recommend2.png";
import Recommend3 from "../../assets/images/recommend3.png";
import Recommend4 from "../../assets/images/recommend4.png";
import Recommend5 from "../../assets/images/recommend5.png";
import Recommend6 from "../../assets/images/recommend6.png";

import Poster1 from "../../assets/images/poster1.png";
import Poster2 from "../../assets/images/poster2.png";
import Poster3 from "../../assets/images/poster3.png";
import Poster4 from "../../assets/images/poster4.png";
import Poster5 from "../../assets/images/poster5.png";
import Poster6 from "../../assets/images/poster6.png";

import Cast1 from "../../assets/images/cast1.png";
import Cast2 from "../../assets/images/cast2.png";
import Cast3 from "../../assets/images/cast3.png";
import Cast4 from "../../assets/images/cast4.png";
import Cast5 from "../../assets/images/cast5.png";
import Cast6 from "../../assets/images/cast6.png";

export const pages = [
    {
        id: 1,
        image: Onboard1,
        heading: 'Welcome to FlickTickets!',    
        Text: 'Your ultimate destination for booking movie tickets effortlessly.',
        
    },
    {
        id: 2,
        image: Onboard2,
        heading: 'Secure Your Seats',
        Text: 'Choose your perfect seats and book instantly, hassle-free.',

    },
    {
        id: 3,
        image: Onboard3,
        heading: 'Ready to Get Started?',
        Text: 'Sign up now and dive into the world of movies with FlickTickets!',

    },
]

export const log_methods = [
    {
        id: 1,
        image: <Google />, 
        text: 'Sign Up with Google',
    },
    {
        id: 2,
        image: <Apple />, 
        text: 'Sign Up with Apple',
    },
]

export const slider_data = [
    {
        id: 1,
        image: Slider1,
        upcoming: 'Upcoming Movie',
        movie: 'Turning Red',
        movie_timing: 'Booking Open On July 22,2024',
    },
    {
        id: 2,
        image: Slider2,
        movie: 'Turning Red',
        movie_timing: 'Booking Open On July 22,2024',
        book: 'book now',
    },
    {
        id: 3,
        image: Slider3,
        movie: 'Incredibles 2',
        movie_timing: 'Booking is Open Now',
        book: 'book now',
    },
]


export const recommend_data = [
    {
        id: 1,
        image: Recommend1, 
        name: 'Bad Boys',
        rating: '8.1',
    },
    {
        id: 2,
        image: Recommend2, 
        name: 'The Smurfs',
        rating: '8.1',
    },
    {
        id: 3,
        image: Recommend3, 
        name: 'The Lion Kin',
        rating: '8.1',
    },
    {
        id: 4,
        image: Recommend4, 
        name: 'Deadpool',
        rating: '8.1',
    },
    {
        id: 5,
        image: Recommend5, 
        name: 'Aladdin',
        rating: '8.1',
    },
    {
        id: 6,
        image: Recommend6, 
        name: 'Kung Fu Pan',
        rating: '8.1',
    },

]



export const upcoming_data = [
    {
        id: 1,
        image: Poster1, 
        name: 'BlackWidow',
        rating: '8.1',
    },
    {
        id: 2,
        image: Poster2, 
        name: 'Spider-Man',
        rating: '8.1',
    },
    {
        id: 3,
        image: Poster3, 
        name: 'The Boys',
        rating: '8.1',
    },
    {
        id: 4,
        image: Poster4, 
        name: '300 Spartan.',
        rating: '8.1',
    },
    {
        id: 5,
        image: Poster5, 
        name: 'Jurassic Wo.',
        rating: '8.1',
    },
    {
        id: 6,
        image: Poster6, 
        name: 'Road House',
        rating: '8.1',
    },

]

export const tickets = [
    {
        id: 1,
        movie_name: 'Turning Red',
        name: 'Minato Namikaza',
        seats: '2 Seats',
        time: '8:30 AM',
        status: 'Enter Room',
        duration: 'Duration 1hr 15mins',
    },
    {
        id: 2,
        movie_name: 'Spider-Man Home Coming',
        name: 'Minato Namikaza',
        seats: '2 Seats',
        time: '8:30 AM',
        status: 'Upcoming',
    },
]

export const tabs = [
    {
        id: 1,
        text: 'Cast',
    },
    {
        id: 2,
        text: 'Director & Crew',
    }
]

export const cast_data = [
    {
        id: 1,
        image: Cast1, 
        text: 'Maitreyi Rama',
    },
    {
        id: 2,
        image: Cast2, 
        text: 'Sandra Oh',
    },
    {
        id: 3,
        image: Cast3, 
        text: 'Rosalie Chiang',
    },
    {
        id: 4,
        image: Cast4, 
        text: 'Rosalie Chiang',
    },
    {
        id: 5,
        image: Cast5, 
        text: 'Rosalie Chiang',
    },
    {
        id: 6,
        image: Cast6, 
        text: 'Rosalie Chiang',
    },
]


export const crew_data = [
    {
        id: 1,
        image: Cast6, 
        text: 'Rosalie Chiang',
    },
    {
        id: 2,
        image: Cast5, 
        text: 'Rosalie Chiang',
    },
    {
        id: 3,
        image: Cast4, 
        text: 'Rosalie Chiang',
    },
    {
        id: 4,
        image: Cast3, 
        text: 'Rosalie Chiang',
    },
    {
        id: 5,
        image: Cast2, 
        text: 'Sandra Oh',
    },
    {
        id: 6,
        image: Cast1, 
        text: 'Maitreyi Rama',
    },   
]