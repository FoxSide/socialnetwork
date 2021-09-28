import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 10 },
      { id: 2, message: 'It\'s my first post', likesCount: 15 }
    ],
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
  },
}


export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0 
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export default state