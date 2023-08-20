import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View, Platform } from 'react-native';

export default function Header() {
  return (
      <View style={styles.main}>
        <Text style={styles.text}>Список дел</Text>
      </View>
  );
}


const styles = StyleSheet.create({
    main: {
        paddingTop: 50,
        height: 100,
        backgroundColor: 'silver'
    },
    text: {
        fontSize: 18,
        color: 'red',
    }
});
