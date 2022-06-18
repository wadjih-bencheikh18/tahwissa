import React, { useState } from "react";
import { Pressable,Button,Image,ScrollView,View,Text, StyleSheet, ProgressBarAndroidComponent } from 'react-native';
import { useFonts } from 'expo-font';

function WindowInfo (){

    const [loaded] = useFonts({
        Sen: require('./font/Sen-Regular.ttf'),
      });
      const[isShown, setIsShown] = useState(false);
      const handlePress = event =>{
          setIsShown(isShown => !isShown);
      };
    return(
        <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginHorizontal:27,
        }}
        keyboardShouldPersistTaps='handled'
         >
        <View style={{marginTop:40, flexDirection:'row', alignItems: 'center',justifyContent: 'space-between'}}>
            <Image source={require('./assets/arrowDOWN.png')}/>
            <View style={styles.icon}>
                <Image style={{marginRight:15}} source={require('./assets/Vector.png')}/>
                <Image style={{width:20,height:18}} source={require('./assets/heart.png')}/>
            </View>
        </View>

        <View style={styles.infobloc}>
                <Text style={styles.title}>Monument des Martyrs</Text>
                <View style={styles.itembloc}>
                    <Image  source={require('./assets/pic.png')}/>
                    <Text style={styles.subTitle1}>Monument national - historique</Text>
                    <View elevation={5} style={styles.button}>
                        <Text style={{fontSize:12,color:'#FFFFFF',fontFamily:'Sen',}} >Directions</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', alignItems: 'center',justifyContent: 'space-between',marginTop:10}}>
                    <View style={styles.item}>
                        <Image style={{marginRight:5}} source={require('./assets/adress.png')}/>
                        <Text style={styles.subTitle}>El Madania, Algiers</Text>
                    </View>
                    <View style={styles.item}>
                        <Image style={{marginRight:5}} source={require('./assets/star.png')}/>
                        <Text style={styles.subTitle2}>4.5</Text>
                    </View>
                </View>
                <Pressable onPress={handlePress}><View style={styles.horaire}>
                <View style={styles.item}>
                        <Image style={{marginRight:5}} source={require('./assets/time.png')}/>
                        {!isShown &&(<HoraireJour/>)}
                        {isShown &&(<Text style={{fontSize:12,color:'#000000',fontFamily:'Sen',}}>Les horaires d'ouverture</Text>)}
                </View>
                       {!isShown &&(<Image style={{width:12,height:7}} source={require('./assets/arrowDOWN.png')}/>) } 
                       {isShown &&(<Image style={{width:12,height:7}} source={require('./assets/arrowUP.png')}/>) }     
                </View>    
                </Pressable> 
                {isShown && <ShowHoraire1/>}    
        </View>
    </ScrollView>
    );
}
function HoraireJour(){
    return(
        <View style={styles.icon}>
            <Text style={styles.rouge10}>Ferme </Text>
            <Text style={styles.subTitle10}>Aujourd'hui 16:00 - </Text>
            <Text style={styles.vert10}>Ouvre </Text>
            <Text style={styles.subTitle10}>Demain 9:00</Text>
        </View>
    );}


    const Horaire = (props) => {
    return(
        <View style={styles.heure}>
        <Text style={styles.vert}>{props.debut}</Text>
        <Text style={styles.subTitle}> - </Text>
        <Text style={styles.rouge}>{props.fin}</Text>
        </View>
    );
}

