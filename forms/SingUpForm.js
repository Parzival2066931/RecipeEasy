import { StyleSheet, Text, Pressable, View } from 'react-native';
import { Field } from '../components/Field';
import { useState } from 'react';
import { SubmitButton } from '../components/SubmitButton';



export function SignUpForm({navigation, route}) {
  const [display, setDisplay] = useState({
    username: '',
    password: '',
    password_confirmation: '',
  })

  function handleSingUp() {
    navigation.navigate("RecipeList")
  }

  return(
    <View style={styles.container}>
      <Field label='Username' value={ display.username } onChangeText={ (user) => setDisplay({...display, username: user}) }/>
      <Field label='Password' value={ display.password } onChangeText={ (pw) => setDisplay({...display, password: pw}) }/>
      <Field label='Password confirmation' value={ display.password_confirmation } onChangeText={ (pw_conf) => setDisplay({...display, password_confirmation: pw_conf}) }/>
      <View style={{alignItems: 'center'}}>
        <SubmitButton label='Create account' onPress={ handleSingUp }/>
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
  link: {
    paddingTop: 10,
    textDecorationLine: 'none',
    color: 'blue'
  },
});