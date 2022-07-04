import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import { Menu } from './src/menu';

export default function App() {
  const showToast = () =>{
    ToastAndroid.show("Ingresastes a  nuestro simulador",ToastAndroid.SHORT);
  }
  return (
    <View style={styles.container}>
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
