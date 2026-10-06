import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function Recipe({ recipe, navigation, categories }) {
  return (
    <Pressable
      onPress={() => navigation.navigate('RecipeForm', recipe)}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed
      ]}
    >
      <View style={styles.left}>
        <MaterialCommunityIcons
          name={categories[recipe.category].icon}
          size={28}
          color={categories[recipe.category].color}
        />

        <Text style={styles.duration}>
          {recipe.durationHours}h{String(recipe.durationMinutes).padStart(2, '0')}
        </Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.name}>{recipe.name}</Text>

        <Text style={styles.description}>
          {recipe.description ?? ""}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 14,
  },

  pressed: {
    backgroundColor: '#d3d3d3',
  },

  left: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  right: {
    flex: 1,
    justifyContent: 'center',
  },

  name: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  description: {
    color: 'white',
    fontSize: 16,
  },

  duration: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});