<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/"><span class="text-primary">easy</span>trademarks</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">{{ $t("home") }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">{{ $t("services") }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">{{ $t("about") }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">{{ $t("resource_center") }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">{{ $t("contact") }}</router-link>
                    </li>
                </ul>
                <div class="lang">
          <div class="dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <flag
                :iso="langFlagStorage"
                v-bind:squared="false"
                class="mx-2"
              />
              <!-- {{langStorage == null ? $t("arabic") : $t(langStorage)}} -->
            </button>
            <ul
              class="dropdown-menu"
              :style="
                $root.$i18n.locale === 'ar'
                  ? 'left: 0 !important;'
                  : 'right: 0 !important;'
              "
            >
              <li
                v-for="(language, index) in languages"
                :key="index"
                @click="changeLocale(language.language, language.flag)"
              >
                <span class="dropdown-item">
                  <flag
                    :iso="language.flag"
                    v-bind:squared="false"
                    class="mx-2"
                  />
                  {{ language.title }}
                </span>
              </li>
            </ul>
          </div>
        </div>
                <router-link to="/" class="btn PrimaryButton">{{ $t("login") }}</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
        languages: [
            { flag: "us", language: "en", title: this.$i18n.t("english") },
            { flag: "sa", language: "ar", title: this.$i18n.t("arabic") },
        ],
        langFlagStorage:
        localStorage.getItem("flagLang") == null
          ? "us"
          : localStorage.getItem("flagLang"),
        langStorage: localStorage.getItem("lang"),
    };
  },
  methods: {
    changeLocale(locale, flag) {
      this.$i18n.locale = locale;
      const html = document.documentElement; // returns the html tag
      html.setAttribute("lang", locale);
      // this.$forceUpdate('lang',locale);
      localStorage.setItem("lang", locale);
      localStorage.setItem("flagLang", flag);
      // console.log(locale);
    },
  },
  created() {
    const html = document.documentElement; // returns the html tag
    html.setAttribute("lang", this.$i18n.locale);
  }
}
</script>

<style></style>