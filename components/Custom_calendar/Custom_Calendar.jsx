import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ThemeContext from '../../theme/ThemeContext';

const CustomCalendar = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getCurrentMonthDates = () => {
    let currentDate = new Date();
    let firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    let lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    let dates = [];

    for (let i = firstDayOfMonth.getDate(); i <= lastDayOfMonth.getDate(); i++) {
      let newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      dates.push(newDate);
    }

    return dates;
  };

  const formatDay = (date) => {
    const options = { weekday: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

  const handleDatePress = (date) => {
    setSelectedDate(date);
    console.log('Selected date:', date);
  };

  const formatDate = (date) => {
    const options = { month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const monthDates = getCurrentMonthDates();

  const currentMonth = monthDates[0].toLocaleDateString('en-US', { month: 'long' });
  const currentYear = monthDates[0].getFullYear();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerText, {color: theme.color}]}>Choose a day</Text>
        <Text style={[styles.headerText, {color: theme.color}]}>. {currentMonth} {currentYear}</Text>
      </View>
      <ScrollView horizontal style={styles.monthContainer} showsHorizontalScrollIndicator={false}>
        {monthDates.map((date, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dayContainer,
              selectedDate && selectedDate.toDateString() === date.toDateString() && styles.selectedDayContainer,
            ]}
            onPress={() => handleDatePress(date)}
          >
            <Text style={[
              styles.dayText,
              selectedDate && selectedDate.toDateString() === date.toDateString() && styles.selectedDayText,
            ]}>{formatDay(date)}</Text>
            <View
              style={[
                styles.dateButton,
                selectedDate && selectedDate.toDateString() === date.toDateString() && styles.selectedDateButton,
              ]}
            >
              <Text style={[
                styles.dateText,
                selectedDate && selectedDate.toDateString() === date.toDateString() && styles.selectedDateText,
              ]}>{date.getDate()}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    lineHeight: 24,
    color: '#121212',
    fontWeight: 'bold',
  },
  monthContainer: {
    flexDirection: 'row',
  },
  dayContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: '#757575',
    borderWidth: 1,
  },
  selectedDayContainer: {
    backgroundColor: '#FF6F6C',
    borderColor: '#FF6F6C',
  },
  dayText: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: 'Montserrat_700Bold',
    color: '#757575',
  },
  selectedDayText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  dateButton: {
    marginTop: 5,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDateButton: {},
  dateText: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: 'Montserrat_700Bold',
    color: '#757575',
  },
  selectedDateText: {
    color: '#ffffff',
  },
});

export default CustomCalendar;
