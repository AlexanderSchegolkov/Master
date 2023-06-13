const { src, dest, series, watch } = require("gulp");
const concat = require("gulp-concat");
const htmlMin = require("gulp-htmlmin");
const sass = require("gulp-sass")(require("sass"));
const autoprefixes = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const babel = require("gulp-babel");
const webp = require("gulp-webp");
const notify = require("gulp-notify").default;
const uglify = require("gulp-uglify-es").default;
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();

// const resources = () => {
//   return src("src/resources/**").pipe(dest("dist"));
// };

const buildStyles = () => {
  return src("src/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("style.min.css"))
    .pipe(
      autoprefixes({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(dest("dist/styles"))
    .pipe(browserSync.stream());
};

const styles = () => {
  return src("src/styles/**/*.css")
    .pipe(
      autoprefixes({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(dest("dist/styles"))
    .pipe(browserSync.stream());
};

const htmlMinify = () => {
  return src("src/**/*.html")
    .pipe(
      htmlMin({
        collapseWhitespace: true,
      })
    )
    .pipe(browserSync.stream())
    .pipe(dest("dist"));
};

const scripts = () => {
  return src("src/js**/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
};

const libs = () => {
  return src(["src/libs**/*.js", "!src/libs/just-validate.min.js"])
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
};

const justValidate = () => {
  return src("src/libs/just-validate.min.js").pipe(dest("dist/libs"));
};

const imgWebp = () => {
  return src("src/img**/*.{jpg, jpeg}").pipe(webp()).pipe(dest("dist"));
};

const img = () => {
  return src(["src/img**/*.png", "src/img**/*.svg"]).pipe(dest("dist"));
};

const fonts = () => {
  return src(["src/fonts**/*"]).pipe(dest("dist"));
};

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
  });
};

watch("src/**/*.html", htmlMinify);
watch("src/sass/**/*.scss", buildStyles);
watch("src/styles/**/*.css", styles);
watch("src/js/**/*.js", scripts);

exports.buildStyles = buildStyles;
exports.styles = styles;
exports.scripts = scripts;
exports.libs = libs;
exports.justValidate = justValidate;
exports.htmlMinify = htmlMinify;
exports.imgWebp = imgWebp;
exports.img = img;
exports.fonts = fonts;

exports.default = series(
  htmlMinify,
  styles,
  buildStyles,
  imgWebp,
  img,
  libs,
  justValidate,
  scripts,
  fonts,
  watchFiles
);
