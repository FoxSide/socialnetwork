import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 10 },
      { id: 2, message: 'It\'s my first post', likesCount: 15 }
    ],
    newPostText: '',
  },
  dialogsPage: {
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you' },
      { id: 3, message: '?' },
      { id: 4, message: ';)' }
    ],
    dialogs: [
      { id: 1, name: 'FoxSide' },
      { id: 2, name: 'Nekrsova' },
      { id: 3, name: 'Ned' },
      { id: 4, name: 'Varova' }
    ],
    newMessageText: 'Hi',
  },
}


export let addMessage = () => {
  let newMessage = {
    id: 5,
    message: state.dialogsPage.newMessageText
  };
  state.dialogsPage.messages.push(newMessage);
  rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
}

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export default state