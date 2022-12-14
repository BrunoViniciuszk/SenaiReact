import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Ttext from './Text';



export default function App() {
  return (
    <View style={styles.container}>
   <Ttext limite={10}></Ttext>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20
  }
});
 