interface ErrorResponse{
    statusCode: number,
    error?:string,
    message:string | string[]
}

const defaultErrorResponse:ErrorResponse = {
    statusCode:500,
    error:'Error desconocido',
    message:'Ha ocurrido un error desconocido, intente nuevamente!'
}
export {ErrorResponse, defaultErrorResponse}