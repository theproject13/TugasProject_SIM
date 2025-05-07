import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');
const isDesktop = width >= 1024;
const isTablet = width >= 768 && width < 1024;

const DeliveryOptions = () => {
  return (
    <View style={styles.deliveryOptions}>
      <TouchableOpacity style={styles.optionCard}>
        <View style={styles.textContainer}>
          <Text style={styles.optionTitle}>Pick Up</Text>
          <Text style={styles.optionSubtitle}>Ambil di store</Text>
        </View>
        <Image
          source={require('../../assets/images/homeproperty/pickup.png')}
          style={styles.optionIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionCard}>
        <View style={styles.textContainer}>
          <Text style={styles.optionTitle}>Delivery</Text>
          <Text style={styles.optionSubtitle}>Diantarkan</Text>
        </View>
        <Image
          source={require('../../assets/images/homeproperty/delivery.png')}
          style={styles.optionIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  deliveryOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('3%'),
    marginVertical: hp('1%'),
    marginTop: hp('0.5%'),
  },
  optionCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#B7B89E',
    borderRadius: wp('3%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('4%'),
    marginHorizontal: wp('1.5%'),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    height: isDesktop ? hp('10%') : isTablet ? hp('12%') : hp('11%'),
  },
  textContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: isDesktop ? wp('2.5%') : isTablet ? wp('3%') : wp('4%'),
    fontFamily: fonts.akatab?.ExtraBold,
    color: colors.white || '#FFFFFF',
  },
  optionSubtitle: {
    fontSize: isDesktop ? wp('1.5%') : isTablet ? wp('2%') : wp('3%'),
    fontFamily: fonts.akatab?.regular || 'sans-serif',
    color: colors.white || '#FFFFFF',
    marginTop: hp('0.5%'),
  },
  optionIcon: {
    width: isDesktop ? wp('10%') : isTablet ? wp('12%') : wp('15%'),
    height: isDesktop ? wp('10%') : isTablet ? wp('12%') : wp('15%'),
  },
});

export default DeliveryOptions;