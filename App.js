import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginForm } from './LoginForm';
import { SignUpForm } from './SingUpForm';
import { RecipeForm } from './RecipeForm';
// function renderFields(array){
//   return array.map( f=> <Field label={f} key={f.downcase} />)
// }

export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* <LoginForm/> */}
        {/* <SignUpForm/> */}
        <RecipeForm/>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#367e7f',
  },
  text: {
    fontSize: 18,
  },
});
