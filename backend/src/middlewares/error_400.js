const error_400 = (error, req, res, next) => {
    if(error.status === 400) {
        return res.status(400).json({
            success: false,
            message: error,
            response: "Solicitud incorrecta"
        })
    }
    next(error)
}

export default error_400