import {StyleSheet, View} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

export default function App() {
  const g = Gesture.Pan().onChange(console.log);

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={g}>
        <View style={styles.box} />
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  box: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    borderRadius: 100,
  },
});
