var gulp=require('gulp');
var sass=require('gulp-sass');
var browserSync=require('browser-sync');
var autoprefixer=require('gulp-autoprefixer');


var reload=browserSync.reload;


gulp.task('sass',function(){
	return gulp.src('app/scss/*.scss')
		.pipe(sass())
		.pipe(autoprefixer({browsers:['>5%','ie 8','ie 9']}))
		.pipe(gulp.dest('app/css'))
		.pipe(reload({stream:true}));
});


gulp.task('serve',['sass'],function(){
	browserSync({
		server:{
			baseDir:'app'
		}
	});

	gulp.watch('app/*.html').on('change',reload);
	gulp.watch('app/scss/*.scss',['sass']);
});

gulp.task('default',['serve']);