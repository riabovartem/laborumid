function checkAndParse(v, scope) {
  if (Array.isArray(v)) {
    return parseArray(v, scope);
  } else {
    return scope.objectProperty(v);
  }
}
