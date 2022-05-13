## Task

Implement in the programming language of your choice 一 among NodeJS, PHP, and C# 一a script to be executed from the command line.
You can use third-party libraries if you want.
The script receives as input the path to a CSV file to be imported, a column number in which to search, and a search key.

The script must be invoked in this way (example in PHP):

$ php src/search.php ./file.csv 2 Alberto

where ./file.csv is the path to a CSV file formatted in this way:
1,Rossi,Fabio,01/06/1990;
2,Gialli,Alessandro,02/07/1989;
3,Verdi,Alberto,03/08/1987;

The number 2 represents the index of the column to search in (in the previous file the name) and Alberto represents the search key.

The output of the command must be the corresponding line, in our case: 3, Verdi, Alberto,03/08/1987;

Delivery is expected in public Git repository format, on GitHub, or similar.


We'll evaluate:
the suitability of the solution to the request                                                                                                                                                                             
code quality (legibility and maintainability)                                                                                                                                                                   
Guys will have at disposal 3 days to complete and return it.

## Usage

1. Run `npm i` in root folder
2. Run `node index.js` with your search arguments


## Usage Example
1. Run `node index.js ./ex.csv 1 rossi`
