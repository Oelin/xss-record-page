async function record(seconds, fps=10, el=document.body) {

  let frames = []
  let script = document.createElement('script')
  let sleep = ms => new Promise(r => setTimeout(r, ms))
  
  script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js'
  document.body.appendChild(script)  
  await sleep(1000)
  
  let end = Date.now() + seconds * 1000
  
  while (Date.now() < end) {
    html2canvas(el).then(canvas => frames.push(canvas))
    await sleep(1000 / fps)
  }
  
  return frames
}
