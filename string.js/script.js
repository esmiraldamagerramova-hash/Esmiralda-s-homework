// 1
function length() {
  var username = "eessyyyaa";
  var length = username.length;
  console.log("1. length");
  console.log("Username: " + username);
  console.log("Length: " + length);
  console.log("Valid (5-15 chars): " + (length >= 5 && length <= 15));
  console.log("");
}
length();

// 2
function charAt() {
  var productCode = "A45BX";
  var category = productCode.charAt(0);
  console.log("2. charAt()");
  console.log("Product code: " + productCode);
  console.log("First character: " + category);
  console.log("");
}
charAt();

// 3
function concat() {
  var firstName = "John";
  var lastName = "Smith";
  var formatted = lastName.concat(", ", firstName);
  console.log("3. concat()");
  console.log("First name: " + firstName);
  console.log("Last name: " + lastName);
  console.log("Formatted: " + formatted);
  console.log("");
}
concat();

// 4
function bracketNotation() {
  var filePath = "C:/Users/Documents/";
  var filePath2 = "C:/Users/Documents";
  var lastChar1 = filePath[filePath.length - 1];
  var lastChar2 = filePath2[filePath2.length - 1];
  console.log("4. Bracket notation");
  console.log("Path 1: " + filePath);
  console.log("Last character: " + lastChar1);
  console.log("Path 2: " + filePath2);
  console.log("Last character: " + lastChar2);
  console.log("");
}
bracketNotation();

// 5
function slice() {
  var email = "user@example.com";
  var atIndex = email.indexOf("@");
  var domain = email.slice(atIndex + 1);
  console.log("5. indexOf() and slice()");
  console.log("Email: " + email);
  console.log("Domain: " + domain);
  console.log("");
}
slice();

// 6
function substring() {
  var logMessage = "ERROR: Disk not found";
  var errorPart = logMessage.substring(7);
  console.log("6. substring()");
  console.log("Message: " + logMessage);
  console.log("Error part: " + errorPart);
  console.log("");
}
substring();

// 7
function substr() {
  var creditCard = "4532015112830366";
  var lastFour = creditCard.substr(-4);
  console.log("7. substr()");
  console.log("Card number: " + creditCard);
  console.log("Last four: " + lastFour);
  console.log("");
}
substr();

// 8
function toUpperCase() {
  var countryCode = "us";
  var upperCode = countryCode.toUpperCase();
  console.log("8. toUpperCase()");
  console.log("Original: " + countryCode);
  console.log("Uppercase: " + upperCode);
  console.log("");
}
toUpperCase();

// 9
function toLowerCase() {
  var userInput = "JohnDoe";
  var normalized = userInput.toLowerCase();
  console.log("9. toLowerCase()");
  console.log("Original: " + userInput);
  console.log("Lowercase: " + normalized);
  console.log("");
}
toLowerCase();

// 10
function trim() {
  var formInput = "  hello world  ";
  var cleaned = formInput.trim();
  console.log("10. trim()");
  console.log("Before: '" + formInput + "'");
  console.log("After: '" + cleaned + "'");
  console.log("");
}
trim();

// 11
function trimStart() {
  var text = "   Hello World";
  var result = text.trimStart();
  console.log("11. trimStart()");
  console.log("Before: " + text);
  console.log("After: " + result);
  console.log("");
}
trimStart();

// 12
function trimEnd() {
  var userInput = "Check this!   ";
  var cleaned = userInput.trimEnd();
  console.log("12. trimEnd()");
  console.log("Before: " + userInput);
  console.log("After: " + cleaned);
  console.log("");
}
trimEnd();

// 13
function padStart() {
  var invoice = "57";
  var formatted = invoice.padStart(8, "0");
  console.log("13. padStart()");
  console.log("Invoice number: " + invoice);
  console.log("Formatted: " + formatted);
  console.log("");
}
padStart();

// 14
function padEnd() {
  var name1 = "John";
  var name2 = "Alice";
  var name3 = "Bob";
  console.log("14. padEnd()");
  console.log(name1.padEnd(20) + "Age: 30");
  console.log(name2.padEnd(20) + "Age: 25");
  console.log(name3.padEnd(20) + "Age: 28");
  console.log("");
}
padEnd();

// 15
function repeat() {
  var dash = "-";
  var line = dash.repeat(50);
  console.log("15. repeat()");
  console.log(line);
  console.log("REPORT SUMMARY");
  console.log(line);
  console.log("");
}
repeat();

// 16
function replace() {
  var title = "My Page Title";
  var slug = title.replace(/ /g, "-");
  console.log("16. replace()");
  console.log("Title: " + title);
  console.log("URL slug: " + slug);
  console.log("");
}
replace();

// 17
function split() {
  var csv = "12,5,8,130";
  var numbers = csv.split(",");
  console.log("17. split()");
  console.log("CSV string: " + csv);
  console.log("Array: " + numbers);
  console.log("First number: " + numbers[0]);
  console.log("Second number: " + numbers[1]);
  console.log("");
}
split();

// 18
function includes() {
  var logEntry = "[ERROR] Database connection failed";
  var hasError = logEntry.includes("ERROR");
  console.log("18. includes()");
  console.log("Log: " + logEntry);
  console.log("Contains ERROR: " + hasError);
  console.log("");
}
includes();

// 19
function startsWith() {
  var url1 = "https://example.com";
  var url2 = "http://example.com";
  var isSecure1 = url1.startsWith("https://");
  var isSecure2 = url2.startsWith("https://");
  console.log("19. startsWith()");
  console.log("URL 1: " + url1 + " - Secure: " + isSecure1);
  console.log("URL 2: " + url2 + " - Secure: " + isSecure2);
  console.log("");
}
startsWith();

// 20
function endsWith() {
  var file1 = "photo.jpg";
  var file2 = "image.png";
  var file3 = "document.pdf";
  var isImage1 = file1.endsWith(".jpg");
  var isImage2 = file2.endsWith(".png");
  var isImage3 = file3.endsWith(".jpg");
  console.log("20. endsWith()");
  console.log("File 1: " + file1 + " - Is image: " + isImage1);
  console.log("File 2: " + file2 + " - Is image: " + isImage2);
  console.log("File 3: " + file3 + " - Is image: " + isImage3);
  console.log("");
}
endsWith();