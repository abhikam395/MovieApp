import moment from 'moment';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {DARKBLUE} from './../utils/commoncolors';

export default class ReviewItemComponent extends Component{

    render(){
        let {data} = this.props;
        let {author, author_details, content, updated_at} = data;
        let date = moment(updated_at).format('MMM DD, YYYY');
        return (
            <View style={styles.container}>
                <View style={styles.userImage}>
                    <AntDesign name="user" size={15} color="white"/>
                </View>
                <View style={styles.reviewInfo}>
                    <View style={styles.row}>
                        <Text style={styles.name}>{author}</Text>
                        <Text style={styles.date}>{date}</Text>
                    </View>
                    <Text style={styles.comment}>{content}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        elevation: 2,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: DARKBLUE
    },
    userImage: {
        height: 36,
        width: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white'
    },
    reviewInfo: {
        padding: 5,
        flex: 1
    },
    name: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    },
    comment: {
        fontSize: 13,
        color: 'white',
        marginVertical: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    date: {
        color: 'lightgrey',
        marginLeft: 10,
        fontSize: 10,
        fontWeight: 'bold',
    }
})