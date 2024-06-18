import Onboard1 from "../../assets/images/onboard_img1.png";
import Onboard2 from "../../assets/images/onboard_img2.png";
import Onboard3 from "../../assets/images/onboard_img3.png";

import Google from "../../assets/images/Google.svg";
import Apple from "../../assets/images/Apple.svg";


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