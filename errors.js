/**
 * Creating a new Error called BaseError that inherits from Error.
 * 
 * @class
 * @name BaseError
 * @kind class
 * @extends Error
 */
class BaseError extends Error {
  constructor (message, extra, isOperational) {
    super(message)
    Object.setPrototypeOf(this, new.target.prototype)

    this.isOperational = isOperational
    this.extra = extra
  }
}

/**
 * Creating a new Error called ConnectionError that inherits from BaseError.
 * 
 * @class
 * @name ConnectionError
 * @kind class
 * @extends BaseError
 */
class ConnectionError extends BaseError {
  constructor (message = 'connection error', extra, isOperational = false) {
    super(message, extra, false)

    // Error.captureStackTrace(this, ConnectionError)
  }
}

/**
 * Creating a new Error called CriticalError that inherits from BaseError.
 * 
 * @class
 * @name CriticalError
 * @kind class
 * @extends BaseError
 */
class CriticalError extends BaseError {
  constructor (message = 'critical error', extra, isOperational = false) {
    super(message, extra, false)

    // Error.captureStackTrace(this, CriticalError)
  }
}

/**
 * Creating a new Error called ExecutionError that inherits from BaseError.
 * 
 * @class
 * @name ExecutionError
 * @kind class
 * @extends BaseError
 */
class ExecutionError extends BaseError {
  constructor (message = 'execution error', extra, isOperational = false) {
    super(message, extra, false)

    // Error.captureStackTrace(this, ExecutionError)
  }
}

module.exports = {
  BaseError,
  ConnectionError,
  CriticalError,
  ExecutionError
}
