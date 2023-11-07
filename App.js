import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import API_Screen_03 from './src/views/API_Screen_03';
import Screen3 from './src/views/Screen3';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <API_Screen_03/> */}
      <Screen3/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
