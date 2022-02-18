// https://www.hackerrank.com/challenges/acm-icpc-team/problem

function acmTeam(attendees) {
  // returns 1-indexed obj mapping from attendees
  // to array of other attendees for which combinations
  // should be computed
  // prevents computing more than once
  const validAttendeeCombos = (() => {
    const dict = {};
    const { length } = attendees;
    for (let attendee = 1; attendee < length; attendee++) {
      dict[attendee] = [];
      for (
        let otherAttendee = attendee + 1;
        otherAttendee <= length;
        otherAttendee++
      ) {
        dict[attendee].push(otherAttendee);
      }
    }
    return dict;
  })();

  // should we compute combination
  const isValidCombo = (attendee, otherAttendee) => {
    const isAttendeeValid = validAttendeeCombos[attendee];
    if (!isAttendeeValid) return false;

    if (!otherAttendee) return true;

    return validAttendeeCombos[attendee].some(
      person => person === otherAttendee
    );
  };

  const hasKnowledge = topic => topic == 1;

  const returnTotal = coll => coll.reduce((total, num) => total + num, 0);

  let mostTopicsKnownColl = [0];

  for (let [i, attendee] of attendees.entries()) {
    // validAttedeeCombos is 1-indexed
    const attendeeIdx = i + 1;
    if (!isValidCombo(attendeeIdx)) break;

    // best score combo between this attendee and all others
    let bestComboForThisAttendee = [];

    for (let [j, otherAttendee] of attendees.entries()) {
      // validAttedeeCombos is 1-indexed
      const otherAttendeeIdx = j + 1;
      if (!isValidCombo(attendeeIdx, otherAttendeeIdx)) continue;

      // if we have all 1's, we don't need new combos
      const isBestPossibleCombo =
        bestComboForThisAttendee.length === attendee.length &&
        bestComboForThisAttendee.every(hasKnowledge);
      if (isBestPossibleCombo) break;

      // build best combo for this particular attendee/otherAttendee
      let combo = [];
      for (const [topicIdx, topic] of [...attendee].entries()) {
        if (hasKnowledge(topic)) {
          combo.push(1);
          continue;
        }

        if (hasKnowledge(otherAttendee[topicIdx])) {
          combo.push(1);
          continue;
        }

        combo.push(0);
      }

      // compare this to the best combo attendee has so far
      const topicsKnown = returnTotal(combo);
      const attendeeMostTopicsKnown = returnTotal(bestComboForThisAttendee);
      const isNewBest = topicsKnown > attendeeMostTopicsKnown;
      if (isNewBest) bestComboForThisAttendee = combo;
    }

    // compare this attendee's best versus the all-time best
    const attendeeMostTopicsKnown = returnTotal(bestComboForThisAttendee);
    const [mostTopicsKnown] = mostTopicsKnownColl;
    const isMatchingMostKnownTopics =
      attendeeMostTopicsKnown === mostTopicsKnown;
    if (isMatchingMostKnownTopics) {
      mostTopicsKnownColl.push(attendeeMostTopicsKnown);
      continue;
    }

    const isNewMax = attendeeMostTopicsKnown > mostTopicsKnown;
    if (isNewMax) mostTopicsKnownColl = [attendeeMostTopicsKnown];
  }

  const [mostTopicsKnown] = mostTopicsKnownColl;
  const totalTeamsWithMostTopicsKnown = mostTopicsKnownColl.length;

  return [mostTopicsKnown, totalTeamsWithMostTopicsKnown];
}
