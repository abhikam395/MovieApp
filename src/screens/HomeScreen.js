import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar, FlatList, Image} from 'react-native';
import { DARKBLUE } from '../utils/commoncolors';

import MovieItemComponent from '../components/MovieItemComponent';
import TrailerItemComponent from '../components/TrailerItemComponent';
import { connect } from 'react-redux';
import { 
    LATEST_TRAILERS_FETCH_REQUEST,
    POPULAR_MOVIES_FETCH_REQUEST, 
    TOPRATED_MOVIES_FETCH_REQUEST 
} from '../store/types';

const image = "https://www.bol.hr/files/Image/news/2018/film.jpg";

const mapDispatchToProps = function(dispatch){
    return {
        requestPopularMovies: () => dispatch({type: POPULAR_MOVIES_FETCH_REQUEST}),
        requestTopRatedMovies: () => dispatch({type: TOPRATED_MOVIES_FETCH_REQUEST}),
        requestLatestTrailers: () => dispatch({type: LATEST_TRAILERS_FETCH_REQUEST}),
    }
}

const mapStateToProps = function(state){
    return {
        popularMovies: state.home.popularMovies,
        topRatedMovies: state.home.topRatedMovies,
        latestTrailers: state.home.latestTrailers
    }
}

class HomeScreen extends Component{

    constructor(){
        super();
        this.state = {
            currentTrailerId: -1
        }
        this.changeCurrentTrailerId = this.changeCurrentTrailerId.bind(this);
        this.renderMovieItem = this.renderMovieItem.bind(this);
        this.renderTrailerItem = this.renderTrailerItem.bind(this);
    }

    componentDidMount(){
        const {
            requestLatestTrailers, 
            requestPopularMovies, 
            requestTopRatedMovies
        } = this.props;

        requestPopularMovies();
        requestTopRatedMovies();
        requestLatestTrailers();
    }
    
    changeCurrentTrailerId(id){
        this.setState({currentTrailerId: id});
    }

    renderMovieItem({item}){
        return (
            <MovieItemComponent 
                movie={item} 
                {...this.props}
            />
        )
    }

    renderTrailerItem({item, index}){
        let {currentTrailerId} = this.state;
        return (
            <TrailerItemComponent
                {...this.props}
                movie={item} 
                id={index}
                onClick={this.changeCurrentTrailerId}
                selectedTrailerId = {currentTrailerId}
            />
        )
    }

    render(){
        let {popularMovies, topRatedMovies, latestTrailers} = this.props;
        return (
            <FlatList
                ListEmptyComponent={
                    <View style={styles.container}>
                        <StatusBar translucent backgroundColor={DARKBLUE}/>
                        <View style={styles.moviesContainer}>
                            <Text style={styles.subtitle}> What's Popular</Text>
                            <FlatList
                                horizontal
                                data={popularMovies}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={this.renderMovieItem}
                                showsHorizontalScrollIndicator={false}
                                ItemSeparatorComponent={() => <View style={{width: 10}}/>}
                            />
                        </View>
                        <View style={styles.moviesContainer}>
                            <Text style={styles.subtitle}>Top Rated</Text>
                            <FlatList
                                horizontal
                                data={topRatedMovies}
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
                                data={latestTrailers}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 40
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