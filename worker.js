export default {
  fetch: async req => {
    
    const { pathname, search } = new URL(req.url)
    let perf = []
    
    for (let i = 0; i <= 20; i++) {
      const startTime = Date.now()
      const data = await fetch('https:/' + pathname + search, req)
      const time = Date.now() - startTime
      perf.push(time)
    }
 
    return new Response(JSON.stringify({
      target: 'https:/' + pathname + search,
      first: perf[0],
      min: perf.sort()[20],
      max: perf.sort()[0],
      avg: (perf.reduce((acc, x) => acc + x, 0)) / 20,
      med: perf.sort()[10],
      p25: perf.sort()[15],
      p75: perf.sort()[5],
    }, null, 2), { headers: { 'content-type': 'application/json' }})
  }
}
