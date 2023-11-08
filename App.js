import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import PostCard from './components/PostCard';

export default function App() {
  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    fetch('http://192.168.10.229:8080')
      .then(res => res.json())
      .then(data => setBlogPosts(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
       <View>
        <ScrollView>
          {blogPosts.map((singlePost, index) => {
            console.log(singlePost)
            return (
              <PostCard singlePost={singlePost} index={index} key={singlePost._id} />    
            )
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})