import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar, FlatList, Image} from 'react-native';
import { DARKBLUE } from '../utils/commoncolors';

import MovieItemComponent from '../components/MovieItemComponent';
import TrailerItemComponent from '../components/TrailerItemComponent';

const image = "https://www.bol.hr/files/Image/news/2018/film.jpg";


const list = [
    {id: 1, name: 'sdfsdf'},
    {id: 2, name: 'sdfsdf'},
    {id: 3, name: 'sdfsdf'},
    {id: 4, name: 'sdfsdf'},
    {id: 5, name: 'sdfsdf'},
    {id: 6, name: 'sdfsdf'},
    {id: 7, name: 'sdfsdf'},

]

export default class HomeScreen extends Component{

    constructor(){
        super();
        this.renderMovieItem = this.renderMovieItem.bind(this);
        this.renderTrailerItem = this.renderTrailerItem.bind(this);
    }

    renderMovieItem({item}){
        return <MovieItemComponent {...this.props}/>
    }

    renderTrailerItem({item}){
        return <TrailerItemComponent {...this.props}/>
    }

    render(){
        return (
            <FlatList
                ListEmptyComponent={
                    <View style={styles.container}>
                        <StatusBar translucent backgroundColor={DARKBLUE}/>
                        <View style={styles.moviesContainer}>
                            <Text style={styles.subtitle}> What's Popular</Text>
                            <FlatList
                                horizontal
                                data={list}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={this.renderMovieItem}
                                showsHorizontalScrollIndicator={false}
                                ItemSeparatorComponent={() => <View style={{width: 10}}/>}
                            />
                        </View>
                        <View style={styles.moviesContainer}>
                            <Text style={styles.subtitle}>Free To Watch</Text>
                            <FlatList
                                horizontal
                                data={list}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={this.renderMovieItem}
                                showsHorizontalScrollIndicator={false}
                                ItemSeparatorComponent={() => <View style={{width: 10}}/>}
                            />
                        </View>
                        <View style={styles.trailerContainer}>
                            <Image style={styles.backgroundImage} source={{uri: image}}/>
                            <Text style={styles.trailerTitle}> Latest Trailers </Text>
                            <FlatList
                                horizontal
                                data={list}
                                contentContainerStyle={{padding: 10}}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={this.renderTrailerItem}
                                showsHorizontalScrollIndicator={false}
                                ItemSeparatorComponent={() => <View style={{width: 10}}/>}
                            />
                        </View>
                    </View>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 100
    },
    moviesContainer: {
        flexGrow: 0,
        alignItems: 'center',
        padding: 10
    },
    trailerContainer: {
        flexGrow: 0,
        alignItems: 'center',
        marginTop: 50
    },
    backgroundImage: {
        height: 350,
        width: '100%',
        opacity: .9,
        position: 'absolute',
        top: 1,
        resizeMode: 'cover'
    },
    subtitle: {
        alignSelf: 'flex-start',
        fontSize: 20,
        fontWeight: 'bold',
        color: DARKBLUE,
        marginVertical: 15
    },
    trailerTitle: {
        alignSelf: 'flex-start',
        fontSize: 18,
        letterSpacing: .4,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 15
    }
})