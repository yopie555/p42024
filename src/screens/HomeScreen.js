import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native'
import React from 'react'

import poster1 from '../assets/poster1.png'
import poster2 from '../assets/poster2.png'
import poster3 from '../assets/poster3.png'
import poster4 from '../assets/poster4.png'
import poster5 from '../assets/poster5.png'
import poster6 from '../assets/haikyuu.png'
import poster7 from '../assets/bnha.png'

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
      <Text style={styles.text1}>Hot Anime Series</Text>
      <ScrollView>
        <View style={styles.movieCard}>
          <Image 
          source={poster1}
          style={styles.posterImage}
          />
          <Text style={styles.sinopsisText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
  },
  movieCard:{
    backgroundColor:"#fff",
    width:"96%",
    height:"auto",
    borderRadius:10,
    marginHorizontal:10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 10
  },
  posterImage:{
    width: '90%',
    height: 180,
    borderRadius: 10
  },
  sinopsisText:{
    color: '#000',
    fontSize: 15,
    marginTop: 5,
    textAlign: 'justify'
  }
})

export default HomeScreen