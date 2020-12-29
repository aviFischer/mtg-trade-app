import React from 'react';
import { TouchableOpacity, View, Text, ImageBackground } from 'react-native';

import Styles from '../styles/globalStyles';

const Homescreen = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.pictureButton} onPress={() => navigation.navigate('Wishlist')}>
        <ImageBackground style={Styles.image} source={require('../pictures/make-a-wish.jpg')}>
          <Text style={Styles.textOverImage}>Wishlist</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.pictureButton}>
        <ImageBackground style={Styles.image} source={require('../pictures/collector-ouphe.jpg')}>
          <Text style={Styles.textOverImage}>Collection</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.pictureButton}>
        <ImageBackground style={Styles.image} source={require('../pictures/market-festival.jpg')}>
          <Text style={Styles.textOverImage}>Trade</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.settingsButton} onPress={() => navigation.navigate('Settings')}>
        <Text style={Styles.whiteText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Homescreen;