import {View, Text, Image, Pressable  } from 'react-native'
import React from 'react'
import Colors from './../../constants/Colors'


export default function LoginScreen() {
    return (
        <View style={{
            backgroundColor:Colors.WHITE,
            height:'100%'
        }}>
            <Image source={require('./../../assets/images/login_2.png')}
            style={{
                width:'100%' ,
                height:500
            }}
            />

            <View style={{
                padding:20,
                display:'flex',
                alignItems:'center'
            }}>
                <Text style={{
                    fontFamily:'JosefinSans-Bold.ttf',
                    fontSize:30,
                    textAlign:'center'
                }}>Ready to make a new friend?</Text>
                <Text style={{
                    fontFamily:'JosefinSans',
                    fontSize:18,
                    textAlign:'center',
                    color:Colors.GREEN
                }}>The beginning of a new life starts with you, let's change a life together.</Text>
                
                <Pressable
                style={{
                    padding:14,
                    marginTop:100,
                    backgroundColor:Colors.BROWN,
                    width:'100%' ,
                    borderRadius:14 
                }}
                >
                <Text style={{
                    fontFamily:'JosefinSans',
                    fontSize:20,
                    textAlign:'center'
                }}>Start Here</Text>
                </Pressable>


            </View>
        </View>
    )
}