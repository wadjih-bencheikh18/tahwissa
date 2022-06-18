
import React from "react";
import { Image,ScrollView,View,Text, StyleSheet } from 'react-native';
import Event from './event';
import { useFonts } from 'expo-font';


function Eventpage(){

  const [loaded] = useFonts({
    Sen: require('./font/Sen-Regular.ttf'),
  });

    return(
        <View  style={styles.container}>
        <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
         >
             <View style={styles.header}>
              <Text style={styles.sectionTitle}>Évènements</Text>
              <View style={styles.icons}>
                <Image  source={require('./assets/Vector.png')}/>
                <Image style={{marginHorizontal:18}}source={require('./assets/filtre.png')}/>
                <Image source={require('./assets/Group.png')}/>
              </View>
             </View> 
             <View style={{borderBottomWidth:1,borderBottomColor:'#00000050',marginBottom:20}} >
             <View style={styles.subT}>
             <Text style={styles.subTitleselected}>Tout</Text>
             <Text style={styles.subTitle}>Proche de moi</Text>
             <Text style={styles.subTitle}>Plus enticipé</Text>
             </View>
             </View>
             <View>
              <Event title='10 jours avant le bac' adress='El Moradia Alger' time='1 jour' date='2 juin 2022'/>
              <Event title='Match Algerie-Cameroun'  adress='5 juillet' time='19 jour' date='21 juin 2022'/>
              <Event title='Jeux méditerranéens' adress='Oran' time='20 jours' date='22 juin 2022'/>
             </View>
            
        </ScrollView>
        </View>   
    );
    
}
const styles = StyleSheet.create({
    container: {
      marginTop:32,
      padding:25,
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    header:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    icons: { 
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      
    },
    subTitleselected:{
      fontSize:12,
      color:'#8168DD',
      fontFamily:'Sen',
    },
    subT:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily:'Sen',
      marginTop:21,
      marginBottom:7,
      marginHorizontal:10,
    
    },
    subTitle:{
      fontSize:12,
      color:'#000000',
      fontFamily:'Sen',
      opacity:0.5,
    },
 
    sectionTitle: {
      fontSize: 18,
      fontFamily:'Sen',
      
    },

  });
export default Eventpage;