import shuffle from "shuffle-array";

/**
 * Function to make matches between 2^n teams
 * @param teams array
 */

let config = { copy: true };

export const matchMaker = teams => {
  const total = teams.length;
  //TODO: check the length of teams array,
  // it should be a 2^n number
  const shuffledTeams = shuffle(teams, config);
  const upperHalf = shuffledTeams.slice(0, total / 2);
  const lowerHalf = shuffledTeams.slice(total / 2 + 1);
  const shuffledUpperHalf = shuffle(upperHalf, config);
  const shuffledLowerHalf = shuffle(lowerHalf, config);

  //TODO: use reduce for a clear solution
  const matches = shuffledUpperHalf.map((team, index) => ({
    match: {
      home: team,
      away: shuffledLowerHalf[index]
    }
  }));
  return matches;
};
