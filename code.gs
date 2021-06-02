function wordToNumber(input) {
  var word = input;
  var output= "";
  for (var i = 0; i < word.length; i++) {
    switch(word[i]){
      case 'a':
        output = output.concat("2-");
        break;
      case 'b':
        output = output.concat("22-");
        break;
      case 'c':
        output = output.concat("222-");
        break;
      case 'd':
        output = output.concat("3-");
        break;
      case 'e':
        output = output.concat("33-");
        break;
      case 'f':
        output = output.concat("333-");
        break;
      case 'g':
        output = output.concat("4-");
        break;
      case 'h':
        output = output.concat("44-");
        break;
      case 'i':
        output = output.concat("444-");
        break;
      case 'j':
        output = output.concat("5-");
        break;
      case 'k':
        output = output.concat("55-");
        break;
      case 'l':
        output = output.concat("555-");
        break;
      case 'm':
        output = output.concat("6-");
        break;
      case 'n':
        output = output.concat("66-");
        break;
      case 'o':
        output = output.concat("666-");
        break;
      case 'p':
        output = output.concat("7-");
        break;
      case 'q':
        output = output.concat("77-");
        break;
      case 'r':
        output = output.concat("777-");
        break;
      case 's':
        output = output.concat("7777-");
        break;
      case 't':
        output = output.concat("8-");
        break;
      case 'u':
        output = output.concat("88-");
        break;
      case 'v':
        output = output.concat("888-");
        break;
      case 'w':
        output = output.concat("9-");
        break;
      case 'x':
        output = output.concat("99-");
        break;
      case 'y':
        output = output.concat("999-");
        break;
      case 'z':
        output = output.concat("9999-");
        break;
    }
 }
 output=output.slice(0,-1);
 return output;
}
