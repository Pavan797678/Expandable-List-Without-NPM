import React, { Component } from 'react'
import { Text, View ,FlatList} from 'react-native'
import Header from '../../Components/Header'
import WrapperContainer from '../../Components/WrapperContainer'
import colors from '../../styles/colors'
import MusicFiles,{Constants} from 'react-native-get-music-files-v3dev-test';


import LocalStorageSongsLayoutCell from '../../Components/LocalStorageSongsLayoutCell'
import { moderateVerticalScale } from '../../styles/responsiveSize'



export default class Library extends Component {
    state = {
        storagePermission:'',
        localStorageSongs:[]
      }
 
     componentDidMount() {
    this._getSongs()
     }

     _getSongs =() =>{
      MusicFiles.getAll({
          cover: true,
          batchSize: 0,
          batchNumber: 0,
          sortBy: Constants.SortBy.Title,
          sortOrder: Constants.SortOrder.Ascending
        })
          .then(response => {
            this.setState({
                localStorageSongs:response.results
            })
            // alert(JSON.stringify(response))
          })
          .catch(er => console.log(er));

    }
    
    render() {
       const{localStorageSongs}=this.state
     alert(JSON.stringify(localStorageSongs))
       return (
            <WrapperContainer statusBarColor={colors.white}>
            <Header />
            <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={localStorageSongs}
         
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: moderateVerticalScale(10),
              }}></View>
          )}
          renderItem={({item,index}) => <LocalStorageSongsLayoutCell data={item} index={index} goTOPlaylistScreen={this.goTOPlaylistScreen} />}
        />
            </WrapperContainer>
        )
    }
}
