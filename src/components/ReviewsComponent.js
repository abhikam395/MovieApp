import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import { connect } from 'react-redux';
import { REVIEWS_FETCH_REQUEST } from '../store/types';
import { DARKBLUE } from '../utils/commoncolors';
import ReviewItemComponent from './ReviewItemComponent';

const mapDispatchToProps = function(dispatch){
    return {
        requestReviews: (id) => dispatch({type: REVIEWS_FETCH_REQUEST, payload: {id}})
    }
}

const mapStateToProps = function(state){
    return {
        reviews: state.review.reviews,
        total: state.review.total
    }
}

class ReviewsComponent extends Component{

    constructor(){
        super();
        this.renderReview = this.renderReview.bind(this);
    }

    componentDidMount(){
        let {requestReviews, id} = this.props;
        requestReviews(id);
    }

    renderReview({item}){
        return <ReviewItemComponent data={item}/>
    }

    render(){
        let {reviews, total} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.reviewCountContain}>
                    <Text style={styles.label}>Total Reviews : </Text>
                    <Text style={styles.count}>{total}</Text>
                </View>
                <FlatList
                    data={reviews}
                    renderItem={this.renderReview}
                    keyExtractor={(item, index) => index}
                    contentContainerStyle={{padding: 10}}
                    ItemSeparatorComponent={
                        () => <View style={{borderBottomWidth: 1, borderColor: "white"}}/>
                    }
                />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsComponent);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    reviewCountContain: {
        backgroundColor: DARKBLUE,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        color: 'white',
        fontSize: 16
    },
    count: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    }
})