import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
const image = "https://www.bol.hr/files/Image/news/2018/film.jpg";

export default class MovieDetailScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.movieInfoContainer}>
                    <Image style={styles.backgroundImage} source={{uri: image}}/>
                    <View style={styles.colorBackground}/>
                    <View style={styles.row}>
                        <Image style={styles.movieImage} source={{uri: image}}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    movieInfoContainer: {
    },
    backgroundImage: {
        height: 400,
        width: '100%',
        position: 'absolute'
    },
    colorBackground: {
        height: 400,
        width: '100%',
        backgroundColor: '#f9a825',
        position: 'absolute',
        opacity: .9
    },
    row: {
        flexDirection: 'row',
        padding: 10
    },
    movieImage: {
        height: 250,
        width: 170,
        borderRadius: 10,
        resizeMode: 'stretch'
    }
})