import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OrdersList from './src/containers/OrdersList';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScheduleAPickup from './src/containers/ScheduleAPickup';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <OrdersList/> */}
      <ScheduleAPickup/>
      <StatusBar translucent/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
