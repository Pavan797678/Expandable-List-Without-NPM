import React from 'react'
import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import { moderateVerticalScale } from '../styles/responsiveSize'

export default function BookListLayoutCell({data,index,goTOPlaylistScreen}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>goTOPlaylistScreen(data,index)}>
            <Image style={styles.bookCoverImage} source={{uri:data.artwork}}/>
            </TouchableOpacity>
          

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
      alignItems:'center'
    },bookCoverImage:{
        height:moderateVerticalScale(220),
        width:moderateVerticalScale(170),
        resizeMode:'cover',
        borderRadius:10
    }
})

