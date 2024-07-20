import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/page/Home/Login'; // Assurez-vous que ce chemin est correct
import Bienvenue from './src/page/Home/Bienvenue';
import CreerCompte from './src/page/Home/CreerCompte';
import Choisir from './src/page/Home/Choisir';
import Siginup from './src/page/Home/Siginup';
import Accueil from './src/page/Home/Accueil';
import Php from './src/page/Home/Php';
import TabsMaitre from './navigationMaitre/TabsMaitre';
import Tabs from './navigation/Tabs';
import AccueilMaitre from './src/page/Home/AccueilMaitre';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bienvenue" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen
  name="Accueil"
  component={Accueil}
  options={{
    headerShown: false,
    
   
  }}
/> */}
<Stack.Screen
  name="AccueilMaitre"
  component={AccueilMaitre}
  options={{
    headerShown: false,
  }}
/>
<Stack.Screen name="Tabs" component={Tabs} />
              <Stack.Screen name="TabsMaitre" component={TabsMaitre} />
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bienvenue"
          component={Bienvenue}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CrerCompte"
          component={CreerCompte}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Choisir"
          component={Choisir}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Siginup"
          component={Siginup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="php"
          component={Php}
          options={{   headerShown: true,
            headerTitle: 'Python',
            headerTitleAlign: 'center',
            
             }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
