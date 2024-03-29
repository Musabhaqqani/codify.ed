import { executeCode } from "./components/api";
export const LANGUAGE_VERSIONS = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    java: "15.0.2",
    csharp: "6.12.0",
    php: "8.2.3",
    c:"10.2.0",
    cpp : "10.2.0"
  };

  export const CODE_SNIPPETS = {
    javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
    typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
    python: `import sys\nimport ast\ndef add(a,b):\n\treturn a+b\n\nif __name__ == "__main__":\n\tn = int(sys.argv[1])\n\tfor i in range (2, n+2):\n\t\tcommandInput = ast.literal_eval(sys.argv[i])\n\t\ta = commandInput[0]\n\t\tb = commandInput[1]\n\t\tresult = commandInput[2]\n\t\tprint(add(a,b) == result)`,
    java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
    csharp:
      'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
    php: "<?php\n\n$name = 'Alex';\necho $name;\n",
    c : `#include<stdio.h>\nint main()\n{\n\tprintf("Hello world");\n\treturn 0;\n}`,
    cpp: `#include<iostream>\nusing namespace std;\nint main()\n{\n\tcout<<"Hello world";\n}`
  };


  // import sys
  // import ast
  // def add(a,b):
  //   return a+b
  
  // if __name__ == "__main__":
  //   n = int(sys.argv[1])
  //   for i in range (2, n+2):
  //     commandInput = ast.literal_eval(sys.argv[i])
  //     a = commandInput[0]
  //     b = commandInput[1]
  //     result = commandInput[2]
  //     print(add(a,b) == result)