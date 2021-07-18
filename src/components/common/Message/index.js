import React, {useState} from 'react';
import {TextInput, View, Text, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import colors from '../../../assets/theme/colors';

const Message = ({
  message,
  onDismiss,
  retry,
  retryFn,
  primary,
  danger,
  info,
  success,
  }) => {
    const [userDismissed, setDismissed] = useState(false);

    const getBgColor = () => {
      if(primary) {
        return colors.primary;
      };

      if(danger) {
        return colors.danger;
      }

      if(success) {
        return colors.success;
      }
      
      if(info) {
        return colors.secondary;
      }
    };

    return(
      <>
      {userDismissed ? null : 
        (
          <TouchableOpacity style={[styles.wrapper, {backgroundColor: getBgColor()}]}>

            <View style={{flexDirection:'row', justifyContent: 'space-between',}}>    
                <Text style={{
                    color: colors.white,
                }}>
                    {message}
                </Text>

                {retry && !typeof onDismiss === 'function' && (
                    <TouchableOpacity onPress={retryFn}>
                        <Text style={{color: colors.white,}}>
                        Retry
                        </Text>
                    </TouchableOpacity>
                )}

                {typeof onDismiss === 'function' && (
                <TouchableOpacity 
                    onPress={() => {
                    setDismissed(true);
                    onDismiss();
                    }}>
                    <Text 
                    style={{color: colors.white,}}
                    >
                        X
                    </Text>
                </TouchableOpacity>
                )}
            </View>

          </TouchableOpacity>
        )
       }  
      </>
    );
};

export default Message;