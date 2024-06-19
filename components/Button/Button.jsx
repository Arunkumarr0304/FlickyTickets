import { Lato_700Bold } from '@expo-google-fonts/lato';
import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const Button = ({ buttonText, onPress, backgroundColor, textColor, borderColor }) => {
  
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          
          backgroundColor: backgroundColor || '#1C31A5',
        
          borderColor: borderColor || 'transparent', 
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor || '#ffffff' }]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    justifyContent: 'center',
    minWidth: 150,
  },
  buttonText: {
    textTransform: 'capitalize',
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    fontFamily: 'Lato_700Bold',
  },
});

export default Button;
