import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Tabs } from 'expo-router';
import React from 'react';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Home from "../../assets/images/home.svg";
import Ticket from '../../assets/images/ticket.svg';
import Fav from '../../assets/images/heart.svg';
import Profile from "../../assets/images/profile.svg";
import Active_home from "../../assets/images/active_home.svg";
import Active_Ticket from '../../assets/images/active_ticket.svg';
import Active_Fav from '../../assets/images/active_heart.svg';
import Active_Profile from "../../assets/images/active_profile.svg";

const TabBarButton = ({ children, onPress, accessibilityState, title }) => {
  const isSelected = accessibilityState.selected;
  return (
    
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.tabButton,
        isSelected ? styles.activeTabButton : null
      ]}
    >
      {children}
      <Text style={[styles.tabTitle, isSelected ? styles.activeTabTitle : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const TabsLayout = () => {
  return (
    <View style={[styles.container]}>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#1C31A5',
          tabBarInactiveTintColor: '#757575',
          tabBarButton: (props) => (
            <TabBarButton {...props} title={route.name} />
          ),
          tabBarStyle: [styles.tabBar],
          headerShown: false, 
          tabBarIcon: ({ focused }) => {
            let IconComponent;
            switch (route.name) {
              case 'home':
                IconComponent = focused ? Active_home : Home;
                break;
              case 'my_ticket':
                IconComponent = focused ? Active_Ticket : Ticket;
                break;
              case 'favourite':
                IconComponent = focused ? Active_Fav : Fav;
                break;
              case 'profile':
                IconComponent = focused ? Active_Profile : Profile;
                break;
              default:
                IconComponent = Home;
                break;
            }
            return <IconComponent />;
          },
        })}
      >
        <Tabs.Screen 
          name="home" 
          options={{
            title: 'Home',
          }} 
        />
        <Tabs.Screen 
          name="my_ticket" 
          options={{
            title: 'My_ticket',
          }} 
        />
        <Tabs.Screen 
          name="favourite" 
          options={{
            title: 'Favorite',
          }} 
        />
        <Tabs.Screen 
          name="profile" 
          options={{
            title: 'Profile',
          }} 
        />
      </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  tabBar: {
    width: '100%',
    maxHeight: 65,
    height: '100%',
    borderTopWidth: 0,
    elevation: 0,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    paddingTop: 10, 
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  tabTitle: {
    fontSize: 12,
    fontFamily: 'Montserrat_500Medium',
    color: '#757575',
    marginTop: 4,
    textTransform: 'capitalize',
  },
  activeTabTitle: {
    color: '#1C31A5',
    fontFamily: 'Montserrat_700Bold',
  },
  activeTabButton: {
    
  },
});

export default TabsLayout;
