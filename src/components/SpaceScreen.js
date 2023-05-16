import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, Share, StyleSheet, ScrollView, StatusBar} from "react-native";
// import { format } from 'date-fns'
import Icon from "react-native-vector-icons/AntDesign";

export default function Space() {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [image, setImage] = useState('empty')
    const [hdImage, setImageHd] = useState('')
    const [explanation, setExplanation] = useState('')

    //useEffect( () => randomDate() )
    useEffect(() => start())

    function start() {
        if (title === '') {
            randomDate()
        }   
    }

    function randomDate() {
        let randomDate = `${parseInt(Math.random() * (2023 - 1997) + 1997)}-${parseInt(Math.random() * (12 - 1) + 1)}-${parseInt(Math.random() * (31 - 1) + 1)}`
        console.log(randomDate)
        // console.log(format(randomDate, 'dd/mm/yyyy'))
        getApi(randomDate)
    }

    async function getApi(date) {
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=hAWmc6kHrKc3l8lpuuCFianeeO2Wk09xDhMaD08B&date=${date}`
        await fetch(apiUrl).then((data) => data.json()).then((res) => console.log(res))
        let data = await fetch(apiUrl)
        var res = await data.json() 
        console.log(res.url)
        console.log(res.hdurl)
        setImageHd(res.hdurl)
        setConst(res.title, res.date, res.url, res.explanation)
    }

    function setConst(title, date, url, explanation) {
        setTitle(title)
        setDate(date)
        setImage(url)
        setExplanation(explanation)
    }

    async function share() {
        await Share.share({message: hdImage})
    }

    function changeQualityImg() {
        setImage(hdImage)
    }

    return (
        <View style={styles.container}>
        <StatusBar
            animated={true}
            hidden={true}
        />
        <ImageBackground source={require('./skyblue.jpg')} style={styles.imgBackground} blurRadius={2}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end'}}>
                <TouchableOpacity style={styles.button} onPress={() => randomDate()}>
                    <Text style={styles.textButton}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => changeQualityImg()}>
                    <Text style={styles.textButton}>HD</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.infoBox}>

                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
                    <Text style={styles.title}>{title}</Text>
                </View>

                <View style={styles.subInfoBox}>

                    <Image style={styles.imgApi} source={{uri:image}}/>

                    <Text style={{marginVertical: 5, color: 'white'}}>Date: {date}</Text>

                    <View style={{flex: 1}}>
                        <ScrollView style={styles.scrollView}>
                            <Text style={styles.subInfoBoxText}>{explanation}</Text>
                        </ScrollView>
                    </View>
                
                </View>
                <View style={styles.optionsView}>
                    <TouchableOpacity style={styles.shareButton} onPress={() => share()}>
                        <Text style={{color: '#0000EE'}}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    imgBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },

    scrollView: {
        flex: 1,
        marginHorizontal: 20,
    },

    button: {
        width: 150,
        backgroundColor: 'rgba(39, 39, 39, 1)',
        alignItems: 'center',
        marginVertical: 20,
        padding: 10,
        borderRadius: 30,
        borderWidth: 2,
    },

    textButton: {
        color: 'white',
    },


    infoBox: {
        flex: 1,
        width: '85%',
        backgroundColor: 'transparent',
    },

    title: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: 'white',
    },

    subInfoBox: {
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    imgApi: {
        height: '50%',
        width: '80%',
    },

    subInfoBoxText: {
        fontFamily: 'Roboto',
        textAlign: 'justify',
        color: 'white',
    },

    optionsView: {
        flex: 0.5,
        // backgroundColor: 'rgba(39, 39, 39, 1)',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
    },

    shareButton: {

    },
})