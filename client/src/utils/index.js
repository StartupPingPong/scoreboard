import _ from "lodash";
import shuffle from "shuffle-array";

let config = { copy: true };

/**
 * @param teams any number of teams
 * @returns matches
 */
export const tournamentMaker = teams => {
  return matchMaker(teams);
};

/**
 * Function to make matches between 2^n teams
 * @param {array} teams
 *
 * @return {array} matches
 */
export const matchMaker = teams => {
  const total = teams.length;

  if (!isPowerOfTwo(total)) {
    return [];
  }
  const shuffledTeams = shuffle(teams, config);

  const upperHalf = shuffledTeams.slice(0, total / 2);
  const lowerHalf = shuffledTeams.slice(total / 2 + 1);

  const shuffledUpperHalf = shuffle(upperHalf, config);
  const shuffledLowerHalf = shuffle(lowerHalf, config);

  //TODO: use reduce for a clear solution
  const matches = _.zipWith(
    shuffledUpperHalf,
    shuffledLowerHalf,
    (home, away) => {
      return {
        match: {
          home,
          away
        }
      };
    }
  );
  return matches;
};

/**
 * @param num to test of shape 2^n, n > 0
 */
export const isPowerOfTwo = num => {
  if (num <= 0 || isNaN(num)) {
    return false;
  }
  if (num % 2 === 0) {
    return num / 2 === 1 ? true : isPowerOfTwo(num / 2);
  } else {
    return false;
  }
};

export const previousPowerOfTwo = num => {
  if (num <= 0 || isNaN(num)) {
    return 0;
  }
  if (num / 2 >= 2) {
    return 2 * previousPowerOfTwo(num / 2);
  } else {
    return 2;
  }
};
