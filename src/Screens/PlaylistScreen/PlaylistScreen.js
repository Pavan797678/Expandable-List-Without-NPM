import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';

import Player from '../../Components/Player';
import playlistData from '../../data/playlist.json';
import Sound from 'react-native-sound';
import RNFetchBlob from 'rn-fetch-blob';


let dirs = RNFetchBlob.fs.dirs.DocumentDir;

export default function PlaylistScreen(props) {
  const {currnetSongFromLocal,songPosition} = props.route.params;
  const playbackState = usePlaybackState();
  const [songIndex, setSongIndex] = useState(songPosition);
  

  const path = dirs + '/' + currnetSongFromLocal.path;
  useEffect(() => {
    alert(path)
    // setup();
    // togglePlayback();
    
  }, []);

  // useEffect(() => {
  //   async function goToNextSong() {
  //     await TrackPlayer.reset();
  //     await TrackPlayer.add(playlistData[songIndex]);
  //     await TrackPlayer.play();
  //   }
  //   goToNextSong();
  // }, [songIndex]);

  async function setup() {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });
  }

  async function togglePlayback() {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      
      await TrackPlayer.reset();

      await TrackPlayer.add([currnetSongFromLocal]);

      await TrackPlayer.play();
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  }

  async function skipToNext() {
    try {
      setSongIndex(songIndex + 1);
      await TrackPlayer.skipToNext();
    } catch (_) {}
  }

  async function skipToPrevious() {
    try {
      setSongIndex(songIndex - 1);
      await TrackPlayer.skipToPrevious();
    } catch (_) {}
  }



  return (
    <View style={styles.container}>
      <Player
        onNext={skipToNext}
        style={styles.player}
        onPrevious={skipToPrevious}
        onTogglePlayback={togglePlayback}
       
       
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  player: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  state: {
    marginTop: 20,
  },
});
