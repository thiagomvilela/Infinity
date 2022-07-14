package com.app.infinity.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "Date is in the past")
public class DateBeforeTheCurrentException extends RuntimeException {
}
