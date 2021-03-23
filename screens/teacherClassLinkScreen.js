import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
//import MyHeader from '../components/MyHeader'
//import {ListItem,Icon} from 'react-native-elements'
import db from '../config'
import firebase from 'firebase'
//import SwipeableFlatlist from '../components/SwipeableFlatlist'

export default class TeacherClassLinkScreen extends React.Component {
constructor(){
    super()
    this.state={
        classlink:"",
        grade:"",
        section:"",
        date:""
    }
}

addClassLinkAndDeatils=()=>{
    var classlink= this.state.classlink
    var grade = this.state.grade
    var section= this.state.section
    
    var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year

    db.collection("classlink").add({
       "classlink" : classlink,
       "grade" : grade,
       "section" : section ,
       "date"       : date + '-' + month + '-' + year,
        })
}
    render(){
        return(
            <View>
            <TextInput placeholder="class Link" onChangeText={(text)=>{
                this.setState({
                    classlink:text
                })
            }}/>
            <TextInput placeholder="Grade" onChangeText={(text)=>{
                this.setState({
                    grade:text
                })
            }}/>
            <TextInput placeholder="Section" onChangeText={(text)=>{
                this.setState({
                    section:text
                })
            }}/>   
            <TouchableOpacity onPress={this.addClassLinkAndDeatils()}><Text>update</Text></TouchableOpacity>
            </View>
        )
    }
}