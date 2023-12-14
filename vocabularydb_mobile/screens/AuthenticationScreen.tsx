import React from 'react';
import {Text, Button} from 'react-native';

function AuthenticationScreen({navigation}) {
  return (
    <>
      <Text>Authentication Screen!</Text>
      <Button
        title="Navigate to Home Screen!"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </>
  );
}

export default AuthenticationScreen;
