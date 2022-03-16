import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Products from './src/Product';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import SingleDetail from './src/SingleDetail';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
const client = new ApolloClient({
  uri: 'https://demo.saleor.io/graphql/',
  //uri:'https://vercel.saleor.cloud/graphql/',
  cache: new InMemoryCache(),
});

const AppStack = createStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <AppStack.Navigator>
          {
            <AppStack.Screen
              name="Product"
              component={Products}
              options={{header: () => null}}
            />
          }
          <AppStack.Screen
            name="SingleDetail"
            component={SingleDetail}
            options={{header: () => null}}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
