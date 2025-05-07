import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors'; // Menggunakan colors dari constants, jika ada

const VoucherScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Memusatkan vertikal
    alignItems: 'center', // Memusatkan horizontal
    backgroundColor: colors.background, // Menggunakan warna background dari constants
  },
  text: {
    fontSize: 20, // Ukuran teks
    fontFamily: 'Roboto-Regular', // Sesuaikan dengan font yang digunakan di aplikasi
    color: colors.black || '#000', // Gunakan warna teks dari constants atau default ke hitam
  },
});

export default VoucherScreen;