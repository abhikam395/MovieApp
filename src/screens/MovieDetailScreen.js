import moment from 'moment';
import React, {Component} from 'react';
import {
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
    StyleSheet, 
    ToastAndroid,
    FlatList
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ReviewComponent from '../components/ReviewsComponent';
import { DARKBLUE } from '../utils/commoncolors';

const image = "https://www.bol.hr/files/Image/news/2018/film.jpg";
const imageBase = "https://www.themoviedb.org/t/p/w300_and_h450_face/";


export default class MovieDetailScreen extends Component{

    constructor(){
        super();
        this.state = {
            addToFavorite: false
        }
        this.addToFavorite = this.addToFavorite.bind(this);
    }

    addToFavorite(){
        let {addToFavorite} = this.state;
        this.setState({addToFavorite: !addToFavorite});
        if(!addToFavorite)
            ToastAndroid.show('Added to favorite', 1000);
        else
            ToastAndroid.show('Removed from favorite', 1000);
    }

    render(){
        let {addToFavorite} = this.state;
        let {data, type} = this.props.route.params;
        let {title, name, overview, backdrop_path, release_date, id} = data;

        let releaseDate = moment(release_date).format('MMM DD, YYYY');
        return (
            <FlatList
                ListEmptyComponent={
                    <View style={styles.container}>
                        <View style={styles.movieInfoContainer}>
                            <Image style={styles.backgroundImage} source={{uri: image}}/>
                            <View style={styles.colorBackground}/>
                            <View style={styles.contentContainer}>
                                <View style={styles.row}>
                                    <Image 
                                        style={styles.movieImage} 
                                        source={{uri: `${imageBase + backdrop_path}`}}
                                    />
                                    <View style={styles.movieInfo}>
                                        <Text style={styles.movieName}>{type == 'movie' ? title : name}</Text>
                                        <Text style={styles.movieDate}>{releaseDate}</Text>
                                        <View style={styles.buttonRow}>
                                            <View style={styles.ratingContainer}>
                                                <View style={styles.ratingPercentage}>
                                                    <Text style={{color: 'white', fontSize: 8}}>100%</Text>
                                                </View>
                                            </View>
                                            <TouchableOpacity 
                                                style={styles.favoriteButton}
                                                onPress={this.addToFavorite}>
                                                <MaterialIcons 
                                                    name={addToFavorite ? 'favorite' : 'favorite-outline'} 
                                                    size={18}
                                                    color="white"/>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.subTitle}>Overview</Text>
                                <Text style={styles.overview}>{overview}</Text>
                            </View>
                        </View>
                        <ReviewComponent id={id}/>
                    </View>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        padding: 10
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        position: 'absolute'
    },
    colorBackground: {
        height: '100%',
        width: '100%',
        backgroundColor: '#f9a825',
        position: 'absolute',
        opacity: .9
    },
    row: {
        flexDirection: 'row',
    },
    movieImage: {
        height: 250,
        width: 170,
        borderRadius: 5,
    },
    movieInfo: {
        padding: 10,
        flex: 1
    },
    movieName: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    },
    movieDate: {
        color: 'white',
        fontSize: 13,
        marginVertical: 5
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        marginTop: 20,
        marginBottom: 10
    },
    overview: {
        color: 'white',
        letterSpacing: .5,
        fontSize: 14,
        marginBottom: 20,
    },
    imageContainer: {},
    favoriteButton: {
        width: 36,
        height: 36,
        backgroundColor: DARKBLUE,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        marginHorizontal: 10
    },
    ratingContainer: {
        height: 36, 
        width: 36, 
        borderRadius: 18, 
        backgroundColor: DARKBLUE,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    ratingPercentage: {
        height: 32, 
        width: 32, 
        borderRadius: 16,
        borderColor: '#66bb6a',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
})