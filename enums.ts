const beforeLoad = 'beforeLoad'
const loading = 'loading'
const loaded = 'loaded'

const isLoading = (state: string) => state === loading

console.log(isLoading('dog'))
