//https://github.com/udacity/fend-office-hours/tree/master/Front%20End%20Tools/Gulp

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass')
    concatify = require('gulp-concat')
    webserver = require('gulp-webserver'),
    minifyhtml = require('gulp-minify-html'),
    imagemin = require('gulp-imagemin'),
    critical = require('critical').stream;

var paths = {
    scripts: ['src/js/app.js',
              'src/js/components/links.js',
              'src/js/components/experience.js'
            ],
    styles: ['src/css/**/*.scss'],
    images: ['src/img/**/*'],
    content: ['src/index.html'],
    projects: ['src/projects/**/*.html']
}

gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(concatify('app.js'))
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('./js/'));
});

gulp.task('styles', function() {
    return gulp.src(paths.styles)
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('content', function(){
    return gulp.src(paths.content)
        .pipe(minifyhtml({
            empty: true,
            quotes: true
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('projects', function(){
    return gulp.src(paths.projects)
        .pipe(minifyhtml({
            empty: true,
            quotes: true
        }))
        .pipe(gulp.dest('./projects'));
});

gulp.task('images', function() {
    return gulp.src(paths.images)
        .pipe(imagemin({
            optimizationLevel: 5
        }))
        .pipe(gulp.dest('./img'));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.content, ['content']);
    gulp.watch(paths.projects, ['projects']);
    gulp.watch(paths.images, ['images']);
});

gulp.task('webserver', ['critical'],function() {
    return gulp.src('./')
        .pipe(webserver({
            livereload: true,
            port: 9000
        }));
});

gulp.task('critical', ['content', 'scripts', 'styles', 'images', 'projects'], function() {
    return gulp.src('.src/**/*.html')
        .pipe(critical({base: './',  inline: true, minify: true}))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['watch', 'webserver']);