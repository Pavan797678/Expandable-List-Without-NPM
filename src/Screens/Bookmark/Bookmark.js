import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from '../../Components/Header'
import WrapperContainer from '../../Components/WrapperContainer'
import colors from '../../styles/colors'


export default class Bookmark extends Component {
    render() {
        return (
            <WrapperContainer statusBarColor={colors.white}>
            <Header />
            </WrapperContainer>
        )
    }
}
