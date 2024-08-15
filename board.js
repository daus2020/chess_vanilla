// ranks are rows in chess table from 8 to 1
// Although files are columns in chess table (a to h), for readability I will use columns

// const ranks = Array(8).fill().map((_,i) => 8 - i))
// const columns = Array(8).fill().map((_, i) => String.fromCharCode(97 + i))

const ranks = [8, 7, 6, 5, 4, 3, 2, 1];
const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];

const boardCoord = ranks.flatMap((rank) =>
  columns.map((column) => rank + column)
);

console.log(boardCoord);

// Another approach but with only one array, taking advantage of array indexes
const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];

// const chessBoard = ranks.map((rank, rankIndex) => (
//   <tr key={rank}>
//     {files.map((file, fileIndex) => (
//       <td
//         key={`${rank}${file}`}
//         className={`cell ${
//           (rankIndex + fileIndex) % 2 === 0 ? "light" : "dark"
//         }`}
//       ></td>
//     ))}
//   </tr>
// ));

const startChar = "a".charCodeAt(0);
const endChar = "h".charCodeAt(0);
console.log(startChar, endChar);
const alphabetArray = Array.from({ length: endChar - startChar + 1 }, (_, i) =>
  String.fromCharCode(startChar + i)
);

console.log(alphabetArray);

// And another approach
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(typeof alphabet);
const alphabet_a_h = alphabet.slice(0, 8); // from 'a' to 'h'  or const alphabet_a_h = alphabet.slice(0, alphabet.length)
console.log(typeof alphabet_a_h);
console.log(typeof Array.from(alphabet_a_h));

console.log(alphabet);
console.log(alphabet_a_h);

console.log(alphabetArray);
console.log(alphabetArray.reverse());

const chess_table_coords = alphabet_a_h.flatMap((_, i) =>
  alphabet_a_h.map((letter) => 8 - i + letter)
);

console.log(chess_table_coords);
