export function notFound(req, res) {
  res.status(404).json({ success: false, message: "Route not found" });
}
export function errorHandler(error, req, res, next) {
  const status = error.statusCode || 500;
  if (status >= 500) console.error("Request failed:", error.message);
  res.status(status).json({
    success: false,
    message: status >= 500 ? "An unexpected error occurred." : error.message
  });
}
