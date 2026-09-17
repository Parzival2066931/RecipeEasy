import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View, Pressable } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginForm } from './forms/LoginForm';
import { SignUpForm } from './forms/SingUpForm';
import { RecipeForm } from './forms/RecipeForm';
import { RecipeList } from './forms/RecipeList';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light"/>

            <View style={{ flex: 1, backgroundColor: 'red' }}>
            {/* View wrapper si backgroundColor dans les components enfants */}
                <NavigationContainer>
                    <Stack.Navigator 
                        initialRouteName="LoginForm"
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: '#3d1878'
                            },
                            headerTintColor: 'white',
                            

                        }}
                    >

                        <Stack.Screen
                            name="LoginForm"
                            component={ LoginForm }
                            options={{ title: 'Login' }}
                        />

                        <Stack.Screen
                            name="SignUpForm"
                            component={ SignUpForm }
                            options={{ title: 'SignUp' }}
                        />

                        <Stack.Screen
                            name="RecipeForm"
                            component={ RecipeForm }
                            options={{ title: 'Recipe' }}
                        />

                        <Stack.Screen
                            name="RecipeList"
                            component={ RecipeList }
                            options={{ 
                                title: 'Recipes',
                                headerRight: () => 
                                    <Pressable onPress=''>
                                        <Text style={styles.text}>Logout</Text>
                                    </Pressable>
                                ,
                                
                            }}
                        />

                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#487c7e',
  },
  text: {
    fontSize: 18,
    color: 'white'
  },
});
