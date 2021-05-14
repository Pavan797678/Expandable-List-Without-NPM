import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import BookListLayoutCell from '../../Components/BookListLayoutCell';
import Header from '../../Components/Header';
import Loader from '../../Components/Loader';

import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import {moderateVerticalScale} from '../../styles/responsiveSize';
import playlistData from "../../data/playlist.json";

const playlistCollection=playlistData;

export default class Home extends Component {
  state = {
    eBookCollection:playlistCollection
  };

  goTOPlaylistScreen =(data,index)=>{
    const {navigation} = this.props

    

     navigation.navigate(navigationStrings.PLAYLIST_SCREEN,{"currnetSong":data,"songPosition":index})
  }


  render() {
    const {eBookCollection} = this.state;
    
    return (
      <WrapperContainer statusBarColor={colors.white}>
        <Header />
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={eBookCollection}
          numColumns={2}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: moderateVerticalScale(10),
              }}></View>
          )}
          renderItem={({item,index}) => <BookListLayoutCell data={item} index={index} goTOPlaylistScreen={this.goTOPlaylistScreen} />}
        />
      </WrapperContainer>
    );
  }
}
