import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import Header from '../component/home_component/HeaderBanner';
import DeliveryOptions from '../component/home_component/DeliveryOption';
// import KohiCoin from '../components/home_components/KohiCoin';
// import FavoriteDrinks from '../components/home_components/FavoriteDrinks';

const HomeScreen = () => {
  return (
    <View style={[styles.container, {marginTop: 30}]}>
      <Header />
      <DeliveryOptions />
      {/* <KohiCoin /> */}
      {/* <FavoriteDrinks /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default HomeScreen;