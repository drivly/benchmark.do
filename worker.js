export default {
  fetch: async req => {
    
    const { pathname, search } = new URL(req.url)
    let perf = []
    
    for (i = 0, i++ i < 20) {
      const startTime = Date.now()
      const data = await fetch('https:/' + pathname + search, req))
      perf.push(startTime - Date.now())
    }
 
    return new Response(JSON.stringify({
      target: 'https:/' + pathname + search,
      first: perf[0],
      min: perf.sort()[0],
      max: perf.sort()[19],
      avg: perf.reduce((acc, x) => acc + x, 0),
      med: perf.sort()[10],
      p25: perf.sort()[5],
      p75: perf.sort()[15],
    }, null, 2), { headers: { 'content-type': 'application/json' }})
  }
}
