<template>
  <div class="articles">
    <h2>VuexFire</h2>
    <q-input v-model="newArticle.title" label="Article Title" />

    <span>Content</span>
    <q-editor v-model="newArticle.content" min-height="5rem" />
    <q-btn
      color="primary"
      @click="handleArticleCreation"
      label="Create Article"
    />
    <!-- @click="$store.dispatch('addArticle', newArticle)" -->

    <q-btn
      color="primary"
      @click="handleArticleUpdate"
      label="Update Article"
    />
    <hr />
    <h3>Articles</h3>
    <ul>
      <li v-for="(article, index) in articles" :key="index">
        <h4 class="q-mb-md" v-text="article.title" />
        <div v-html="article.content"></div>

        <div class="q-mt-xl">
          <q-btn color="negative" @click="editArticle(article)" label="Edit" />
          <q-btn
            color="negative"
            @click="$store.dispatch('deleteArticle', article.id)"
            label="Delete"
          />
        </div>

        <hr class="q-my-lg" />
      </li>
    </ul>
  </div>
</template>

<script>
import { newArticle } from "../data/index.js";

export default {
  data: () => ({
    newArticle: { ...newArticle }
  }),

  computed: {
    articles() {
      return this.$store.state.articles;
    }
  },

  methods: {
    editArticle(article) {
      const { id } = article;
      this.newArticle = { id, ...article };
    },

    async handleArticleCreation() {
      await this.$store.dispatch("addArticle", this.newArticle);
      this.newArticle = { ...newArticle };
      alert("New Article Created!");
    },

    async handleArticleUpdate() {
      await this.$store.dispatch("updateArticle", this.newArticle);
      this.newArticle = { ...newArticle };
      alert("Update from handleArticleUpdate");
    }
  }
};
</script>
