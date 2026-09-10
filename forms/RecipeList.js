import { StyleSheet, Text, View } from 'react-native';
import { SubmitButton } from '../components/SubmitButton';




export function RecipeList({navigation, route}) {

  function handleAddRecipe() {
    navigation.navigate('RecipeForm')
  }
  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>No recipes yet...</Text>
      </View>

      <View style={styles.buttonContainer}>
        <SubmitButton
          style={styles.button}
          textStyle={styles.buttonText}
          label="+"
          onPress={handleAddRecipe}
        />
      </View>
      
    </View>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#367e7f',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 25,
    color: 'white',
  },

  buttonContainer: {
    alignItems: 'flex-end',
  },

  button: {
    width: 70,
    height: 70,

    backgroundColor: 'orange',
    borderRadius: 35,

    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});