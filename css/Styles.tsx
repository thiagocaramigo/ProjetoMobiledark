import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#090909'
    },
    header:{
        flexDirection:'row',
        paddingTop:60,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:30,
        justifyContent:'center'
        
    },
    perfil:{

    },
    imgperfil:{
        width:60,
        height:60,
        resizeMode:'contain',
        borderRadius:100
    },
    titulo:{
        flex:2
    },
    nome:{
        color:'#989cac',
        fontWeight:'bold',
        fontSize:15,
        padding:10,
    },
    descricao:{
        color:'#989cac',
        paddingLeft:20
    },
    pesquisa:{
        
    },
    imgpesquisa:{
        flex:1,
        width:30,
        height:30,
        resizeMode:'contain',
    },
    stories:{

    },
    titulostories:{
        color:'#989cac',
        fontSize:20,
        margin:20
    },
    scrollstories:{

    },
    imgstories:{
        width:200,
        height:300,
        resizeMode:'contain',
        borderRadius:60,
        margin:5  
    },
    blackbox:{
        backgroundColor:"#090909",
        color:'#989cac',
        fontSize:15,
        padding:10,
        width:50,
        borderRadius:10,
        position:"absolute",
        zIndex:1000,
        top:20,
        left:30,
        textAlign:"center"
    },
    redbox:{
        backgroundColor:"#090909",
        color:'#989cac',
        fontSize:15,
        padding:10,
        width:90,
        borderRadius:10,
        position:"absolute",
        zIndex:1000,
        top:20,
        left:30,
        textAlign:"center"
    },
    txticon:{
        flexDirection:"row",
        alignItems:"center"

    },
    txt:{
        color:"#989cac",
        fontSize:20,
        padding:10
    },
    icon:{
        width:28,
        height:18,
        resizeMode:'contain'
    }

})