import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
 


const Homepage: () => React$Node = () => {
  return (
    <View style={styles.container}>
         <View style={styles.item_carder}>
                 <Image source={require('./../assets/search.png')} style={{width:100, height:100}}/>
                 <Text>Search</Text>
         </View>
         <View style={styles.item_carder}>
                 <Image source={require('./../assets/calendar.png')} style={{width:100, height:100}}/>
                 <Text>Event</Text>
         </View>
         <View style={styles.item_carder}>
                 <Image source={require('./../assets/announcement.png')} style={{width:100, height:100}}/>
                 <Text>Announcement</Text>
         </View>
         <View style={styles.item_carder}>
                 <Image source={require('./../assets/library.png')} style={{width:100, height:100}}/>
                 <Text>Library</Text>
         </View>
         <View style={styles.item_carder}>
                 <Image source={require('./../assets/leaders.png')} style={{width:100, height:100}}/>
                 <Text>Leaders</Text>
         </View>
         <View style={styles.item_carder}>
                 <Image source={require('./../assets/profile.png')} style={{width:100, height:100}}/>
                 <Text>Profile</Text>
         </View>

      </View>

  );
};

const styles = StyleSheet.create({
        container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        marginTop: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
		},
        item_carder:{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        padding: 10,
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,
        marginBottom: 5,
        backgroundColor: '#e2e2e2',
        elevation: 10,
        width : '46%',
		
        }
});

export default Homepage;
