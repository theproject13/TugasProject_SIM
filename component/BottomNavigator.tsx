import React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import VoucherScreen from '../screens/VoucherScreen';
import OrderScreen from '../screens/OrderScreen';
import AccountScreen from '../screens/AccountScreen';
import { Image, StyleSheet, Dimensions, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');
const isDesktop = width >= 1024;

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }): BottomTabNavigationOptions => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;
          if (route.name === 'Home') {
            iconSource = require('../assets/images/icons-navigators/home.png');
          } else if (route.name === 'Voucher') {
            iconSource = require('../assets/images/icons-navigators/voucher.png');
          } else if (route.name === 'Pesanan') {
            iconSource = require('../assets/images/icons-navigators/order.png');
          } else if (route.name === 'Akun') {
            iconSource = require('../assets/images/icons-navigators/account.png');
          }
          return (
            <Image
              source={iconSource}
              style={[
                styles.tabIcon,
                {
                  tintColor: focused ? '#E78B12FF' : '#666', // Warna biru saat aktif
                  transform: [{ scale: focused ? 1.3 : 1 }], // Efek zoom-in 1.3x
                },
              ]}
              resizeMode="contain"
            />
          );
        },
        tabBarLabel: ({ focused }) => (
          <Text
            style={[
              styles.tabLabel,
              { color: focused ? '#E78B12FF' : '#666' }, // Warna label biru saat aktif
            ]}
          >
            {route.name}
          </Text>
        ),
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
        tabBarLabelStyle: styles.tabLabel,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Voucher" component={VoucherScreen} />
      <Tab.Screen name="Pesanan" component={OrderScreen} />
      <Tab.Screen name="Akun" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    height: isDesktop ? hp('8%') : hp('13.5%'), // Tinggi tab bar lebih besar untuk mobile
    paddingBottom: hp('1%'), // Memberi ruang di bawah label
    paddingHorizontal: isDesktop ? wp('4%') : wp('1%'), // Memberi ruang samping
  },
  tabBarItem: {
    height: hp('10%'), // Tinggi item tab disesuaikan
    justifyContent: 'center',
    paddingVertical: hp('1%'), // Memberi ruang vertikal untuk ikon dan label
  },
  tabIcon: {
    width: isDesktop ? wp('3%') : wp('8%'), // Ukuran ikon lebih besar untuk mobile
    height: isDesktop ? wp('3%') : wp('8%'),
  },
  tabLabel: {
    fontSize: isDesktop ? wp('1.2%') : wp('3.5%'), // Ukuran teks label lebih besar
    fontFamily: 'actor',
    marginTop: hp('0.5%'), // Memberi jarak antara ikon dan label
  },
});

export default BottomNavigator;