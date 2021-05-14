import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes,
} from 'react-native';
import {moderateVerticalScale} from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';

function ProgressBar() {
  const progress = useTrackPlayerProgress();

  const durationInHours = Math.floor(progress.duration / 60 / 60);
  const durationInMinutes =
    Math.floor(progress.duration / 60) - durationInHours * 60;
  const durationInSeconds = progress.duration % 60;

  const currentPositionInHours = Math.floor(progress.position / 60 / 60);
  const currentPositionInMinutes =
    Math.floor(progress.position / 60) - currentPositionInHours * 60;
  const currentPositionInSeconds = Math.floor((progress.position % 3600) % 60);

  return (
    <View>
      <View style={styles.progress}>
        <View
          style={{flex: progress.position, backgroundColor: colors.black}}
        />

        <View
          style={{
            flex: progress.duration - progress.position,
            backgroundColor: colors.grey,
            height: moderateVerticalScale(3),
          }}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>
          {currentPositionInMinutes}:{currentPositionInSeconds}
        </Text>
        <Text>
          {durationInMinutes}:{durationInSeconds}
        </Text>
      </View>
    </View>
  );
}

export default function Player(props) {
 
  const playbackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtwork, setTrackArtwork] = useState();
  const [trackArtist, setTrackArtist] = useState('');
  
  
  useTrackPlayerEvents(['playback-track-changed'], async event => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artist, artwork} = track || {};
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });

  const {style, onNext, onPrevious, onTogglePlayback} = props;

  var middleButtonText = true;

  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    middleButtonText = false;
  }
    

  return (
   
    <View style={[styles.card, style]}>
       
      <Image style={styles.cover} source={{uri: trackArtwork}} />
      
      <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text>
      <ProgressBar />
     
      <View style={styles.controls}>
        <TouchableOpacity onPress={onPrevious}>
          <Image
            style={styles.perviousNextButton}
            source={imagePath.Pervious}
          />
        </TouchableOpacity>
        {middleButtonText === true ? (
          <View>
            <TouchableOpacity onPress={onTogglePlayback}>
              <Image style={styles.playPauseButton} source={imagePath.Play} />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity onPress={onTogglePlayback}>
              <Image style={styles.playPauseButton} source={imagePath.Pause} />
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity onPress={onNext}>
          <Image style={styles.perviousNextButton} source={imagePath.Next} />
        </TouchableOpacity>
      </View>
    </View>
    
  );
}

Player.propTypes = {
  style: ViewPropTypes.style,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onTogglePlayback: PropTypes.func.isRequired,
};

Player.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  card: {
    width: '80%',
    elevation: 1,
    borderRadius: 4,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    alignItems: 'center',
    shadowColor: colors.black,
    backgroundColor: colors.white,
    shadowOffset: {width: 0, height: 1},
  },
  cover: {
    width:moderateVerticalScale(240),
    height:moderateVerticalScale(240),
    marginTop: 20,
    backgroundColor: colors.grey,
    borderRadius:5
  },
  progress: {
    height: 3,
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {
    ...commonStyles.futuraBtHeavyFont16,
    marginTop: 10,
  },
  artist: {
    fontWeight: 'bold',
  },
  controls: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
  },
  controlButtonContainer: {
    flex: 1,
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
  playPauseButton: {
    height: moderateVerticalScale(60),
    resizeMode: 'contain',
    tintColor: colors.black,
  },
  perviousNextButton: {
    height: moderateVerticalScale(40),
    resizeMode: 'contain',
    tintColor: colors.black,
    marginTop: moderateVerticalScale(10),
  },
 
  
});
