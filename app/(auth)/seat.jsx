import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import Back from "../../assets/images/back.svg";
import { Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import screen from "../../assets/images/screen.png";
import { seats as initialSeats, time_tab } from '../../components/Data/Data';
import SeatImage from "../../assets/images/seat.svg";
import BookImage from "../../assets/images/book_seat.svg";
import BookedImage from "../../assets/images/booked_seat.svg";
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import CustomCalendar from '../../components/Custom_calendar/Custom_Calendar';
import Button from '../../components/Button/Button';
import { router, Link } from "expo-router";

const Seat = () => {
  const [seats, setSeats] = useState(initialSeats);
  const [activetab, setActivetab] = useState(time_tab[0].id);

  const set_tab = (id) =>{
    setActivetab(id);
  };

  const toggleSeat = (id) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === id && seat.status !== 'booked'
          ? { ...seat, status: seat.status === 'available' ? 'book' : 'available' }
          : seat
      )
    );
  };

  const renderSeatImage = (status) => {
    switch (status) {
      case 'available':
        return <SeatImage />;
      case 'book':
        return <BookImage />;
      case 'booked':
        return <BookedImage />;
      default:
        return <SeatImage />;
    }
  };

  const confirm = () => {
      router.push('checkout');
  };

  return (
    <View style={styles.Seatpage}>
      <View style={styles.header}>
        <Back />
        <Text style={styles.heading}>Select Seat</Text>
      </View>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.image_box}>
            <Image source={screen} alt="image" style={styles.image} />
          </View>
          <View style={styles.seat_container}>
            {seats.map((seat) => (
              <TouchableOpacity
                style={styles.seat}
                key={seat.id}
                onPress={() => seat.status !== 'booked' && toggleSeat(seat.id)}
              >
                {renderSeatImage(seat.status)}
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.stacks_container}>
          <Text style={styles.date_heading}>Today is <Text style={styles.date}>04 June 2024</Text></Text>
          <CustomCalendar />
          <Text style={styles.header_text}>Choose a time</Text>
          <View style={styles.time_container}>
            {time_tab.map((d) => (
              <TouchableOpacity
                style={[styles.tab, activetab === d.id && styles.activetab]}
                onPress={() => set_tab(d.id)}
                key={d.id}
              >
                <Text style={[styles.time, activetab === d.id && styles.activetime]}>{d.time}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.amount_button}>
            <Text style={styles.amount}>$83 <Text style={styles.no_of_seats}>x3seats</Text></Text>
            <Button buttonText="confirm seat" onPress={confirm} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Seat;

const styles = StyleSheet.create({
  Seatpage: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 0,
  },
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  image_box: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
  },
  image: {
    width: 320,
  },
  seat_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seat: {
    marginTop: 10,
  },
  stacks_container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 20,
    paddingTop: 16,
    marginTop: 22,
  },
  date_heading: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Lato_400Regular',
    color: '#757575',
  },
  date: {
    color: '#121212',
  },
  header_text: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
  },
  time_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 16,
  },
  tab: {
    borderColor: '#BABABA',
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 4,
    minWidth: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activetab: {
    backgroundColor: '#FF6F6C',
  },
  time: {
    fontSize: 12,
    lineHeight: 24,
    fontFamily: 'Montserrat_500Medium',
    color: '#757575',
  },
  activetime: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Montserrat_700Bold',
    color: '#ffffff',
  },
  amount_button: {
    marginTop: 28,
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  amount: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: 'Lato_700Bold',
    color: '#121212',
  },
  no_of_seats: {
    fontSize: 12,
    lineHeight: 20,
    color: '#757575',
    fontFamily: 'Lato_400Regular',
  }
});
