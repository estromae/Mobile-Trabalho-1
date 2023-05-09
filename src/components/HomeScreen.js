import React from "react";
import { View, Button, Text, ImageBackground, Touchable, TouchableOpacity, Share, StyleSheet } from "react-native";

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./CarNorth_Taylor_6179.jpg')} style={styles.imgBackground}>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SpaceScreen')}>
                        <Text style={styles.textButton}>Start</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },

    imgBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        width: 150,
        backgroundColor: 'rgba(39, 39, 39, 1)',
        alignItems: 'center',
        padding: 10,
        borderRadius: 30,
        borderWidth: 2,
    },

    textButton: {
        color: 'white',
    },
})