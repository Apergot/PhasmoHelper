import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const list = [
  {
    id: 1,
    name: 'Spirit',
    strengths:
      'None. The Spirit has no unique powers, making it easier to survive but harder to identify.',
    weaknesses:
      'Using Smudge Sticks on a Spirit will stop it attacking for 120 seconds instead of 90.',
    evidences: ['Spirit Box', 'Fingerprints', 'Ghost Writing'],
  },
  {
    id: 2,
    name: 'Wraith',
    strengths:
      " Wraiths almost never touch the ground, meaning it can't be tracked by footsteps. It can travel through walls and doors without opening them, and will not leave footprints on the ground.",
    weaknesses:
      'Wraiths have a toxic reaction to Salt. If a Wraith comes into contact with a pile of salt, it will immediately cease attacking.',
    evidences: ['Fingerprints', 'Freezing Temperatures', 'Spirit Box'],
  },
  {
    id: 3,
    name: 'Phantom',
    strengths:
      'Looking at a Phantom will considerably drop your Sanity. This refers to any visible manifestations of the Phantom, including during a Hunt.',
    weaknesses:
      'Taking a photo of the Phantom will make it temporarily disappear. The Photo Camera will make it disappear, but it will not stop a Hunt.',
    evidences: ['EMF Level 5', 'Ghost Orb', 'Freezing Temperatures'],
  },
  {
    id: 4,
    name: 'Poltergeist',
    strengths:
      'A Poltergeist is capable of influencing more objects at once than any other Ghosts, and is capable of shutting multiple doors at once.',
    weaknesses: 'A Poltergeist is almost ineffective in an empty room',
    evidences: ['Spirit Box', 'Fingerprints', 'Ghost Orb'],
  },
  {
    id: 5,
    name: 'Banshee',
    strengths:
      'A Banshee will focus on one player at a time until it kills them.',
    weaknesses:
      'Banshees fear the Crucifix, which boosts the Hunt-stopping range of one from 3 meters to 5 meters against it.',
    evidences: ['EMF Level 5', 'Fingerprints', 'Freezing Temperatures'],
  },
  {
    id: 6,
    name: 'Jinn',
    strengths:
      'A Jinn will travel at a faster speed if its victim is far away.',
    weaknesses:
      "Turning off the location's power source will prevent the Jinn from using its ability.",
    evidences: ['Spirit Box', 'Ghost Orb', 'EMF Level 5'],
  },
  {
    id: 7,
    name: 'Mare',
    strengths:
      'Increased chance to attack in the dark. As such, it will do what it can to achieve this, such as turning off lights and tripping the fuse box.',
    weaknesses: 'Turning the lights on will lower its chance to attack.',
    evidences: ['Ghost Orb', 'Spirit Box', 'Freezing Temperatures'],
  },
  {
    id: 8,
    name: 'Revenant',
    strengths:
      'A Revenant will travel at a significantly faster speed when hunting a victim. Additionally, the Revenant can freely switch whoever it is targeting during a Hunt.',
    weaknesses: 'Hiding from the Revenant will cause it to move very slowly.',
    evidences: ['EMF Level 5', 'Fingerprints', 'Ghost Writing'],
  },
  {
    id: 9,
    name: 'Shade',
    strengths:
      'As a shy ghost, a Shade will rarely perform actions in the presence of two or more people, making it harder to detect.',
    weaknesses:
      'Conversely, a Shade will rarely start a Hunt when players are grouped together.',
    evidences: ['Ghost Writing', 'EMF Level 5', 'Ghost Orb'],
  },
  {
    id: 10,
    name: 'Demon',
    strengths: 'Demons will attack more often than any other ghost.',
    weaknesses:
      "Asking a Demon successful questions on the Ouija Board won't lower the users' sanity.",
    evidences: ['Spirit Box', 'Ghost Writing', 'Freezing Temperatures'],
  },
  {
    id: 11,
    name: 'Yurei',
    strengths:
      "Yurei have been known to have a stronger effect on people's Sanity.",
    weaknesses:
      "Using Smudge Sticks on the Yurei's Ghost Room will cause it to not wander around the location for ~90 seconds.",
    evidences: ['Ghost Orb', 'Ghost Writing', 'Freezing Temperatures'],
  },
  {
    id: 12,
    name: 'Oni',
    strengths:
      'Oni are more active when people are nearby and have been seen moving objects at great speed.',
    weaknesses:
      'Being more active will make the Oni easier to find and identify.',
    evidences: ['EMF Level 5', 'Ghost Writing', 'Spirit Box'],
  },
];
export class Carrousel extends React.Component {
  render() {
    return (
      <Carousel
        ref={(c) => {
          this._carousel = c;
        }}
        data={list}
        renderItem={this._renderItem}
        sliderWidth={350}
        itemWidth={350}
      />
    );
  }
  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slideViewContainerStyle}>
        <Text style={styles.phasmoTitle}>{item.name}</Text>
        <Text style={styles.slideTitle}>Strengths</Text>
        <Text style={styles.slideText}>{item.strengths}</Text>
        <Text style={styles.slideTitle}>Weaknesses</Text>
        <Text style={styles.slideText}>{item.weaknesses}</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  slideViewContainerStyle: {
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    height: 300,
    padding: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  slideText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 15,
  },
  slideTitle: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 15,
    marginTop: 5,
  },
  phasmoTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
  },
});

export default Carrousel;
