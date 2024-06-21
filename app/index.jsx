import React, { useState, useRef, useEffect, useCallback, useContext } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, StatusBar, Animated, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { pages } from "../components/Data/Data";
import { router } from "expo-router";
import Button from "../components/Button/Button";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import Pagination from "../components/Pagination/Pagination";
import ThemeContext from "../theme/ThemeContext";


const { width } = Dimensions.get('window');

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const swiperRef = useRef(null);
  const totalPages = pages.length;
  const [activePageIndex, setActivePageIndex] = useState(0);

  const [fontsLoaded] = useFonts({
   Montserrat_700Bold,
   Lato_400Regular,
   Lato_700Bold,
   Montserrat_600SemiBold,
   Montserrat_500Medium,
   Montserrat_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const headingOpacity = useRef(new Animated.Value(1)).current;
  const descriptionOpacity = useRef(new Animated.Value(1)).current;
  const paginationOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (fontsLoaded) {
      animateContent();
    }
  }, [activePageIndex, fontsLoaded]);

  const animateContent = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(headingOpacity, { toValue: 0, duration: 200, useNativeDriver: true }),
        Animated.timing(descriptionOpacity, { toValue: 0, duration: 200, useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.timing(headingOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
        Animated.timing(descriptionOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
      ])
    ]).start();
  };

  const handleImageScroll = (event) => {
    const pageIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActivePageIndex(pageIndex);
  };

  const handleNextPress = () => {
    const nextIndex = Math.min(activePageIndex + 1, totalPages - 1);
    swiperRef.current.scrollTo({ x: nextIndex * width, animated: true });
    setActivePageIndex(nextIndex);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={[styles.safearea, {backgroundColor: theme.background}]} onLayout={onLayoutRootView}>
          <StatusBar 
        translucent
        backgroundColor="transparent"
        barStyle={darkMode ? "light-content" : "dark-content"} 
      />
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={swiperRef}
        onScroll={handleImageScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ width: width * totalPages }}
        style={{ flex: 1 }}
      >
        {pages.map((page, index) => (
          <View key={index} style={[styles.page, { width }]}>
            <View style={styles.imageContainer}>
              <Image source={page.image} alt="images" style={styles.image} />
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.onboard_content}>

        <Animated.Text style={[[styles.heading, {color:theme.color}], { opacity: headingOpacity }]}>
          {pages[activePageIndex].heading}
        </Animated.Text>
        <Animated.Text style={[styles.description, { opacity: descriptionOpacity }]}>
          {pages[activePageIndex].Text}
        </Animated.Text>
        <Animated.View style={{ opacity: paginationOpacity }}>
          <Pagination activePageIndex={activePageIndex} totalPages={totalPages} />
        </Animated.View>
        <View style={styles.page_button_container}>
          {activePageIndex === totalPages - 1 ? (
            <View style={{ paddingTop: 15 }}>
              <Button
                buttonText="Get started"
                backgroundColor="#1C31A5"
                textColor='#FFFFFF'
                onPress={() => router.push('create_account')}
              />
            </View>
          ) : (
            <TouchableOpacity onPress={handleNextPress} style={styles.nextButton}>
             <Text style={styles. nextButtonText}>next</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 70,
    
  },
  imageContainer: {
    height: 330,
    maxWidth: 360,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 330,
    resizeMode: 'contain',
  },
  onboard_content: {
    position: 'absolute',
    backgroundColor: 'transparent',
    bottom: 40,
    width: '100%',
    paddingBottom: 30,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
  },
  heading: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 24,
    lineHeight: 36,
    color: '#000000',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontFamily: 'Lato_400Regular',
    fontSize: 14,
    lineHeight: 24,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 20,
  },
  page_button_container: {
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  nextButton: {
    backgroundColor: '#1C31A5',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    fontFamily: 'Lato_700Bold',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 28,
  },
});
