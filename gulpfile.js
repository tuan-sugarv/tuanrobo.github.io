var gulp = require('gulp'),
    // postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),    
    pug = require('gulp-pug'),
    watch = require('gulp-watch');

const postcss = require('gulp-postcss');

gulp.task('html',function() {
    return gulp.src('pug/*.pug')
    .pipe(pug({
       doctype: 'html',
       pretty: true
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('sass', function () {
    var processors = [
        autoprefixer,
        cssnano
    ];
    return gulp.src(['sass/*.scss'])    
        .pipe(sass(({outputStyle: 'expanded'})).on('error', sass.logError))        
        .pipe(postcss(processors))
        .pipe(gulp.dest('css'))
});


gulp.task('watch', function () {
    gulp.watch(['pug/*.pug'], ['html']);
    gulp.watch(['sass/*.scss'], ['sass']);
});

gulp.task('compile', ['html', 'sass']);
gulp.task('default', ['watch']);