const error_404 = (req, res, next) => {
    return res.status(404).json({
        status: 404,
        success: false,
        message: `No se encontró la solicitud con el método ${req.method} con la ruta ${req.url} no encontrada`
    })
}

export default error_404;