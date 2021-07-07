import React, { Component, createRef } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Video from 'react-native-video';
const image = "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/";

export default class TrailerItemComponent extends Component{

    constructor(){
        super();
        this.state = {
            videoPlaying: false
        }
        this.onVideoButtonToggle = this.onVideoButtonToggle.bind(this);
    }

    navigateToMovieDetailScreen(movie){
        const {navigation} = this.props;
        navigation.navigate('MovieDetail', {data: movie, type: 'tv'});
    }

    onVideoButtonToggle(){
        let {videoPlaying} = this.state;
        let {onClick, id, selectedTrailerId} = this.props;
        this.setState({videoPlaying: !videoPlaying});
        onClick(id);
    }


    render(){
        let {movie, selectedTrailerId, id} = this.props;
        let {name, poster_path} = movie;
        let {videoPlaying} = this.state;
        let isPause = videoPlaying == false || selectedTrailerId != id;
        return (
            <TouchableOpacity 
                style={styles.container}
                activeOpacity={.7}
                onPress={() => this.navigateToMovieDetailScreen(movie)}>
                <View style={styles.imageContainer}>
                    <Video
                        source={{uri: 'https://content.jwplatform.com/manifests/yp34SRmf.m3u8'}}
                        style={styles.videoPlayer}
                        fullscreen={true}
                        pictureInPicture={true}
                        resizeMode="cover"
                        playWhenInactive={true}
                        playInBackground={true}
                        onVideoLoadStart={() => {console.log('loading')}}
                        poster={`${image + poster_path}`}
                        posterResizeMode="stretch"
                        paused={isPause}
                    />
                    <TouchableOpacity 
                        onPress={this.onVideoButtonToggle}
                        style={styles.playButton}>
                        <MaterialIcons 
                            size={57} 
                            name={videoPlaying ? 'pause': 'play-arrow'}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.movieInfo}>
                    <Text style={styles.movieName}>{name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
    },
    imageContainer: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 200,
        width: 300,
        borderRadius: 10,
        zIndex: 1,
        resizeMode: 'stretch'
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
        zIndex: 2
    },
    videoPlayer: {
        height: 200,
        width: 300,
        borderRadius: 10,
        zIndex: 1,
    },
})