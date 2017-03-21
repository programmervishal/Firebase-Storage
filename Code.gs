function doGet() {
  return HtmlService.createTemplateFromFile('page').evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

