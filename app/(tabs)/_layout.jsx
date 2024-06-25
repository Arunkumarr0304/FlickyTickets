import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Tabs } from 'expo-router';
import React, { useContext } from 'react';
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
import Dark_Active_home from "../../assets/images/dark_active_home.svg";
import Dark_Active_Ticket from '../../assets/images/dark_active_ticket.svg';
import Dark_Active_Fav from '../../assets/images/dark_active_heart.svg';
import Dark_Active_Profile from "../../assets/images/dark_active_profile.svg";
import ThemeContext from '../../theme/ThemeContext';

const TabBarButton = ({ children, onPress, accessibilityState, title }) => {
  const isSelected = accessibilityState.selected;
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.tabButton,
        isSelected ? styles.activeTabButton : null,
        { backgroundColor: theme.coloring }
      ]}
    >
      {children}
      <Text style={[styles.tabTitle, isSelected ? [styles.activeTabTitle, {color:theme.bordercolor}] : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const TabsLayout = () => {
  const { theme, darkMode } = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: theme.coloring }]}>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#1C31A5',
          tabBarInactiveTintColor: '#757575',
          tabBarButton: (props) => (
            <TabBarButton {...props} title={route.name} />
          ),
          tabBarStyle: [styles.tabBar, { backgroundColor: theme.coloring }],
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let IconComponent;
            if (focused) {
              switch (route.name) {
                case 'home':
                  IconComponent = darkMode ? Dark_Active_home : Active_home;
                  break;
                case 'my_ticket':
                  IconComponent = darkMode ? Dark_Active_Ticket : Active_Ticket;
                  break;
                case 'favourite':
                  IconComponent = darkMode ? Dark_Active_Fav : Active_Fav;
                  break;
                case 'profile':
                  IconComponent = darkMode ? Dark_Active_Profile : Active_Profile;
                  break;
                default:
                  IconComponent = Home;
                  break;
              }
            } else {
              switch (route.name) {
                case 'home':
                  IconComponent = Home;
                  break;
                case 'my_ticket':
                  IconComponent = Ticket;
                  break;
                case 'favourite':
                  IconComponent = Fav;
                  break;
                case 'profile':
                  IconComponent = Profile;
                  break;
                default:
                  IconComponent = Home;
                  break;
              }
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
  activeTabButton: {},
});

export default TabsLayout;
