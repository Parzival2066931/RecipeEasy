import { StyleSheet, Text, Pressable, View } from 'react-native';
import { Field } from './Field';
import { SubmitButton } from './SubmitButton';



export function SignUpForm({navigation, route}) {

  return(
    <View style={styles.container}>
      <Field label='Username'/>
      <Field label='Password'/>
      <Field label='Password confirmation'/>
      <View style={{alignItems: 'center'}}>
        <SubmitButton label='Create account'/>
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