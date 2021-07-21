import React from 'react';
import {View, Text, Modal} from 'react-native';
import AppModal from '../common/AppModal';
import CustomButton from '../common/CustomButton';

const ContactsComponent = ({
    modalVisible, 
    setModalVisible
}) => {
    return (
        <View>
          <AppModal 
             setModalVisible={setModalVisible} 
             modalVisible={modalVisible}
             modalFooter={<></>}
             modalBody={
              <View>
                <Text>Hello from modal</Text>
              </View>
             }
             title='My Profile'
          />

          <CustomButton
            title='Open Modal'
            secondary
            onPress={() => {setModalVisible(true)}} 
          />  
        </View>
    );
};

export default ContactsComponent;
