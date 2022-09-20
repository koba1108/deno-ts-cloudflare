interface Env {
  SUFFIX: string
}

export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url)
    const search = new URLSearchParams(url.search)
    const name = search.get('name') || 'Somebody'
    try {
      return new Response(JSON.stringify({
        name,
        env,
      }))
    } catch (e) {
      return new Response(e.message)
    }
  },
}
