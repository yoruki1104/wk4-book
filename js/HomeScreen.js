import React from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import HomeDetail from "./HomeDetail";
import bookList from "../json/booklist.json";



const HomeScreen = ({navigation}) => {
    return(
        <View style={{flex:1,backgroundColor:"#fff"}}>
            <View style={styles.headerContentStyle}>
                <View style={styles.headerCenter}>
                    <TouchableOpacity
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <Image source={{uri: "https://github.com/yoruki1104/wk4-book/blob/master/img/btn_navbar_mobile.png?raw=true"}} style={styles.headerIcon}/>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>My Book</Text>
                    <Image source={{uri: "https://github.com/yoruki1104/wk4-book/blob/master/img/btn_search.png?raw=true"}} style={styles.headerIcon}/>
                </View>
            </View>

            <FlatList
            data={bookList}
            renderItem={({item}) => 
            <HomeDetail
                bookList={item}
                navigation={navigation}
                />}
                keyExtractor={(item,index) => index.toString()}
            />

            <View style={styles.bottom}>
                <Image source={{uri: "https://github.com/yoruki1104/wk4-book/blob/master/img/icon_bottomnav_home.png?raw=true"}} style={styles.bottomIcon}/>
                <Image source={{uri: "https://github.com/yoruki1104/wk4-book/blob/master/img/icon_bottomnav_mybook_selected.png?raw=true"}} style={styles.bottomIcon}/>
                <Image source={{uri:"https://github.com/yoruki1104/wk4-book/blob/master/img/icon_bottomnav_favorites.png?raw=true"}} style={styles.bottomIcon}/>               
            </View>
            <View style={{flexDirection:"row"}}>
                <Text style={styles.bottomText}> Home</Text>
                <Text style={styles.bottomTextSelected}> My Book</Text>
                <Text style={styles.bottomText}> Favorites</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    headerLeft:{
        marginTop:20,
        marginLeft: 8,
        width: 360,
        height: 35
      },
      headerRight:{
        marginTop:20,
        marginRight: 8,
        marginLeft:5,
        width: 30,
        height: 35
      },
      headerContentStyle:{
        width:360,
        height:80,
        backgroundColor:'#00b49f',
        alignItems: 'center',
    },
    headerCenter:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:360
    },
    headerIcon:{
        width:40,
        height:40,
        marginTop:32
    },
    headerText:{
        marginTop:32,
        color:"#fff",
        fontSize:20,
        fontWeight:"bold",
    },
    bottom:{
        width: 360,
        height: 56,
        flexDirection:"row",
        justifyContent:"space-around",
        borderColor:"#ddd",
        borderTopWidth:1,
        paddingTop:4
    },
    bottomIcon:{
        width:40,
        height:40,
    },
    bottomText:{
        width:120,
        textAlign:"center",
        marginTop:-8,
        marginBottom:10,
        color:"#818181"
    },
    bottomTextSelected:{
        width:120,
        textAlign:"center",
        marginTop:-8,
        marginBottom:10,
        color:"#00b49f"
    },

});
export default HomeScreen;