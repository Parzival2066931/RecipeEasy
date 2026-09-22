import { StyleSheet, Text, View } from 'react-native';
import { SubmitButton } from '../components/SubmitButton';
import { useEffect, useState  } from 'react';
import { LoginForm } from './LoginForm';




export function RecipeList({navigation, route}) {
  const [recipes, setRecipes] = useState([])

  const display = route.params

  const recipe = {
    category: display?.category,
    name: display?.name,
    durationHours: display?.hours,
    durationMinutes: display?.minutes,
    description: display?.description
  }

  
  useEffect(() => {
      console.log(display)
      if (display) {
        console.log(recipe)
        setRecipes((recipes) => [...recipes, recipe ])
      }
  }, [display])

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => 
        <SubmitButton label='Logout' style={styles.logout} onPress={() => navigation.popTo('LoginForm')}/>
    })
  }, [])


  function list() {
    return (
      <Text style={ styles.text }>{ JSON.stringify(recipes) }</Text>
    )
  }


  function handleAddRecipe() {
    navigation.navigate('RecipeForm')
  }
  return(
    <View style={styles.container}>
      <View style={styles.content}>
        { list() }
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

  logout: {
    backgroundColor: 'none',

  },
});