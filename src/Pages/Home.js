import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Button, View, SafeAreaView, TextInput, Text, Alert, ActivityIndicator, FlatList
} from 'react-native';
import Footer from '../Components/Footer';



const Home = ({ navigation }) => {
  const [ value, onChangeText ] = useState('Location');
  const [ isLoading, setLoading ] = useState(false);
  const [ data, setData ] = useState([]);

  const getWeather = async () => {
    const weatherUrl = `https://pangrib-weather-application.herokuapp.com/weather?address=${value}`;
    
    try {
      setLoading(true);
      const response = await fetch(`${weatherUrl}`);
      const json = await response.json();
      setData(json);
    } catch (err) {
      console.log(err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator size="large" color="blue"/> : (
        <>
          <View style={styles.content}>
            <Text style={styles.title}>
              Weather Apps
            </Text>
            <Text style={styles.location}>
              Location : {data.location}
            </Text>
            <Text style={styles.result}>
              Result : {data.forecast}
            </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
            <View style={styles.button}>
              <Button
                title="Search"
                onPress={getWeather}
              />
            </View>
          </View>
          <Footer
            navigation={navigation}
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  content: {
    flex: 0.95,
    marginVertical: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    marginVertical: 8,
    color: 'blue'
  },
  location: {
    fontSize: 15,
    marginHorizontal: 10,
    color: 'black'
  },
  result: {
    fontSize: 15,
    marginHorizontal: 10,
    color: 'black'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 8,
  },
  button: {
    marginHorizontal: 100,
    marginVertical: 8,
  }
});

export default Home;