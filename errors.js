class BaseError extends Error {
  constructor (message, extra, isOperational) {
    super(message)
    Object.setPrototypeOf(this, new.target.prototype)

    this.isOperational = isOperational
    this.extra = extra
  }
}

class ConnectionError extends BaseError {
  constructor (message = 'connection error', extra, isOperational = false) {
    super(message, extra, false)

    // Error.captureStackTrace(this, ConnectionError)
  }
}

class CriticalError extends BaseError {
  constructor (message = 'critical error', extra, isOperational = false) {
    super(message, extra, false)

    // Error.captureStackTrace(this, CriticalError)
  }
}

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
