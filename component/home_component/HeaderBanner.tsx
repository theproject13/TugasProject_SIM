import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Mendapatkan lebar layar untuk mendeteksi perangkat desktop
const { width } = Dimensions.get('window');
const isDesktop = width >= 1024;

const HeaderBanner = () => {
  return (
    // Kontainer utama untuk header dan banner
    <View style={styles.container}>
      {/* Bagian Header */}
      <View style={styles.header}>
        {/* Logo KōHī */}
        <Image
          source={require('../../assets/images/homeproperty/logo-KōHī.png')}
          style={[styles.logo,{height:50, width:109}]}
          resizeMode="contain"
        />
        {/* Teks header dengan sapuan "Konichiwa! Aef" */}
        <Text style={styles.headerText}>Konichiwa! Aef</Text>
      </View>

      {/* Bagian Banner */}
      <View style={styles.bannerContainer}>
        {/* Gambar banner tanpa teks */}
        <Image
          source={require('../../assets/images/homeproperty/banner.png')}
          style={[styles.bannerImage,{height:169, width:367}]}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

// Definisi gaya menggunakan StyleSheet
const styles = StyleSheet.create({
  // Gaya untuk kontainer utama yang membungkus header dan banner
  container: {
    backgroundColor: colors.white,
  },
  // Gaya untuk bagian header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('4%'),
    backgroundColor: colors.white,
  },
  // Gaya untuk logo KōHī
  logo: {
    width: wp('15%'),
    height: hp('5%'),
    marginRight: wp('2%'),
  },
  // Gaya untuk teks header
  headerText: {
    fontSize: wp('4%'),
    fontFamily: fonts.actor.regular,
    color: colors.black,
  },
  // Gaya untuk kontainer banner
  bannerContainer: {
    marginHorizontal: wp('4%'),
    marginVertical: hp('1.5%'),
    borderRadius: wp('3%'),
    overflow: 'hidden',
    backgroundColor: colors.bannerBackground,
    alignItems: 'center', // Memusatkan gambar secara horizontal
    justifyContent: 'center', // Memusatkan gambar secara vertikal
  },
  // Gaya untuk gambar banner
  bannerImage: {
    width: isDesktop ? wp('20%') : wp('35%'),
    height: isDesktop ? hp('15%') : hp('12%'),
  },
});

export default HeaderBanner;