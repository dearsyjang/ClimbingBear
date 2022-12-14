import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';
import CalendarSearchBar from './SearchBar';
import {
  TextLight,
  TextMedium,
  TextBold,
  TextExtraBold,
} from '../../components/common/TextFont';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SearchRegisterModal = ({
  isModalVisible,
  setIsModalVisible,
  selected,
  bookedDate,
  getSchedule,
  handleToast,
  setIsToast,
  setToastMsg,
  setModifyState,
}) => {
  const [enteredMountain, setEnteredMountain] = useState({});
  //검색창에서 받아온 일정
  const [addSchedule, setAddSchedule] = useState({});
  const getEnteredMountain = obj => {
    setEnteredMountain(obj);
  };
  useEffect(() => {
    setAddSchedule({
      mountainName: enteredMountain.mountainName,
      date: selected,
      mntnSeq: enteredMountain.mntnSeq,
    });
  }, [enteredMountain, selected]);

  return (
    <Modal
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(!isModalVisible)}
      transparent={true}>
      <Pressable
        style={styles.modalOverlay}
        onPress={() => {
          setIsModalVisible(!isModalVisible);
        }}></Pressable>
      <View style={styles.Modal}>
        <View style={styles.flexrow}>
          <TextExtraBold style={styles.text}>등산 일정 등록</TextExtraBold>
        </View>
        <CalendarSearchBar getEnteredMountain={getEnteredMountain} />
        <View style={styles.flexrow}>
          <TouchableOpacity
            style={styles.modalbottom}
            onPress={() => {
              handleToast('Register');
              getSchedule(selected, addSchedule);
              setIsModalVisible(!isModalVisible);
            }}>
            <View style={styles.button}>
              <TextBold style={styles.buttontext}>등록하기</TextBold>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SearchRegisterModal;
const styles = StyleSheet.create({
  Modal: {
    position: 'absolute',
    marginVertical: windowHeight * 0.3,
    marginHorizontal: windowWidth * 0.1,
    width: windowWidth * 0.8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#9ECD96',
    borderRadius: 10,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  text: {
    fontSize: 24,
    padding: 20,
    textAlign: 'center',
  },
  flexrow: {
    flexDirection: 'row',
  },
  modalbottom: {
    padding: 0,
    marginTop: windowHeight * 0.05,
  },
  button: {
    backgroundColor: '#91C788',
    width: windowWidth * 0.3,
    height: windowHeight * 0.05,
    marginBottom: windowHeight * 0.01,
    borderRadius: 4,
  },
  buttontext: {
    color: 'white',
    textAlign: 'center',
    marginTop: windowHeight * 0.01,
    fontSize: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
});
