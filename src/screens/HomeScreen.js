import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

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
  const navigation = useNavigation()
  const dataMovie = [
    {
      id: 1,
      title: "Yowamushi Pedal",
      rating: 8.5,
      genre: "Sport",
      release: "2013",
      poster: poster1,
      sinopsis: "Yowamushi Pedal adalah anime yang menceritakan tentang seorang anak bernama Onoda Sakamichi yang merupakan seorang otaku yang sangat menyukai anime. Dia sangat menyukai anime dan dia sangat menyukai anime yang memiliki tema balap sepeda. Dia sangat menyukai anime tersebut karena dia ingin menjadi seperti karakter di anime tersebut. Dia ingin menjadi seorang pembalap sepeda yang hebat. Dia ingin menjadi pembalap sepeda yang hebat karena dia ingin membantu ibunya yang bekerja sebagai kurir sepeda. Dia ingin membantu ibunya agar ibunya tidak perlu bekerja keras lagi. Dia ingin membantu ibunya agar ibunya bisa berhenti bekerja dan bisa hidup dengan tenang. Dia ingin membantu ibunya agar ibunya bisa hidup dengan tenang karena ibunya sudah bekerja keras untuknya. Dia ingin membantu ibunya agar ibunya bisa hidup dengan tenang karena ibunya sudah bekerja keras untuknya sejak kecil.",
      trailer: video1
    },
    {
      id: 2,
      title: 'Jujutsu No Kaisen',
      rating: 8.5,
      genre: 'Anime',
      release: '2019',
      poster: poster2,
      sinopsis: 'Jujutsu Kaisen bercerita tentang seorang siswa SMA bernama Yuji Itadori yang bergabung dengan organisasi rahasia bernama Jujutsu Sorcerers. Yuji bergabung ke dalam organisasi itu untuk membunuh kutukan kejam bernama Ryomen Sukuna yang ada di tubuhnya.',
      trailer: video2
    },
    {
      id: 3,
      title: 'One Piece',
      rating: 8.5,
      genre: 'Anime',
      release: '1999',
      poster: poster3,
      sinopsis: 'One Piece menceritakan perjalanan Luffy, seorang anak laki-laki yang bertemu bajak laut hebat bernama Shanks, dimana Luffy terinspirasi oleh kehebatan Shanks dan bermimpi suatu hari nanti ingin menjadi bajak laut. Kemudian Shanks menjanjikan Luffy untuk reuni di masa depan dan memberikan topi jeraminya.',
      trailer: video3
    },
    {
      id: 4,
      title: 'Prince of Tennis',
      rating: 8.5,
      genre: 'Anime',
      release: '2001',
      poster: poster4,
      sinopsis: 'Anime Prince of Tennis ini bercerita tentang seorang anak lelaki kelas 1 SMP yang memiliki bakat luar biasa dalam tenis. Ia adalah Ryoma Echizen (baca: Echizen Ryoma). Dari episode-episode awal, kita akan disuguhi kehebatan-kehebatan si Ryoma ini. Ya, mirip dengan Tsabasa.',
      trailer: video4
    },
    {
      id: 5,
      title: 'Spy X Family',
      rating: 8.5,
      genre: 'Anime',
      release: '2019',
      poster: poster5,
      sinopsis: 'Spy x Family mengisahkan tentang agen mata-mata terampil bernama sandi "Twilight" yang menjalankan Operasi Strix, yakni misi penting terkait perdamaian antarnegara mencakup Westalis di barat dan Ostania di timur.',
      trailer: video5
    },
    {
      id: 6,
      title: 'Haikyuu!!',
      rating: 8.5,
      genre: 'Anime',
      release: '2014',
      poster: poster6,
      sinopsis: 'Haikyuu!! menceritakan tentang Shoyo Hinata yang merupakan seorang siswa SMA yang memiliki bakat dalam permainan voli. Namun, karena kecil dan kurus, ia tidak pernah mendapatkan perhatian dari orang lain. Namun, ketika ia melihat pertandingan voli antara tim SMA di sekolahnya, ia terinspirasi untuk bermain voli.',
      trailer: video6
    },
    {
      id: 7,
      title: 'Boku No Hero Academia',
      rating: 8.5,
      genre: 'Anime',
      release: '2016',
      poster: poster7,
      sinopsis: 'Boku no Hero Academia menceritakan tentang seorang anak laki-laki bernama Izuku Midoriya yang memiliki bakat super yang luar biasa. Namun, karena tidak dilahirkan dengan kekuatan super, Izuku tidak pernah mendapatkan perhatian dari orang lain. Namun, ketika ia melihat pertandingan voli antara tim SMA di sekolahnya, ia terinspirasi untuk bermain voli.',
      trailer: video7
    }
  ]
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
      {/* <ScrollView>
        <View style={styles.movieCard}>
          <Image
            source={poster1}
            style={styles.posterImage}
          />
          <Text style={styles.sinopsisText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <View style={styles.container3}>
            <Text>Rating : 8.5</Text>
            <Text>Genre : Sport</Text>
          </View>
        </View>
        <View style={styles.movieCard}>
          <Image
            source={poster2}
            style={styles.posterImage}
          />
          <Text style={styles.sinopsisText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <View style={styles.container3}>
            <Text>Rating : 8.5</Text>
            <Text>Genre : Sport</Text>
          </View>
        </View>
        <View style={styles.movieCard}>
          <Image
            source={poster3}
            style={styles.posterImage}
          />
          <Text style={styles.sinopsisText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <View style={styles.container3}>
            <Text>Rating : 8.5</Text>
            <Text>Genre : Sport</Text>
          </View>
        </View>
        <View style={styles.movieCard}>
          <Image
            source={poster4}
            style={styles.posterImage}
          />
          <Text style={styles.sinopsisText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <View style={styles.container3}>
            <Text>Rating : 8.5</Text>
            <Text>Genre : Sport</Text>
          </View>
        </View>
        <View style={styles.movieCard}>
          <Image
            source={poster5}
            style={styles.posterImage}
          />
          <Text style={styles.sinopsisText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <View style={styles.container3}>
            <Text>Rating : 8.5</Text>
            <Text>Genre : Sport</Text>
          </View>
        </View>
        <View style={styles.movieCard}>
          <Image
            source={poster6}
            style={styles.posterImage}
          />
          <Text style={styles.sinopsisText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <View style={styles.container3}>
            <Text>Rating : 8.5</Text>
            <Text>Genre : Sport</Text>
          </View>
        </View>
        <View style={styles.movieCard}>
          <Image
            source={poster7}
            style={styles.posterImage}
          />
          <Text style={styles.sinopsisText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <View style={styles.container3}>
            <Text>Rating : 8.5</Text>
            <Text>Genre : Sport</Text>
          </View>
        </View>
      </ScrollView> */}
      {/* <FlatList
        data={dataMovie}
        renderItem={({ item }) => {
          return (
            <View style={styles.movieCard}>
              <Image
                source={item.poster}
                style={styles.posterImage}
              />
              <Text style={styles.sinopsisText}>
                {item.sinopsis}
              </Text>
              <View style={styles.container3}>
                <Text>Rating : {item.rating}</Text>
                <Text>Genre : {item.genre}</Text>
              </View>
            </View>
          )
        }}
      /> */}
      <ScrollView>
        {
          dataMovie.map((item,index) => {
            return (
              <TouchableOpacity 
              style={styles.movieCard}
              index={index}
              onPress={() => navigation.navigate('DetailScreen')}
              >
                <Image
                  source={item.poster}
                  style={styles.posterImage}
                />
                <Text style={styles.sinopsisText}>
                  {item.sinopsis}
                </Text>
                <View style={styles.container3}>
                  <Text>Rating : {item.rating}</Text>
                  <Text>Genre : {item.genre}</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
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
  categoryCard: {
    backgroundColor: "#fff",
    width: 150,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 5
  },
  categoryText: {
    color: '#000',
    fontSize: 20
  },
  movieCard: {
    backgroundColor: "#fff",
    width: "96%",
    height: "auto",
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 10
  },
  posterImage: {
    width: '90%',
    height: 180,
    borderRadius: 10
  },
  sinopsisText: {
    color: '#000',
    fontSize: 15,
    marginTop: 5,
    textAlign: 'justify'
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'lightgray',
  }
})

export default HomeScreen