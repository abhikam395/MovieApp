import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { DARKBLUE } from '../utils/commoncolors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const image = "https://static.toiimg.com/photo/msid-70892041/70892041.jpg";

export default class TrailerItemComponent extends Component{

    constructor(){
        super();
        this.navigateToMovieDetailScreen = this.navigateToMovieDetailScreen.bind(this);
    }

    navigateToMovieDetailScreen(){
        const {navigation} = this.props;
        navigation.navigate('MovieDetail');
    }

    render(){
        return (
            <TouchableOpacity 
                style={styles.container}
                activeOpacity={.7}
                onPress={this.navigateToMovieDetailScreen}>
                <View style={styles.imageContainer}>
                    <Image 
                        source={{uri: image}} 
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.playButton}>
                        <MaterialIcons 
                            size={57} 
                            name="play-arrow"
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.movieInfo}>
                    <Text style={styles.movieName}>America: The Motion Picture</Text>
                    <Text style={styles.movieDate}>America The Motion Picture | Opening Day</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        // alignItems: 'center'
    },
    imageContainer: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 200,
        width: 300,
        borderRadius: 20,
        // resizeMode: 'stretch'
    },
    movieInfo: {
        padding: 10,
        color: 'white'
    },
    movieName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    movieDate: {
        fontSize: 13,
        marginTop: 5,
        color: 'white',
        textAlign: 'center'
    },
    playButton: {
        position: 'absolute',
    }
})