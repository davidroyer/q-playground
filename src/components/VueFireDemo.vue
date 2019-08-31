<template>
  <div class="articles">
    <h2>VueFire</h2>
    <q-input v-model="newArticle.title" label="Article Title" />

    <span>Content</span>
    <q-editor v-model="newArticle.content" min-height="5rem" />
    <q-btn color="primary" @click="createArticle" label="Create Article" />
    <hr />
    <h3>Articles</h3>
    <ul>
      <li v-for="(article, index) in articles" :key="index">
        <h4 class="q-mb-md" v-text="article.title" />
        <div v-html="article.content"></div>
        <hr class="q-my-lg" />
      </li>
    </ul>
  </div>
</template>

<script>
import { fireStoreDB } from "boot/firebase";
import { newArticle } from "../data/index.js";

export default {
  data: () => ({
    articles: [],
    newArticle
  }),

  firestore: {
    articles: fireStoreDB.collection("articles")
  },

  computed: {},

  methods: {
    createArticle() {
      this.$firestoreRefs.articles.add(newArticle);
    },

    deleteArticle() {
      // this.$firestoreRefs.articles.add(newArticle);
    },

    updateArticle() {
      // this.$firestoreRefs.articles.add(newArticle);
    }
  }
};
</script>
