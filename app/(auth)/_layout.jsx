import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {Stack} from "expo-router";

const AuthLayout = () => {
  return (
   <Stack>
    <Stack.Screen name='create_account' options={{headerShown: false}} />
    <Stack.Screen name='login' options={{headerShown: false}} />
    <Stack.Screen name='verification' options={{headerShown: false}} />
    <Stack.Screen name='movie_details' options={{headerShown: false}} />
    <Stack.Screen name='seat' options={{headerShown: false}} />
    <Stack.Screen name='checkout' options={{headerShown: false}} />
    <Stack.Screen name='payment' options={{headerShown: false}} />
    <Stack.Screen name='add_new_card' options={{headerShown: false}} />
   </Stack> 
  )
}

export default AuthLayout;

const styles = StyleSheet.create({})