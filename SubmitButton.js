import { Pressable, StyleSheet, Text, } from 'react-native';

export function SubmitButton(props) {
  return(
    <Pressable onPress={ props.onPress } style={styles.button}>
      <Text style={styles.buttonText}>{ props.label }</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color:'white',
  },
  text: {
    fontSize: 18,
  },
});