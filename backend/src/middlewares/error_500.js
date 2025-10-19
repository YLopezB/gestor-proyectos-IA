const error_500 = (error, req, res, next) => {
    return res.status(500).json({
        status: 500,
        success: false,
        message: "Error",
        response: error
    })
}

export default error_500;