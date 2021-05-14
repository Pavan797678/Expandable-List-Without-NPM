import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import {moderateVerticalScale} from '../styles/responsiveSize';

export default function LocalStorageSongsLayoutCell({data,index,goTOPlaylistScreen}) {
  return (
    <View>
      <TouchableOpacity onPress={()=>goTOPlaylistScreen(data,index)}>
        <View style={styles.container}>
          {data.cover ? (
            <Image style={styles.coverImage} source={data.cover} />
          ) : (
            <Image style={styles.coverImage} source={imagePath.loacl_folder} />
          )}
          <Text style={styles.titleText}>{data.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: moderateVerticalScale(60),
    flexDirection: 'row',
  },
  coverImage: {
    width: moderateVerticalScale(45),
    height: moderateVerticalScale(45),
    
  },
  titleText: {
    ...commonStyles.futuraBtHeavyFont14,
    marginTop: moderateVerticalScale(5),
    fontFamily: fontFamily.semiBold,
  },
});
