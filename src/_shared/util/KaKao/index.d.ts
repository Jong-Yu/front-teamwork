declare global {
  interface Window {
    Kakao: any;
  }
}

// Kakao SDK가 Typescritp 로 정의되어 있지 않아서. 추론이 불가능하기 때문에
// SDK 의 함수들을 정의해 놓은 것이다.
// Kakao의 타입을 any 로 해놓았기 때문에 사용은 가능하지만. 추론은 불가능 하다는 점을 인식하고 사용해야 한다.
// interface Kakao {
//   API: {
//     cleanup: cleanup$8();
//     request: request$5(settings);
//   };
//   Auth: {
//     authorize: authorize(settings);
//     autoLogin: autoLogin(settings); ;
//     cleanup: cleanup$6();
//     createLoginButton: createLoginButton(settings);
//     createShippingAddress: createShippingAddress(settings);
//     getAccessToken: getAccessToken();
//     getAppKey: getAppKey();
//     getRefreshToken: getRefreshToken();
//     getStatusInfo: getStatusInfo(callback);
//     issueAccessToken: issueAccessToken(settings);
//     login: login(settings);
//     loginForm: loginForm(settings);
//     logout: logout();
//     selectShippingAddress: selectShippingAddress(settings);
//     setAccessToken: setAccessToken(token);
//     setRefreshToken: setRefreshToken(token);
//     updateShippingAddress: updateShippingAddress(settings);
//   };
//   Channel: {
//     addChannel: addChannel(settings);
//     chat: chat(settings);
//     cleanup: cleanup$4();
//     createAddChannelButton: createAddChannelButton(settings);
//     createChatButton: createChatButton(settings);
//   };
//   Link: { // MEMO : Link는 1.42.0 or lower 를 사용하시는 경우에만 사용 가능합니다. ( legacy )
//     cleanup: cleanup$5();
//     createCustomButton: createCustomButton(settings); ;
//     createDefaultButton: createDefaultButton(settings);
//     createScrapButton: createScrapButton(settings);
//     deleteImage: deleteImage(settings);
//     scrapImage: scrapImage(settings);
//     sendCustom: sendCustom(settings);
//     sendDefault: sendDefault(settings);
//     sendScrap: sendScrap(settings);
//     uploadImage: uploadImage(settings);
//   };
//   Navi: {
//     cleanup: cleanup();
//     share: share(settings);
//     start: start(settings);
//   };
//   Picker: {
//     cleanup: cleanup$1();
//     select: select(settings);
//     selectChat: selectChat(settings);
//     selectFriend: selectFriend(settings);
//     selectFriends: selectFriends(settings);
//   };
//   PlusFriend: {
//     addFriend: addFriend(settings);
//     chat: chat(settings);
//     cleanup: cleanup$3();
//     createAddFriendButton: createAddFriendButton(settings);
//     createChatButton: createChatButton(settings);
//   };
//   Share: {
//     cleanup: cleanup$5();
//     createCustomButton: createCustomButton(settings);
//     createDefaultButton: createDefaultButton(settings);
//     createScrapButton: createScrapButton(settings);
//     deleteImage: deleteImage(settings);
//     scrapImage: scrapImage(settings);
//     sendCustom: sendCustom(settings);
//     sendDefault: sendDefault(settings);
//     sendScrap: sendScrap(settings);
//     uploadImage: uploadImage(settings);
//   };
//   Story: {
//     cleanup: cleanup$2();
//     createFollowButton: createFollowButton(settings);
//     createShareButton: createShareButton(settings);
//     open: open(settings);
//     share: share(settings);
//   };
//   VERSION: string;
//   cleanup: cleanup(); ;
//   init: init(appKey);
//   isInitialized: isInitialized();
// }
