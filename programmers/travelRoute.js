const tickets = [
  ["ICN", "SFO"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
  ["ICN", "ATL"],
];

// function solution(tickets) {
//   let answer = [];
//   let destination = "ICN";
//   const useTicket = (departure) => {
//     let ticket = tickets
//       .filter((arr) => arr[0] === departure)
//       .sort((a, b) => {
//         return a[1] > b[1] ? 1 : -1;
//       })[0];
//     let indexOfTicket = tickets.indexOf(ticket);
//     tickets.splice(indexOfTicket, 1);
//     return ticket[1];
//   };
//   while (tickets.length) {
//     answer.push(destination);
//     destination = useTicket(destination);
//     console.log(tickets);
//   }
//   answer.push(destination);
//   return answer;
// }
function solution(tickets) {
  let answer = [];
  const dfs = (departure, tickets, path) => {
    let newPath = [...path, departure];
    if (!tickets.length) {
      answer.push(newPath);
    } else {
      tickets.forEach((ticket, idx) => {
        if (ticket[0] === departure) {
          let copiedTickets = [...tickets];
          let [[departure, arrive]] = copiedTickets.splice(idx, 1);
          dfs(arrive, copiedTickets, newPath);
        }
      });
    }
  };
  dfs("ICN", tickets, []);
  return answer.sort()[0];
}
console.log(solution(tickets));
