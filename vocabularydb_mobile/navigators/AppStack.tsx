import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import HomeScreen from '../screens/HomeScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../redux-state/store';

const Stack = createNativeStackNavigator();

function AppStack() {
  const isSigned = useSelector((state: RootState) => state.user.isSigned);

  return (
    <Stack.Navigator>
      {isSigned ? (
        <>
          <Stack.Screen
            name="AuthenticationScreen"
            component={AuthenticationScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default AppStack;
