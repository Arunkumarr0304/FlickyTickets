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
        name: 'Bad Boys',
        rating: '8.1',
    },
    {
        id: 3,
        image: Recommend3, 
        name: 'Bad Boys',
        rating: '8.1',
    },
    {
        id: 4,
        image: Recommend4, 
        name: 'Bad Boys',
        rating: '8.1',
    },
    {
        id: 5,
        image: Recommend5, 
        name: 'Bad Boys',
        rating: '8.1',
    },
    {
        id: 6,
        image: Recommend6, 
        name: 'Bad Boys',
        rating: '8.1',
    },

]