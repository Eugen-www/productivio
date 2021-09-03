class Validator {
  isFull(input) {
    return input.value > 0;
  }
  isEmail(input) {
    if (input.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      return true;
    }
    return false;
	}
	
}
