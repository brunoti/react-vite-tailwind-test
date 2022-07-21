import { watch } from 'chokidar'

watch('./src/**/*').on('addDir', (event, path) => {
	console.log('event', event)
})
