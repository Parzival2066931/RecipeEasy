import { StyleSheet, Text, Pressable, View, Alert } from 'react-native';
import { RadioButton, RadioGroup } from 'react-native-radio-buttons-group';
import { Field } from '../components/Field';
import { CustomPicker } from '../components/CustomPicker';
import { useState, useEffect } from "react";
import { SubmitButton } from '../components/SubmitButton';

export function RecipeForm({navigation, route}) {
  const display = route.params


  const [recipe, setRecipe] = useState({
    categorie: display?.category || null,
    name: display?.name || '',
    hours: display?.durationHours || 0,
    minutes: display?.durationMinutes || 0,
    description: display?.description || '',
  })

  const hourValues = [...Array(13).keys()]
  const minuteValues = [...Array(60).keys()]
  const categories_labels = ['Breakfast', 'Lunch', 'Dinner']
  const categories = categories_labels.map((categorie, index) => ({
    id: index, //voir si bd commence à 1 ou 0
    label: categorie,
    value: index,
    color: 'white'
  }))


  function handleNavigation() {

    const errors = []
    
    if(recipe.name == "") {
      errors.push("Nom requis")
    }
    if(recipe.categorie == null) {
      errors.push("Catégorie requise")
    }
    if(recipe.hours == 0 && recipe.minutes == 0) {
      errors.push("Durée supérieure à 0 requise")
    }

    if(errors.length != 0) {
      Alert.alert("Erreur", errors.join("\n"))
    }
    else {
      navigation.popTo('RecipeList', recipe)
    }
  }

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <RadioGroup
          radioButtons={categories}
          labelStyle={styles.buttonLabel}
          selectedId={recipe.categorie}
          onPress={(selectedId) => setRecipe({  ...recipe, categorie: selectedId })}
          layout="row"
        />
      </View>
      

      <Field
       label="Name" 
       value={recipe.name}
       onChangeText={(value) => setRecipe({...recipe, name: value})}
      />

      <View style={styles.durationRow}>
        <Text style={styles.text}>Duration</Text>

        <CustomPicker
          values={hourValues}
          suffix="h"
          selectedValue={recipe.hours}
          onValueChange={(value) => setRecipe({...recipe, hours: value})}
          style={styles.picker}
        />

        <Text style={styles.text}>:</Text>

        <CustomPicker
          values={minuteValues}
          suffix="mins"
          selectedValue={recipe.minutes}
          onValueChange={(value) => setRecipe({...recipe, minutes: value})}
          style={styles.picker}
        />
      </View>

      <Field
        label="Description"
        multiline
        value={recipe.description}
        onChangeText={(value) => setRecipe({...recipe, description: value})}
        style={{ flex: 1, width: '100%' }}
      />

      <View style={styles.saveContainer}>

        {!display &&
          <SubmitButton
            label="Save"
            onPress={handleNavigation}
          />
        }

        {display &&
          <SubmitButton
            label="Delete"
            onPress={() => navigation.popTo('RecipeList')}
            style={styles.deleteButton}
            textStyle={styles.deleteText}
          />
        }

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    gap: 16,
    padding: 16,
    backgroundColor: '#367e7f',
  },

  descriptionContainer: {
    flex: 1,
    width: '100%',
  },

  durationRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  saveContainer: {
    alignItems: 'center',
    gap: 10,
  },

  deleteButton: {
    backgroundColor: '#dddddd',
  },

  deleteText: {
    color: 'red',
  },

  picker: {
    flex: 1,
    height: 50,
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none'
  },

  radio: {
    alignItems: 'center',
  },

  buttonLabel: {
    color: 'white',
  },

  text: {
    color: 'white',
    margin: 10
  }
});