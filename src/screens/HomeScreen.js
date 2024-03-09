import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView
} from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Movies"
        style={styles.input}
      />
      <View style={styles.container2}>
        <Text style={styles.text1}>Best Genre</Text>
        <Text style={styles.text1}>More</Text>
      </View>
      <ScrollView
        horizontal={true}
      >
        <View style={styles.categoryCard}>
          <Text style={styles.categoryText}>
            Action
          </Text>
        </View>
        <View style={styles.categoryCard}>
          <Text style={styles.categoryText}>
            Comedy
          </Text>
        </View>
        <View style={styles.categoryCard}>
          <Text style={styles.categoryText}>
            Horror
          </Text>
        </View>
        <View style={styles.categoryCard}>
          <Text style={styles.categoryText}>
            Thriller
          </Text>
        </View>
        <View style={styles.categoryCard}>
          <Text style={styles.categoryText}>
            Romance
          </Text>
        </View>
        <View style={styles.categoryCard}>
          <Text style={styles.categoryText}>
            Sci-fi
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  input: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  text1: {
    color: '#fff',
    fontSize: 20
  },
  categoryCard:{
    backgroundColor: "#fff",
    width: 150,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  categoryText:{
    color: '#000',
    fontSize: 20
  }
})

export default HomeScreen