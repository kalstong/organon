class BaseError extends Error {
  constructor (description, extra, isOperational) {
    super(description)
    Object.setPrototypeOf(this, new.target.prototype)

    this.isOperational = isOperational
    this.extra = extra
  }
}

class ConnectionError extends BaseError {
  constructor (description = 'connection error', extra, isOperational = false) {
    super(description, extra, false)

    // Error.captureStackTrace(this, ConnectionError)
  }
}

class CriticalError extends BaseError {
  constructor (description = 'critical error', extra, isOperational = false) {
    super(description, extra, false)

    // Error.captureStackTrace(this, CriticalError)
  }
}

class ExecutionError extends BaseError {
  constructor (description = 'execution error', extra, isOperational = false) {
    super(description, extra, false)

    // Error.captureStackTrace(this, ExecutionError)
  }
}

module.exports = {
  BaseError,
  ConnectionError,
  CriticalError,
  ExecutionError
}
