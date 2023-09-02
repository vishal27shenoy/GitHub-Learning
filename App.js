import { Pressable, StyleSheet, Text, View, Alert } from 'react-native'
import React, { useEffect } from 'react'
import notifee, { EventType } from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
const App = () => {
  useEffect(() => {
    getDeviceToken();
  }, []);
  const getDeviceToken = async () => {
    let token = await messaging().getToken();
    // console.log(token);
  };
  useEffect(() => {
    handleNotification();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      const data = remoteMessage.notification;
      Alert.alert(data.body, data.title);
    });
  });
  const handleNotification = async () => {
    await notifee.createChannelGroup({
      id: 'YOUTUBE',
      name: 'YOUTUBE NOTIFICATION',
    });
    await notifee.createChannel({
      id: 'COMMENTS',
      name: 'COMMENTS',
      groupId: 'YOUTUBE',
    });
    await notifee.createChannel({
      id: 'SUBSCRIBE',
      name: 'SUBSCRIBE',
      groupId: 'YOUTUBE',
    });
  };
  async function SUBSCRIBE() {
    const notificationIde = await notifee.displayNotification({
      id: 'any',
      title: 'FROM SUBSCRIBE',
      body: 'Changed',
      android: {
        channelId: 'SUBSCRIBE',
        smallIcon: 'ic_stat_social_notifications',
      },
    });
  }
  async function COMMENTS() {
    const notificationIde = await notifee.displayNotification({
      id: 'any',
      title: 'FROM COMMENTS',
      body: 'Changed',
      android: {
        smallIcon: '',
        channelId: 'COMMENTS',
        smallIcon: 'ic_stat_social_notifications',
      },
    });
  }
  return (
    <View
      style={{ justifyContent: 'center', alignItems: 'center', height: '100%', gap: 50 }}>
      <Pressable onPress={() => SUBSCRIBE()}>
        <Text>BEFORE REVERT ING vbhfjdbvjrhdbv jhrdsfbj vishal</Text>
      </Pressable>
      <Pressable onPress={() => COMMENTS()}>
        <Text>COMMENTS</Text>
      </Pressable>
    </View>
  );
}

export default App

const styles = StyleSheet.create({});
// FCM KEY
//diIn5-EpRKOY3LQbSOclZO:APA91bGQUo_UxPQF4h1nMohaDI9z9OlfFk5MxHANkbMSvm5zRze-iB6RkAvnzqcYpF5TFPqTmD3YMGoJeNyTb7NbeOSmOZYjVTJFAcZkR1BnfU04IurulbD0tXhUcn6WQVvAua-ErXfg
// SERVER KEY
//AAAA6Nvdcog:APA91bEE0IkvTuSlDgaKoxzpbTIdjpNktWtGNKWZoGq1Il6nZbgydPOWpqth7KapKJHTsshDewLNoCOoj1YniQgOwoC1Jqb0HPEruxoibiJPz1hVYR7sB_Ph8WSx1XJifEKxwGmQNJM0


    // const channelId = await notifee.createChannel({
    //   id: 'default',
    //   name: 'Default Channel',
    // });
    // await notifee.requestPermission();

    // const notificationId = await notifee.displayNotification({
    //   id: '123',
    //   title: 'Notifeee by vishal',
    //   body: 'Changed',
    //   android: {
    //     channelId,
    //   },
    // });


    // const getDeviceToken = async() => {
  //   let token = await messaging().getToken();
  //   console.log(token);
  // }
  // useEffect(() => {
  //   handleNotification();
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     const data = remoteMessage.notification;
  //     Alert.alert(data.body,data.title);
  //   });
  //   return unsubscribe;
  // }, []);
  // const handleNotification = async() => {
  //   await notifee.createChannelGroup({
  //     id: 'YOUTUBE',
  //     name: 'YOUTUBE NOTIFICATION',
  //   });
  //   await notifee.createChannel({
  //     id: 'COMMENTS',
  //     name: 'COMMENTS',
  //     groupId: 'YOUTUBE',
  //   });
  //    await notifee.createChannel({
  //      id: 'SUBSCRIBE',
  //      name: 'SUBSCRIBE',
  //      groupId: 'YOUTUBE',
  //    });
  // }


  // async function SUBSCRIBE() {
  //   const notificationIde = await notifee.displayNotification({
  //     id: 'any',
  //     title: 'FROM SUBSCRIBE',
  //     body: 'Changed',
  //     android: {
  //       channelId: 'SUBSCRIBE',
  //     },
  //   });
  // }
  // async function COMMENTS() {
  //   const notificationIde = await notifee.displayNotification({
  //     id: 'any',
  //     title: 'FROM COMMENTS',
  //     body: 'Changed',
  //     android: {
  //       smallIcon: '',
  //       channelId: 'COMMENTS',
  //       smallIcon: 'ic_stat_social_notifications',
  //     },
  //   });
  // }
  //testing revert
