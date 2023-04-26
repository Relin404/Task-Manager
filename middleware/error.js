const handler = (err, req, res, next) => {
  return res.status(500).json({ err });
};
