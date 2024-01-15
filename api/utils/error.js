export const errorHandler = (statusCode , message ) =>
{
    const error = new Error();
    error.isfailed === false;
    error.statusCode = statusCode;
    error.message =message;
    return error
}

//it is an function created to handle errors - other than system errros -- we can give our own 
//error message ans status code --- if password length is not enough -- we can set up an error
//Javascripts error constructer function is used here
//IMportance of camel case --- and the order in which we gove functions is very important