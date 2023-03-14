import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const RatingScreen = () => {
    const [ratings, setRatings] = useState({
        disseny: 0,
        navegacio: 0,
        comoditat: 0,
        // Apectes a puntuar
    });

    const [comment, setComment] = useState('');

    const handleRatingChange = (aspecto, rating) => {
        setRatings({ ...ratings, [aspecto]: rating });
    };

    const handleComentarioChange = (text) => {
        setComentario(text);
    };

    const handleSubmit = () => {
        // Enviar puntuacions al servidor y comentario
        console.log({ ...ratings, comment });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>La teva opinió importa!</Text>
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingLabel}>Disseny de l'app:</Text>
                <View style={styles.ratingStars}>
                    <TouchableOpacity onPress={() => handleRatingChange('disseny', 1)}>
                        <AntDesign name={ratings.disseny >= 1 ? 'star' : 'staro'} size={30} color="#FFC107" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleRatingChange('disseny', 2)}>
                        <AntDesign name={ratings.disseny >= 2 ? 'star' : 'staro'} size={30} color="#FFC107" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleRatingChange('disseny', 3)}>
                        <AntDesign name={ratings.disseny >= 3 ? 'star' : 'staro'} size={30} color="#FFC107" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleRatingChange('disseny', 4)}>
                        <AntDesign name={ratings.disseny >= 4 ? 'star' : 'staro'} size={30} color="#FFC107" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleRatingChange('disseny', 5)}>
                        <AntDesign name={ratings.disseny >= 5 ? 'star' : 'staro'} size={30} color="#FFC107" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingLabel}>Navegació:</Text>
                <View style={styles.ratingStars}>
                    <TouchableOpacity onPress={() => handleRatingChange('navegacio', 1)}>
                        <AntDesign name={ratings.navegacio >= 1 ? 'star' : 'staro'} size={30} color="#FFC107" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleRatingChange('navegacio', 2)}>
                        <AntDesign name={ratings.navegacio >= 2 ? 'star' : 'staro'} size={30} color="#FFC107" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleRatingChange('navegacio', 3)}>
                        <AntDesign name={ratings.comoditat >= 3 ? 'star' : 'staro'} size={30} color="#FFC107" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleRatingChange('navegacio', 4)}>
                        <AntDesign name={ratings.navegacio >= 4 ? 'star' : 'staro'} size={30} color="#FFC107" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleRatingChange('navegacio', 5)}>
                        <AntDesign name={ratings.navegacio >= 5 ? 'star' : 'staro'} size={30} color="#FFC107" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingLabel}>Comoditat:</Text>
                <View style={styles.ratingStars}>
                    <TouchableOpacity onPress={() => handleRatingChange('comoditat', 1)}>
                        <AntDesign name={ratings.comoditat >= 1 ? 'star' : 'staro'} size={30} color="#FFC107" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleRatingChange('comoditat', 2)}>
                        <AntDesign name={ratings.comoditat >= 2 ? 'star' : 'staro'} size={30} color="#FFC107" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleRatingChange('comoditat', 3)}>
                        <AntDesign name={ratings.comoditat >= 3 ? 'star' : 'staro'} size={30} color="#FFC107" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleRatingChange('comoditat', 4)}>
                        <AntDesign name={ratings.comoditat >= 4 ? 'star' : 'staro'} size={30} color="#FFC107" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleRatingChange('comoditat', 5)}>
                        <AntDesign name={ratings.comoditat >= 5 ? 'star' : 'staro'} size={30} color="#FFC107" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.commentContainer}>
                <Text style={styles.commentLabel}>Comentari:</Text>
                <TextInput
                    style={styles.commentInput}
                    onChangeText={(text) => setComment(text)}
                    value={comment}
                />
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitText}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    ratingLabel: {
        fontSize: 18,
        marginRight: 10,
    },
    ratingStars: {
        flexDirection: 'row',
    },
    commentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    commentLabel: {
        fontSize: 18,
        marginRight: 10,
    },
    commentInput: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
    },
    submitButton: {
        backgroundColor: '#FFC107',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    submitText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default RatingScreen;