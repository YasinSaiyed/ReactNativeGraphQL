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

const GET_PRODUCTS = gql`
  query getProducts {
    products(first: 100, channel: "default-channel") {
      edges {
        node {
          id
          name
          description
          thumbnail {
            url
          }
        }
      }
    }
  }
`;
export default function Products({navigation}) {
  const {loading, data} = useQuery(GET_PRODUCTS);

  const showDetails = item => {
    navigation.navigate('SingleDetail', item);
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, margin: 20, color: '#000'}}>Products</Text>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <FlatList
          data={data.products.edges}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('SingleDetail', {
                  Name: item.node.name,
                  Image: item.node.thumbnail.url,
                  Price: index + 10,
                })
              }>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={{uri: item.node.thumbnail.url}}
                  style={{height: 150, width: 150}}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  {item.node.name}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                  }}>
                  {item.node.description}
                </Text>
                <Text>${index + 10}</Text>
              </View>
            </TouchableOpacity>
          )}
          numColumns={2}
          keyExtractor={item => item.node.id}
        />
      )}
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
