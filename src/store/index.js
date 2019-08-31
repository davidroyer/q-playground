import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firestoreAction } from "vuexfire";
import { fireStoreDB } from "boot/firebase";

Vue.use(Vuex);

const Articles = fireStoreDB.collection("articles");
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default new Vuex.Store({
  state: {
    articles: []
  },

  mutations: {
    ...vuexfireMutations
  },

  actions: {
    bindArticles: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef("articles", Articles);
    }),

    deleteArticle: firestoreAction((context, articleId) => {
      Articles.doc(articleId).delete();
    }),

    addArticle: firestoreAction((context, payload) => {
      return Articles.add(payload);
    }),

    /**
     * @example payload
     * {
     *  title: 'Updated Title'
     * }
     *
     */
    updateArticle: firestoreAction(async (context, payload) => {
      const { id, ...article } = payload;
      await Articles.doc(id).set(article);
    })
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
});
