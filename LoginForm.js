import { StyleSheet, Text, Pressable, View } from 'react-native';
import { Field } from './Field';
import { SubmitButton } from './SubmitButton';




export function LoginForm({navigation, route}) {

  const [display, setDisplay] = useState({
    username: '',
    password: '',
  })

  function handleLogin() {
    // navigation.navigate('')
    {/* Quand mes chemin auront une séquence*/}
  }
  return(
    <View style={styles.container}>
      {/* Maj props dans field */}
      <Field label='Username' value={ display.username } onChangeText={ (user) => setDisplay({...display, username: user}) }/> 
      <Field label='Password'value={ display.password }/>
      <View style={{alignItems: 'center'}}>
        <SubmitButton label='Login' onPress={ handleLogin }/>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text onPress='' style={styles.link}>Sign up!</Text>
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