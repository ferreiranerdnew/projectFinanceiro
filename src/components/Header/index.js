import React from "react";
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    //colocar o icom
    TouchableOpacity
} from "react-native"

// Importando icons
import { Feather } from '@expo/vector-icons'

//o currentHeight funciona apenas para o android necessario fazer a correção abaixo para funcionar o IOS
//correção abaixo para statusbar 

const _statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22/*para android */: 64 //para ios;

//name="user" o user e o nome d eum icon dentro do pacote Feather
export default function Header(){
    return(
    <View style={styles._container}>
        <View style={styles._content}>
            <Text> Teste teste teste</Text>

            <TouchableOpacity>                
                <Feather name="user" size={27} color="#FFF" />
            </TouchableOpacity>

        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    _container:{
        backgroundColor:'#8000ff',
        //Colocar o Header abaixo da status bar
        paddingTop:_statusBarHeight,
        //alinhando os itens dentro do _container
        flexDirection:'row',
        paddingStart: 16,
        paddingEnd: 16,        
        paddingBottom: 44,       

    }
})