import { BackHandler, StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { SubmitButton } from '../components/SubmitButton';
import { useEffect, useState  } from 'react';
import { Recipe } from '../components/Recipe'




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

  const categories = [
    {
      icon: 'coffee',
      color: '#f4c430'
    },
    {
      icon: 'hamburger',
      color: '#00ff66'
    },
    {
      icon: 'pasta',
      color: '#2222aa'
    }
  ]
  
  useEffect(() => {
    if (display) {
      setRecipes(previousRecipes => [...previousRecipes, recipe].sort((a, b) => {
          if (a.category !== b.category) {
            return a.category - b.category
          }

          return a.name.localeCompare(b.name)
        })
      )
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

  function handleAddRecipe() {
    navigation.navigate('RecipeForm')
  }

  return(

    <View style={[styles.container,]}>
      <View style={styles.content}>
        <FlatList
          style={styles.list}
          contentContainerStyle={recipes.length === 0 && styles.emptyList}
          data={recipes}
          renderItem={({ item }) => 
            <Recipe
              recipe={item}
              navigation={navigation}
              categories={categories}
            />
          }
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              No recipes yet...
            </Text>
          }
          ItemSeparatorComponent={() => (
            <View style={styles.separator} />
          )}
        />
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
    width: '100%',
  },

  list: {
    width: '100%',
  },

  recipeItem: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 0,
  },

  recipePressed: {
    backgroundColor: '#d9d9d9',
  },

  recipeLeft: {
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },

  recipeRight: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 2,
  },

  recipeName: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  description: {
    color: 'white',
    fontSize: 16,
    marginTop: 3,
  },

  duration: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 2,
  },

  separator: {
    height: 1,
    backgroundColor: '#b8d4d4',
  },

  emptyList: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  emptyText: {
    color: '#dddddd',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonContainer: {
    alignItems: 'flex-end',
    paddingTop: 12,
  },

  button: {
    width: 60,
    height: 60,
    backgroundColor: 'orange',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
  },

  logout: {
    backgroundColor: 'transparent',
  },
});