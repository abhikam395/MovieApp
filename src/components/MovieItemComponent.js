import moment from 'moment';
import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { DARKBLUE } from '../utils/commoncolors';

const image = "https://www.themoviedb.org/t/p/w300_and_h450_face/";

export default class MovieItemComponent extends Component{

    constructor(){
        super();
    }

    navigateToMovieDetailScreen(movie){
        const {navigation} = this.props;
        navigation.navigate('MovieDetail', {data: movie, type: 'movie'});
    }

    render(){
        let {movie} = this.props;
        let {title, release_date, poster_path, id} = movie;
        let parsedDate = moment(release_date).format('MMM DD, YYYY');

        return (
            <TouchableOpacity 
                style={styles.container}
                activeOpacity={.7}
                onPress={() => this.navigateToMovieDetailScreen(movie)}>
                <View style={styles.imageContainer}>
                    <Image 
                        source={{uri: `${image + poster_path}`}} 
                        style={styles.image}
                    />
                    <View style={styles.ratingContainer}>
                        <View style={styles.ratingPercentage}>
                            <Text style={{color: 'white', fontSize: 10}}>50%</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.movieInfo}>
                    <Text style={styles.movieName}>{title}</Text>
                    <Text style={styles.movieDate}>{parsedDate}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 180,
        borderRadius: 10,
        // backgroundColor: '#eeeeee',
        // elevation: 2,
        margin: 1
    },
    image: {
        height: 270,
        borderRadius: 3,
        resizeMode: 'contain'
    },
    movieInfo: {
        padding: 10,
        paddingTop: 30
    },
    movieName: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    movieDate: {
        fontSize: 13,
        marginTop: 5,
        color: 'grey'
    },
    ratingContainer: {
        height: 50, 
        width: 50, 
        borderRadius: 25, 
        backgroundColor: DARKBLUE, 
        position: 'absolute',
        bottom: -25,
        left: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    ratingPercentage: {
        height: 46, width: 46, borderRadius: 23,
        borderColor: '#66bb6a',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})