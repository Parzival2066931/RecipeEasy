import { BackHandler, StyleSheet, Text, View, FlatList } from 'react-native';
import { SubmitButton } from '../components/SubmitButton';
import { useEffect, useState  } from 'react';
import { LoginForm } from './LoginForm';
import { MaterialCommunityIcons } from '@expo/vector-icons';




export function RecipeList({navigation, route}) {

  const [recipes, setRecipes] = useState([])

  const display = route.params

  const recipe = {
    category: display?.categorie,
    name: display?.name,
    durationHours: display?.hours,
    durationMinutes: display?.minutes,
    description: display?.description
  }

  const categoryIcons = ["coffee", "hamburger", "pasta"]


  
  useEffect(() => {
    if (display) {
      setRecipes((previousRecipes) => [...previousRecipes, recipe].sort((a, b) => a.name.localeCompare(b.name)));
    }
  }, [display]);

  useEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
      headerLeft: () => null,
      headerRight: () => 
        <SubmitButton label='Log out' style={styles.logout} onPress={() => navigation.popTo('LoginForm')}/>
    })
  }, [])


  function list(recipe) {
    console.log(recipe)
    return (
      <View style={{ flexDirection: 'row', width: '100%' }}>

        <View style={{ flex: 1 }}>
          <MaterialCommunityIcons
            name={categoryIcons[recipe.category]}
            size={40}
            color="white"
          />

          <Text style={styles.text}>
            {recipe.durationHours + "h" + recipe.durationMinutes}
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.text}>{recipe.name}</Text>
          <Text style={styles.text}>{recipe.description ?? ""}</Text>
        </View>
      </View>
    );
  }
  // function handleUpdateRecipe() {
  //   let randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
  //   navigation.navigate('RecipeForm', randomRecipe)
  // }

  function handleAddRecipe() {
    navigation.navigate('RecipeForm')
  }
  return(
    <View style={[styles.container,]}>
      <View style={styles.content}>
        <FlatList
          style={{ width: '100%' }}
          data={recipes}
          renderItem={({ item: recipe }) => list(recipe)}
          ListEmptyComponent={<Text>No recipes yet...</Text>}
        />
      </View>

      <View style={styles.buttonContainer}>
        {/* <SubmitButton
          textStyle={styles.buttonText}
          label="View"
          onPress={handleUpdateRecipe}
        /> */}
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
    width: 60,
    height: 60,

    backgroundColor: 'orange',
    borderRadius: 35,

    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 15,
  },

  logout: {
    backgroundColor: 'transparent',

  },
});