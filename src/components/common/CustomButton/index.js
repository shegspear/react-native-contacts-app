import React, {useState} from 'react';
import {TextInput, View, Text, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import colors from '../../../assets/theme/colors';

const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  loading,
  disabled, 
  onPress,
  }) => {

    const getBgColor = () => {
      if (disabled) {
        return colors.grey;
      };

      if(primary) {
        return colors.primary;
      };

      if(danger) {
        return colors.danger;
      }
      
      if(secondary) {
        return colors.secondary;
      }
    };

    return(
      <TouchableOpacity 
        disabled={disabled} 
        onPress={onPress}
        style={[styles.wrapper, {backgroundColor: getBgColor()}]}>

        <View style={[styles.loaderSection]}>
         {loading && <ActivityIndicator color={primary ? colors.secondary : colors.primary} />}
          {title && (
          <Text style={{
            color: disabled ? 'black' : colors.white,
            paddingLeft: loading ? 10 : 0,
          }}>
            {title}
          </Text>
          )}
        </View>

      </TouchableOpacity>
    );
};

export default CustomButton;