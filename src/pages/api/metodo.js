export default function (req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      method: req.method
    })
  } else {
    res.status(200).json({
      error: 'bad request',
      message: "You are trying to access this endpoint with a method other than GET",
      method: req.method
    })
  }
}