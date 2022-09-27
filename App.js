import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const DATA = [
  {
    id: 1,
    icon: '🏆',
    number: 22,
    title: 'What obscure thing are you talented at?',
    answerData: [
      {
        id: 1,
        img: require('./src/assets/images/2.png'),
        text: 'I am excellent at cooking and painting, my paintings are  hung in the gallery.',
      },
      {
        id: 2,
        img: require('./src/assets/images/1.png'),
        text: 'I am excellent at cooking and painting.',
      },
    ],
  },
  {
    id: 2,
    icon: '👩‍❤️‍👨',
    number: 21,
    title: 'What obscure thing are you talented at?',
    answerData: [
      {
        id: 1,
        img: require('./src/assets/images/2.png'),
        text: 'I am excellent at cooking and painting, my paintings are  hung in the gallery.',
      },
      {
        id: 2,
        img: require('./src/assets/images/1.png'),
        text: 'I am excellent at cooking and painting.',
      },
    ],
  },
  {
    id: 3,
    icon: '💓',
    number: 20,
    title: 'What obscure thing are you talented at?',
    answerData: [
      {
        id: 1,
        img: require('./src/assets/images/2.png'),
        text: 'I am excellent at cooking and painting, my paintings are  hung in the gallery.',
      },
      {
        id: 2,
        img: require('./src/assets/images/1.png'),
        text: 'I am excellent at cooking and painting.',
      },
    ],
  },
];
const App = () => {
  const [activeAnswerId, setActiveAnswerId] = useState(1);
  const answerClick = id => {
    if (id === activeAnswerId) {
      setActiveAnswerId(null);
    } else {
      setActiveAnswerId(id);
    }
  };
  const renderItem = ({item}) => (
    <View>
      <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.trophy}>{item.icon}</Text>
          <Text style={styles.numberText}>#{item.number}</Text>
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.headingText}>{item.title}</Text>
        </View>
        <View style={styles.rightConatiner}></View>
      </View>
      {item.id === activeAnswerId ? (
        <LinearGradient
          colors={['#FFECFF', '#A8CBFF']}
          style={styles.linearGradient}>
          <View>
            {item.answerData.map(list => (
              <>
                <View style={styles.answerContainer}>
                  <View style={styles.answerImage}>
                    <Image source={list.img} />
                  </View>
                  <View style={styles.answerTextContainer}>
                    <Text style={styles.answerText}>{list.text}</Text>
                  </View>

                  <View style={styles.answerImage}></View>
                </View>
              </>
            ))}
            <TouchableOpacity
              onPress={() => answerClick(item.id)}
              style={styles.hideConatiner}>
              <Image
                style={styles.eyeCloseIcon}
                source={require('./src/assets/images/eye-close.jpeg')}
              />
              <Text style={styles.answerText}>hide answers</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      ) : (
        <TouchableOpacity
          style={[
            styles.hideConatiner,
            styles.linearGradient,
            styles.showConatiner,
          ]}
          onPress={() => answerClick(item.id)}>
          <Image
            style={styles.eyeCloseIcon}
            source={require('./src/assets/images/eye-open.jpg')}
          />
          <Text style={styles.answerText}>show answers</Text>
        </TouchableOpacity>
      )}
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={{width: 24, height: 20}}
          source={require('./src/assets/images/back.png')}
        />
        <Text style={styles.headingText}>Our Answers</Text>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.eyeCloseIcon}
            source={require('./src/assets/images/bell.png')}
          />
          <Image
            style={styles.eyeCloseIcon}
            source={require('./src/assets/images/2.png')}
          />
        </View>
      </View>
      <View style={styles.totalConatainer}>
        <View style={styles.totalTextView}>
          <Text style={styles.totalText}>Total: 22</Text>
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.bottomContainer}>
        <Image
          style={styles.eyeCloseIcon}
          source={require('./src/assets/images/home.png')}
        />
        <Image
          style={styles.eyeCloseIcon}
          source={require('./src/assets/images/bookmark.png')}
        />
        <Image
          style={styles.addIcon}
          source={require('./src/assets/images/add.png')}
        />
        <Image
          style={styles.eyeCloseIcon}
          source={require('./src/assets/images/search.png')}
        />
        <Image
          style={styles.eyeCloseIcon}
          source={require('./src/assets/images/user.png')}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    alignContent: 'center',
    alignItems: 'center',
  },
  totalConatainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalTextView: {
    backgroundColor: '#DFDCFF',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 40,
    textAlign: 'center',
  },
  totalText: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    color: '#564AE2',
  },
  mainContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    margin: 15,
    marginBottom: 0,
    padding: 15,
    flexDirection: 'row',
    position: 'relative',
    zIndex: 10,
  },
  leftContainer: {
    borderRightWidth: 2,
    borderRightColor: '#F8F8F8',
    flex: 3,
    marginRight: 20,
    alignItems: 'center',
  },
  rightConatiner: {
    flex: 3,
  },
  middleContainer: {
    flex: 6,
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
  trophy: {
    fontSize: 24,
  },
  numberText: {
    fontSize: 24,
    lineHeight: 40,
    color: '#564AE2',
    fontWeight: '600',
    fontFamily: 'Poppins-Bold',
  },
  linearGradient: {
    padding: 15,
    margin: 15,
    marginTop: 0,
    position: 'relative',
    top: -10,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingTop: 20,
  },
  eyeCloseIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  addIcon: {
    width: 40,
    height: 40,
  },
  hideConatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  answerContainer: {
    flexDirection: 'row',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#B7C5EB',
    marginVertical: 10,
  },
  answerTextContainer: {
    flex: 4,
  },
  answerText: {
    fontFamily: 'Poppins-Regular',
    lineHeight: 21,
    fontWeight: '400',
    color: '#201000',
  },
  answerImage: {
    flex: 1,
  },
  showConatiner: {
    backgroundColor: '#F8F8F8',
  },
});
export default App;
