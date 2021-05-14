import React from 'react';
import {View, StyleSheet, Image, Button} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import navigationStrings from '../constants/navigationStrings';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import {bold} from '../styles/fontFamily';

export default function DrawerContent(props) {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.userInfoContainer}>
              <Avatar.Image source={imagePath.profile} size={50} />
              <View style={styles.userInformationContainer}>
                <Title style={styles.title}>Pavan Sharma</Title>
                <Caption style={styles.caption}>Pavan@CBL.Com</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Image style={styles.icons} source={imagePath.Home} />
              )}
              label="Home"
              onPress={() => {
                navigation.navigate(navigationStrings.HOME);
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image style={styles.icons} source={imagePath.Library} />
              )}
              label="Library"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image style={styles.icons} source={imagePath.Audio} />
              )}
              label="Audio"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image style={styles.icons} source={imagePath.Bookmark} />
              )}
              label="Bookmark"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image style={styles.icons} source={imagePath.Profile} />
              )}
              label="Profile"
              onPress={() => {
                navigation.navigate(navigationStrings.PROFILE);
              }}
            />
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Image style={styles.icons} source={imagePath.Share} />
              )}
              label="Share"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image style={styles.icons} source={imagePath.FeedBack} />
              )}
              label="Feedback"
              onPress={() => {}}
            />
          </Drawer.Section>
          <DrawerItem
              icon={({color, size}) => (
                <Text>Version</Text>
              )}
              label="1.0.0"
              onPress={() => {}}
            />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontFamily:bold,
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor:colors.borderTopColor,
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  signOutButtonView: {
    bottom: 0,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  icons: {
    height: 20,
    width: 20,
    tintColor: colors.black,
  },
  userInfoContainer: {flexDirection: 'row', marginTop: 15},
  userInformationContainer: {marginLeft: 15, flexDirection: 'column'},
});