function ShowHoraire() {
    return(
        <View style={styles.itembloc}>
            <View style={{marginTop:18}} >
            <Text style={styles.weekdays}>Aujourd'hui (Lundi)</Text>
            <Text style={styles.weekdays}>Demain (Mardi)</Text>
            <Text style={styles.weekdays}>Mercredi</Text>
            <Text style={styles.weekdays}>Jeudi</Text>
            <Text style={styles.weekdays}>Vendredi</Text>
            <Text style={styles.weekdays}>Samedi</Text>
            <Text style={styles.weekdays}>Dimanche</Text>
            </View>
            <View style={styles.weekdays}>
                <Horaire debut="9:00" fin="16:00"/>
                <Horaire debut="9:00" fin="16:00"/>
                <Horaire debut="9:00" fin="16:00"/>
                <Horaire debut="9:00" fin="16:00"/>
                <Horaire debut="   " fin="     "/>
                <Horaire debut="9:00" fin="16:00"/>
                <Horaire debut="9:00" fin="16:00"/>
            </View>
        </View>
    );
}


function ShowHoraire1() {
    return(     
            <View style={{marginTop:18}} >
            <View style={styles.itembloc}><Text style={styles.weekdays}>Aujourd'hui (Lundi)</Text><Horaire style={styles.weekdays} debut="9:00" fin="16:00"/></View>
            <View style={styles.itembloc}><Text style={styles.weekdays}>Demain (Mardi)</Text><Horaire style={styles.weekdays} debut="9:00" fin="16:00"/></View>
            <View style={styles.itembloc}><Text style={styles.weekdays}>Mercredi</Text><Horaire style={styles.weekdays} debut="9:00" fin="16:00"/></View>
            <View style={styles.itembloc}><Text style={styles.weekdays}>Jeudi</Text><Horaire style={styles.weekdays} debut="9:00" fin="16:00"/></View>
            <View style={styles.itembloc}><Text style={styles.weekdays}>Vendredi</Text><Horaire style={styles.weekdays} debut="" fin="        "/></View>
            <View style={styles.itembloc}><Text style={styles.weekdays}>Samedi</Text><Horaire style={styles.weekdays} debut="9:00" fin="16:00"/></View>
            <View style={styles.itembloc}><Text style={styles.weekdays}>Dimanche</Text><Horaire style={styles.weekdays} debut="9:00" fin="16:00"/></View>
            </View>

    );
}


const styles= StyleSheet.create({
    icon:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth:'80%',
    },
    heure:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:10,
    },
    infobloc:{
        marginTop:18,
    },
    itembloc:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    daylist:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:18,
    },
    title:{
        fontSize: 18,
      fontFamily:'Sen',
      marginBottom:10,
    },
    subTitle2:{
        fontSize:12,
        color:'#000000',
        fontFamily:'Sen',
        opacity:0.5,
        marginRight:130,
    },
    subTitle1: {
      fontSize:12,
      color:'#000000',
      fontFamily:'Sen',
      opacity:0.5,
      maxWidth: '60%',
      paddingTop:15,
    },
    vert:{
        fontSize:12,
        color:'#38AC0F',
        fontFamily:'Sen',
        
    },
    rouge10:{
        fontSize:10,
        color:'#A82424',
        fontFamily:'Sen',
        opacity:0.5,
    },
    vert10:{
        fontSize:10,
        color:'#38AC0F',
        fontFamily:'Sen',
        opacity:0.5,
    },
    rouge:{
        fontSize:12,
        color:'#A82424',
        fontFamily:'Sen',
       
    },
    subTitle: {
        fontSize:12,
        color:'#000000',
        fontFamily:'Sen',
        opacity:0.5,
      },
    subTitle10: {
        fontSize:10,
        color:'#000000',
        fontFamily:'Sen',
        opacity:0.5,
      },
    item:{
        flexDirection:'row',
        alignItems: 'center',
        marginRight:30,
        fontFamily:'Sen',
    },
    button:{
      marginLeft:40,
      backgroundColor: '#8168DD',
      paddingVertical: 7,
      paddingHorizontal:11,
      borderRadius: 8,
      alignContent:'center',
      shadowColor: '#000000',
      shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
    },
    horaire:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:10,
    },
    weekdays:{
        marginTop:10,
        fontSize:12,
        color:'#000000',
        fontFamily:'Sen',
        
    },

}
);
export default WindowInfo;