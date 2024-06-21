import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import Calendar from "../../assets/images/calendar.svg";
import Dark_calendar from "../../assets/images/dark_calendar.svg";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Button from "../../components/Button/Button";
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import Mini from "../../assets/images/mini_ticket.svg";
import Dark_mini from "../../assets/images/dark_mini_ticket.svg";
import Camera from "../../assets/images/camera.svg";
import { tickets } from '../../components/Data/Data';
import Ticket from "../../assets/images/ticket.png";
import Line from "../../assets/images/Line.svg";
import { router, Link } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';


const My_ticket = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const details = () => {
    router.push('ticket_details');
  };
  const back = () => {
    router.push('home');
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <View style={styles.head_left}>
          <TouchableOpacity onPress={back}>
            {darkMode ? <Dark_back /> : <Back />}
          </TouchableOpacity>
          <Text style={[styles.heading, { color: theme.color }]}>My Ticket</Text>
        </View>
        {darkMode ? <Dark_calendar /> : <Calendar />}
      </View>
      <View style={styles.button_row}>
        <Button buttonText="upcoming" />
        <Button buttonText="history" backgroundColor="#ffffff" textColor="#1C31A5" borderColor="#1C31A5" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.tickets_container}>
          {
            tickets.map((d) => (
              <View style={styles.ticket_inner_container} key={d.id}>
                <Text style={[styles.date, { color: theme.color }]}>Movie on 27 June 2024</Text>
                <TouchableOpacity style={[styles.ticket, { backgroundColor: theme.coloring }]} onPress={details} >
                  <View style={styles.content}>
                    <View sty={styles.top_content}>
                      <View style={styles.ticket_row}>
                       { darkMode? <Dark_mini /> : <Mini />}
                        <Text style={[styles.movie, {color: theme.color}]}>{d.movie_name}</Text>
                      </View>
                      <View style={styles.heading1}>
                        <Text style={styles.name}>name</Text>
                        <Text style={styles.name}>ticket</Text>
                      </View>
                      <View style={styles.name_row}>
                        <Text style={[styles.name2, {color: theme.color}]}>{d.name}</Text>
                        <Text style={[styles.name2, {color: theme.color}]}>{d.seats}</Text>
                      </View>
                    </View>
                    <Line />
                    <View style={styles.status_row}>
                      <View style={styles.column}>
                        <Text style={[styles.name2, {color: theme.color}]}>{d.time}</Text>
                        <Text style={styles.name}>Enter Cinema</Text>
                      </View>
                      <View style={styles.image_box}>
                        <Camera />
                      </View>
                      <View style={styles.column}>
                        <Text style={[styles.name2, {color: theme.color}]}>{d.status}</Text>
                        <Text style={styles.name}>status</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default My_ticket;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  head_left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  heading: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
  },
  button_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 26,
    marginBottom: 20,
  },
  date: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Lato_400Regular',
    color: '#121212',
  },
  tickets_container: {
    marginBottom: 150,
  },
  ticket_inner_container: {
    gap: 16,
    marginTop: 16,
  },
  ticket: {
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
  },
  content: {
    paddingVertical: 10,
  },

  ticket_row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 15,
  },
  movie: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
  },
  heading1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingHorizontal: 15,
  },
  name_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
    paddingHorizontal: 15,
  },
  name: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: 'Lato_400Regular',
    color: '#757575',
    textTransform: 'capitalize',
  },
  name2: {
    fontSize: 14,
    lineHeight: 17,
    fontFamily: 'Lato_700Bold',
    color: '#121212',
  },
  status_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 15,
  },
  column: {
    gap: 4,
  }
})