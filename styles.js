import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position:'absolute',
    flexDirection: 'row',
    width:'100%',
    height:60,
    top:10,
    justifyContent:'space-between',
    padding:20
  },
  answerButton: {
    marginVertical: 5,
    justifyContent: 'flex-start',
    paddingLeft:10
  },
  questionView: {
    flex: 1,
    justifyContent:'center',
    width:'100%',
    padding:30
  },
  questionText: {
    marginBottom: 20,
    fontWeight:'bold'
  },
  questionCount: {
    fontWeight:'bold'
  },
  answerText: {
    marginBottom:30,
    fontWeight:'bold',
    textAlign: 'center'
  },
  playAgain: {
    width:100,
    alignSelf: 'center'
  }
});
