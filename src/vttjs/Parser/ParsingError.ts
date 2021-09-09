// Creates a new ParserError object from an errorData object. The errorData
// object should have default code and message properties. The default message
// property can be overriden by passing in a message parameter.


interface IParsingErrorProps {
  name: string,
  code: number,
  message: string,
}

// See ParsingError.Errors below for acceptable errors.
function ParsingError(
  this:IParsingErrorProps,
  errorData:{code: number, message: string },
  message?: string
) {
  this.name = "ParsingError";
  this.code = errorData.code;
  this.message = message || errorData.message;
}

ParsingError.prototype = Object.create(Error.prototype);
ParsingError.prototype.constructor = ParsingError;

// ParsingError metadata for acceptable ParsingErrors.
ParsingError.Errors = {
  BadSignature: {
    code: 0,
    message: "Malformed WebVTT signature."
  },
  BadTimeStamp: {
    code: 1,
    message: "Malformed time stamp."
  }
};

export default ParsingError;
