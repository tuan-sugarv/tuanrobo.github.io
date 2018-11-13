var gulp = require('gulp'),
    sass = require('gulp-sass'),
    bourbon = require('node-bourbon'),
    pug = require('gulp-pug'),
    watch = require('gulp-watch');

gulp.task('html',function() {
    return gulp.src('pug/*.pug')
    .pipe(pug({
       doctype: 'html',
       pretty: true
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('sass', function () {
    return gulp.src(['sass/*.scss'])        
        .pipe(sass({includePaths: require('node-bourbon').includePaths}).on('error', sass.logError))        
        .pipe(gulp.dest('css'))        
});


gulp.task('watch', function () {
    gulp.watch(['pug/*.pug'], ['html']);
    gulp.watch(['sass/*.scss'], ['sass']);
});

gulp.task('compile', ['html', 'sass']);
gulp.task('default', ['watch']);