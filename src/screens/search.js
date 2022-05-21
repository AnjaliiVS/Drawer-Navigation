import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Search = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: '80%',
          height: '60%',
        }}
        source={require('../../src/assets/images/pics.jpg')}
      />
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
        This is the Search page
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});
export default Search;
