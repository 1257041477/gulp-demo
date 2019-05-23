var gulp = require("gulp");//引入gulp
var htmlmin=require("gulp-htmlmin");//压缩html
var cssmin=require("gulp-clean-css");//压缩css
var imagemin=require("gulp-imagemin");//压缩图片
// var del = require('del');//删除文件
var concat=require("gulp-concat");//合并文件
var sass=require("gulp-sass");//编译sass
var rename=require("gulp-rename");//文件重命名
var uglify=require("gulp-uglify");//压缩js
var base64=require("gulp-base64");//图片转码
gulp.task("default",function(){
	gulp.src("./src/**/*")
	.pipe(gulp.dest("./dist"));
});
gulp.task("html",function(){
	gulp.src("./src/html/**/*")
	.pipe(base64())
	// .pipe(htmlmin({collapseWhitespace:true}))
	.pipe(gulp.dest("./dist/html"));
});
gulp.task("css",function(){
	gulp.src(["./src/css/cake.css",
	"./src/css/carts.css",
	"./src/css/dateSelect.css",
	"./src/css/detail.css",
	"./src/css/flower.css",
	"./src/css/fover.css",
	"./src/css/index.css",
	"./src/css/login.css",
	"./src/css/lvzhi.css",
	"./src/css/myOrder.css",
	"./src/css/openflower.css",
	"./src/css/orderList.css",
	"./src/css/regis.css"])
	.pipe(cssmin())
	.pipe(base64())
	.pipe(concat("all.css"))
	
	.pipe(gulp.dest("./dist/css"));
});
gulp.task("scss",function(){
	gulp.src("./src/sass/*.scss")
	.pipe(concat("all.scss"))
	.pipe(sass())
	.pipe(rename("all-scss.css"))
	.pipe(cssmin())
	.pipe(gulp.dest("./dist/css"));
});
gulp.task("javaScript",function(){
	gulp.src(["./src/js/jquery.js","./src/js/carts.js"])
	.pipe(concat("all.js"))
	.pipe(uglify())
	.pipe(gulp.dest("./dist/js"));
});
gulp.task("image",function(){
	gulp.src("./src/img/**/*")
	.pipe(imagemin())
	.pipe(gulp.dest("./dist/img"));
});
gulp.task("image",function(){
	gulp.src("./src/img/**/*")
	.pipe(imagemin())
	.pipe(gulp.dest("./dist/img"));
});