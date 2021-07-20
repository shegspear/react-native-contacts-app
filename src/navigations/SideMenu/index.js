import React from 'react';
import {View, SafeAreaView, Image, Text, TouchableOpacity} from 'react-native';

import Container from '../../components/common/Container/index';
import {SETTINGS} from '../../constants/RouteNames';
import styles from './styles';

const SideMenu = ({navigation}) => {
    const menuItems = [
        {
          icon: <Text>T</Text>,
          name: 'Settings',
          onPress: () => {navigation.navigate(SETTINGS)}
        },
        {
          icon: <Text>T</Text>, 
          name: 'Logout',
          onPress: () => {}
        }
    ];

    return (
        <SafeAreaView>
            <Container>
                <Image 
                source={require('../../assets/images/logo.png')}
                style={styles.logoImage}
                />

                <View style={{paddingHorizontal: 70}}>
                 {
                    menuItems.map(({name, icon, onPress}) => (
                         <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
                          {icon}
                          <Text style={styles.itemText}>{name}</Text>
                         </TouchableOpacity>
                    ))
                 }
                </View>
            </Container>
        </SafeAreaView>
    );
};

export default SideMenu;
