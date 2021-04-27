export default function Mock(app) {
  const data = [150, 230, 224, 218, 135, 147, 260]

  setInterval(() => {
    data.shift()
    data.push(100 + Math.floor(Math.random() * 150))
  }, 3000)

  app.get('/mock/data', (req, res) => {
    res.json(data)
  })
}
