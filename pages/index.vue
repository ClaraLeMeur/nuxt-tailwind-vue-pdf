<template>
  <div class="w-full h-screen bg-white-100 py-10 px-20 flex justify-center">
    <div class="rounded shadow px-5 bg-gray-100 text-black">
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
        <button @click="rotate += 90" :class="inputClass">
          <svg xmlns='http://www.w3.org/2000/svg' class="h-5 w-5" viewBox='0 0 512 512' transform='scale(-1,1)'>
          <title>Refresh</title><path d='M320 146s24.36-12-64-12a160 160 0 10160 160' fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32'/>
          <path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M256 58l80 80-80 80'/>
          </svg>
        </button>
        <button @click="rotate -= 90" :class="inputClass">
          <svg xmlns='http://www.w3.org/2000/svg' class="h-5 w-5" viewBox='0 0 512 512'>
          <title>Refresh</title>
          <path d='M320 146s24.36-12-64-12a160 160 0 10160 160' fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32'/>
          <path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M256 58l80 80-80 80'/>
          </svg>
        </button>
        <button @click="$refs.pdf.print()" :class="inputClass">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div class="flex justify-center">
        <div style="width: 80%">
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
        "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf",
        "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
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
