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

import Seat from "../../assets/images/seat.svg";
import Booked from "../../assets/images/booked_seat.svg";

import Booking1 from "../../assets/images/booking_ticket.svg";
import Booking2 from "../../assets/images/booking_calendar.svg";
import Booking3 from "../../assets/images/booking_timer.svg";

import Paypal from '../../assets/images/paypal.svg';
import Phonepay from '../../assets/images/phonepay.svg';

import Profile1 from "../../assets/images/profile1.svg";
import Profile2 from "../../assets/images/profile2.svg";
import Profile3 from "../../assets/images/profile3.svg";
import Profile4 from "../../assets/images/profile4.svg";
import Profile5 from "../../assets/images/profile5.svg";

import Dark_profile1 from "../../assets/images/dark_profile1.svg";
import Dark_profile2 from "../../assets/images/dark_profile2.svg";
import Dark_profile3 from "../../assets/images/dark_profile3.svg";
import Dark_profile4 from "../../assets/images/dark_profile4.svg";
import Dark_profile5 from "../../assets/images/dark_profile5.svg";


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
        book: 'book now',
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


export const seats = [
    {
        id: 1,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 2,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 3,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 4,
        
        
    },
    {
        id: 5,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 6,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 7,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 8,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 9,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 10,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 11,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 12,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 13,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 14,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 15,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 16,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 17,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 18,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 19,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 20,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 21,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 22,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 23,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 24,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 25,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 26,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 27,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 28,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 29,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 30,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 31,
        image:  <Booked />,
        status: 'booked',
    },

    {
        id: 32,
        image:  <Booked />,
        status: 'booked',
    },
    {
        id: 33,
        image:  <Booked />,
        status: 'booked',
    },
    {
        id: 34,
        image:  <Seat />,
        status: 'available',
    },
    {
        id: 35,
        image:  <Seat />,
        status: 'available',
    },


]



export const time_tab = [
    {
        id: 1,
        time: '08:00 AM',
    },
    {
        id: 2,
        time: '08:30 AM',
    },
    {
        id: 3,
        time: '09:00 AM',
    },
    {
        id: 4,
        time: '11:30 AM',
    },
    {
        id: 5,
        time: '12:30 AM',
    },
    {
        id: 6,
        time: '02:00 PM',
    },
    {
        id: 7,
        time: '06:00 PM',
    },
    {
        id: 8,
        time: '10:00 PM',
    },

]


export const booking = [
    {
        id: 1,
        icon: <Booking1 />,
        heading: 'Ticket',
        value: '3 Ticket',
    },
    {
        id: 2,
        icon: <Booking2 />,
        heading: 'Dates',
        value: 'Mon, 16 Jun 2024',
    },
    {
        id: 3,
        icon: <Booking3 />,
        heading: 'Time',
        value: '08:00 AM',
    },
]

export const booking2 = [
    {
        id: 1,
        heading: 'Price',
        value: '$62.00',
    },
    {
        id: 2,
        heading: 'Apps Fee',
        value: '$2.50',
    },
]

export const pay_card = [
    {
        id: 1,
        icon: <Paypal />,
        text: 'PayPal',
    },
    {
        id: 2,
        icon: <Phonepay />,
        text: 'phone pay',
    }
]

export const modal_data = [
    {
        id: 1,
        percentage: '50% Cashback',
        expired : 'Expired in 2 Days',
    },
    {
        id: 2,
        percentage: '15% Discount',
        expired : 'Expired in 1 Days',
    },
    {
        id: 3,
        percentage: '10% Cashback',
        expired : 'Expired in 7 Days',
    },

]


export const language = [
    {
        id: 1,
        text: 'all',
    },
    {
        id: 2,
        text: 'English',
    },
    {
        id: 3,
        text: 'Spanish',
    },
    {
        id: 4,
        text: 'Tamil',
    },
    {
        id: 5,
        text: 'Malayalam',
    },
    {
        id: 6,
        text: 'Hindi',
    },

]



export const profile_data = [
    {
        id: 1,
        icon: <Profile1 />,
        active_icon: <Dark_profile1 />,
        name: 'Edit Profile',
    },
    {
        id: 2,
        icon: <Profile2 />,
        active_icon: <Dark_profile2 />,
        name: 'Your favorite songs',
    },

    {
        id: 3,
        icon: <Profile3 />,
        active_icon: <Dark_profile3 />,
        name: 'Dark Mode',
    },
    {
        id: 4,
        icon: <Profile4 />,
        active_icon: <Dark_profile4 />,
        name: 'Help & Support',
    },
    {
        id: 5,
        icon: <Profile5 />,
        active_icon: <Dark_profile5 />,
        name: 'Language',
    },
]