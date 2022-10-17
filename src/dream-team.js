const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let teamName = "";
  let members1 = members.filter((element) => typeof element == "string");

  if (members1.length == 0) {
    return false;
  } else {
    members1.forEach((element) => {
      teamName = teamName + String(element).trim().charAt(0).toUpperCase();
    });
    teamName = teamName.split("").sort().join("");
    return teamName;
  }
}

module.exports = {
  createDreamTeam,
};
