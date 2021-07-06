import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { DARKBLUE } from '../utils/commoncolors';

const image = "https://www.bol.hr/files/Image/news/2018/film.jpg";

export default class MovieItemComponent extends Component{

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
                    <View style={{
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
                        }}>

                        <View style={{
                            height: 46, width: 46, borderRadius: 23,
                            borderColor: '#66bb6a',
                            borderWidth: 2,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{color: 'white', fontSize: 10}}>50%</Text>

                        </View>

                    </View>
                </View>
                <View style={styles.movieInfo}>
                    <Text style={styles.movieName}>Raya and the Last Dragon</Text>
                    <Text style={styles.movieDate}>Mar 03,2021</Text>
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
        borderRadius: 10,
        resizeMode: 'stretch'
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
    }
})