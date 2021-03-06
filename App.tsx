import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { estilo } from './css/Styles';

export default function App() {
  return (
    <View style={estilo.container}>


      {/* Início do header */}
      <View style={estilo.header}>
       
        <View style={estilo.perfil}>
          <Image source={{uri:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"}} style={estilo.imgperfil}/>
        </View>

        <View style={estilo.titulo}>
          <Text style={estilo.nome}> Pedro de Oliveira </Text>
          <Text style={estilo.descricao}>Programador</Text>
        </View>
        
        <View style={estilo.pesquisa}>
          <Image source={{uri:"https://upload.wikimedia.org/wikipedia/meta/thumb/7/7e/Vector_search_icon.svg/945px-Vector_search_icon.svg.png"}} style={estilo.imgpesquisa}/>
        </View>

      </View>
      {/*Fim do header*/}

      <ScrollView horizontal={false}>
      
      {/* Inicio do Stories */}

      <View style={estilo.stories}>
        <Text style={estilo.titulostories}>
          Stories
        </Text>

        <ScrollView horizontal={true} style={estilo.scrollstories}>
          <View>
            <Text style={estilo.blackbox}>Live</Text>
            <Image source={{uri:"https://images.unsplash.com/photo-1636314533101-9112be56e507?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} style={estilo.imgstories}/>
            <View style={estilo.txticon}>
              <Text style={estilo.txt}>Savannah</Text>
              <Image source={require("./assets/iconverifield.png")} style={estilo.icon}/>
              </View> 
          </View>

          <View>
            <Text style={estilo.redbox}>Premiere</Text>
            <Image source={{uri:"https://wallpaperaccess.com/full/1143377.jpg"}} style={estilo.imgstories}/>
            <View style={estilo.txticon}>
              <Text style={estilo.txt}>Ana</Text>
              <Image source={require("./assets/iconverifield.png")} style={estilo.icon}/>
              </View> 
          </View>

          <View>
            <Image source={{uri:"https://images.unsplash.com/photo-1635876987349-9ef3983a139b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} style={estilo.imgstories}/>
            <View style={estilo.txticon}>
              <Text style={estilo.txt}>Edilson</Text>
              <Image source={require("./assets/iconverifield.png")} style={estilo.icon}/>
              </View> 
          </View>

          <View>
            <Image source={{uri:"https://images.unsplash.com/photo-1635454022133-e287f3924950?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} style={estilo.imgstories}/>
            <View style={estilo.txticon}>
              <Text style={estilo.txt}>Pelé</Text>
              <Image source={require("./assets/iconverifield.png")} style={estilo.icon}/>
              </View> 
          </View>

          <View>
            <Image source={{uri:"https://images.unsplash.com/photo-1635729788533-39c81a472550?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"}} style={estilo.imgstories}/>
            <View style={estilo.txticon}>
              <Text style={estilo.txt}>Cristiano</Text>
              <Image source={require("./assets/iconverifield.png")} style={estilo.icon}/>
              </View> 
          </View>
        </ScrollView>

      </View>
      {/* Fim dos Stories */}

      {/* Início do Trending */}
      <View style={estilo.trending}>

        <View style={estilo.cxtitulo}>
          <Text style={estilo.trendingtitulo}>
            Trending
          </Text>
          <Image source={require("./assets/more.png")} style={estilo.trendingmore}/> 
        </View>

        <View style={estilo.cxtrendingdetalhe}>
          <View>
            <Image source={{uri:"https://magazine.zarpo.com.br/wp-content/uploads/2019/02/A-sensacao-de-saltar-de-paraquedas-1200x900.jpg"}} style={estilo.detalheimg}/>
            <Text style={estilo.detalhelike}>Like</Text>
          </View>

        <View style={estilo.trendingusuario}>
          <Image source={{uri:"https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"}} style={estilo.trendingusuarioimg}/>
          <View>
            <Text style={estilo.trendingusuariotitulo}>João Miguel</Text>
            <Text style={estilo.trendingusuariosub}>2 minutos atrás</Text>
          </View>

          

        </View>

        <Text style={estilo.trendingobs}>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet in dolorem,
          ducimus quasi accusamus magnam optio culpa unde deserunt aliquid corporis
          suscipit distinctio vel similique? Repellendus eligendi sit distinctio maxime.

          </Text>


      </View>
      
      </View>

      {/* Fim do Trending */}


      {/* Todos os elementos devem ficar acima do ScrollView */}
      </ScrollView>


    </View>
 
  );
}

