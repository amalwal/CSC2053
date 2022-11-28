import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import ListOfRecipes from './ListOfRecipes';
import Recipe from './RecipeDetail';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={ListOfRecipes} />
      <Stack.Screen name="Recipe" component={Recipe} />
       </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

