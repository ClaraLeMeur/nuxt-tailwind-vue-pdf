<template>
  <div class="w-full h-screen bg-white-100 py-10 px-20 flex justify-center">
    <div class="rounded shadow px-5 bg-gray-100">
      <div class="py-2">
        <select v-model="src" style="width: 80%" class="overflow-auto max-w-md" :class="inputClass">
          <option
            v-for="item in pdfList"
            :value="item"
            v-text="item"
            :key="item"
            class="overflow-auto max-w-md"
          ></option>
        </select>
        <input
          v-model.number="page"
          type="number"
          style="width: 5em"
          :class="inputClass"
        />
        <label>&nbsp;sur&nbsp;{{ numPages ? numPages : "0" }}</label>
        <button @click="rotate += 90" :class="inputClass">&#x27F3;</button>
        <button @click="rotate -= 90" :class="inputClass">&#x27F2;</button>
        <button @click="$refs.pdf.print()" :class="inputClass">print</button>
      </div>
      <div class="flex justify-center">
        <div style="width: 60%">
          <div
            v-if="loadedRatio > 0 && loadedRatio < 1"
            style="background-color: green; color: white; text-align: center"
            :style="{ width: loadedRatio * 100 + '%' }">
            {{ Math.floor(loadedRatio * 100) }}%
          </div>
          <pdf
            v-if="show"
            ref="pdf"
            style="border: 1px solid red"
            :src="src"
            :page="page"
            :rotate="rotate"
            @password="password"
            @progress="loadedRatio = $event"
            @error="error"
            @num-pages="numPages = $event"
            @link-clicked="page = $event">
          </pdf>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pdf from "vue-pdf";

export default {
  components: {
    pdf: pdf
  },
  data() {
    return {
      show: true,
      pdfList: [
        "./assets/cv.pdf",
        "https://cdn.mozilla.net/pdfjs/tracemonkey.pdf",
        "https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/freeculture.pdf",
        "https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/annotation-link-text-popup.pdf",
        "https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/calrgb.pdf",
        "https://cdn.rawgit.com/sayanee/angularjs-pdf/68066e85/example/pdf/relativity.protected.pdf",
        ],
      src: "",
      loadedRatio: 0,
      page: 1,
      numPages: 0,
      rotate: 0
    };
  },
  computed: {
    inputClass: function() {
      return {
        "border rounded mt-1 px-2 h-10 bg-white": true
      };
    },
    textareaClass: function() {
      return {
        "border rounded w-full mt-1 px-2 bg-transparent": true
      };
    }
  },
  methods: {
    password: function(updatePassword, reason) {
      updatePassword(prompt('password is "test"'));
    },
    error: function(err) {
      console.log(err);
    }
  }
};
</script>
