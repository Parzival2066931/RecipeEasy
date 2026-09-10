import { StyleSheet, Text, Pressable, View } from 'react-native';
import { useState } from 'react';
import { Field } from '../components/Field';
import { SubmitButton } from '../components/SubmitButton';




export function LoginForm({navigation, route}) {

  const [display, setDisplay] = useState({
    username: '',
    password: '',
  })

  function handleSignUp() {
    navigation.navigate('SignUpForm')
  }

  function handleLogin() {
    navigation.navigate('RecipeList')
  }
  return(
    <View style={styles.container}>
      {/* Maj props dans field */}
      <Field label='Username' value={ display.username } onChangeText={ (user) => setDisplay({...display, username: user}) }/> 
      <Field label='Password' value={ display.password } onChangeText={ (pw) => setDisplay({...display, password: pw}) }/>
      <View style={{alignItems: 'center'}}>
        <SubmitButton label='Login' onPress={ handleLogin }/>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text onPress={handleSignUp} style={styles.link}>Sign up!</Text>
      </View>
      
    </View>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#367e7f',
  },
  text: {
    fontSize: 18,
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color:'white',
  },
  link: {
    paddingTop: 10,
    textDecorationLine: 'none',
    color: 'blue'
  },
});