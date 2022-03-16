import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useQuery, gql} from '@apollo/client';

export default function SingleDetail({route}) {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Image
        source={{uri: route.params.Image}}
        style={{height: 150, width: 150}}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
        }}>
        {route.params.Name}
      </Text>
      <Text>${route.params.Price}</Text>
    </View>
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
