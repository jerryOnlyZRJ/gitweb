const gulp = require('gulp')
const pump = require('pump')
const babel = require('gulp-babel')

gulp.task('build', cb => {
	pump([
			gulp.src(['src/server/**/*.js', 'src/server/app.js']), // '**'指所有文件夹，'*'指所有文件
			babel({
				babelrc: false,
				'plugins': ['transform-es2015-modules-commonjs', "transform-decorators-legacy"]
			}),
			gulp.dest('dist')
		],
		cb
	)
})

gulp.task('watch', function() {
	gulp.watch(['src/server/**/*.js', 'src/server/app.js'], ['build']).on('change', () => {
		console.log('file is changed')
	})
})

const _task = ['build', 'watch']
gulp.task('default', _task)