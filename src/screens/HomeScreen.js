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
import video1 from '../assets/yp.mp4'
import video2 from '../assets/jjk.mp4'
import video3 from '../assets/op.mp4'
import video4 from '../assets/pot.mp4'
import video5 from '../assets/sxf.mp4'
import video6 from '../assets/Haikyuu.mp4'
import video7 from '../assets/bnha.mp4'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
      />
      <View style={styles.container2}>
        <Text style={styles.text1}>Best Genre</Text>
        <Text style={styles.text1}>more</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.container3}>
          <Text style={styles.text3}>
            Action
          </Text>
        </View>
        <View style={styles.container3}>
          <Text style={styles.text3}>
            Romance
          </Text>
        </View>
        <View style={styles.container3}>
          <Text style={styles.text3}>
            Comedy
          </Text>
        </View>
        <View style={styles.container3}>
          <Text style={styles.text3}>
            Thriller
          </Text>
        </View>
        <View style={styles.container3}>
          <Text style={styles.text3}>
            Horror
          </Text>
        </View>
      </ScrollView>
      <Text
        style={styles.text1}
      >
        Best Movies
      </Text>
      <ScrollView>
        <View style={styles.movieCard}>
          <Image
            source={poster1}
            style={styles.poster}
          />
          <Text style={styles.sinopsisText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <View style={styles.container6}>
            <Text>Rating: 8.5</Text>
            <Text>Genre: Action</Text>
          </View>
        </View>
        <View style={styles.movieCard}>
          <Image
            source={poster2}
            style={styles.poster}
          />
          <Text style={styles.sinopsisText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <View style={styles.container6}>
            <Text>Rating: 8.5</Text>
            <Text>Genre: Action</Text>
          </View>
        </View>
        <View style={styles.movieCard}>
          <Image
            source={poster3}
            style={styles.poster}
          />
          <Text style={styles.sinopsisText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <View style={styles.container6}>
            <Text>Rating: 8.5</Text>
            <Text>Genre: Action</Text>
          </View>
        </View>
        <View style={styles.movieCard}>
          <Image
            source={poster4}
            style={styles.poster}
          />
          <Text style={styles.sinopsisText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <View style={styles.container6}>
            <Text>Rating: 8.5</Text>
            <Text>Genre: Action</Text>
          </View>
        </View>
        <View style={styles.movieCard}>
          <Image
            source={poster5}
            style={styles.poster}
          />
          <Text style={styles.sinopsisText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <View style={styles.container6}>
            <Text>Rating: 8.5</Text>
            <Text>Genre: Action</Text>
          </View>
        </View>
        <View style={styles.movieCard}>
          <Image
            source={poster6}
            style={styles.poster}
          />
          <Text style={styles.sinopsisText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <View style={styles.container6}>
            <Text>Rating: 8.5</Text>
            <Text>Genre: Action</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '95%',
    alignSelf: 'center',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  text1: {
    color: '#fff',
    fontSize: 20,
  },
  container3: {
    backgroundColor: '#fff',
    width: 150,
    height: 30,
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  text3: {
    color: '#000',
    fontSize: 20,
  },
  movieCard: {
    backgroundColor: '#fff',
    width: '90%',
    height: 'auto',
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
  },
  poster: {
    width: '90%',
    height: 180,
    borderRadius: 10,
  },
  sinopsisText: {
    color: '#000',
    fontSize: 15,
    textAlign: 'justify',
    marginTop: 10,
  },
  container6: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    marginTop: 10,
},
})

export default HomeScreen