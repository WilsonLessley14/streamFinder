var deriveTrending = data => {

  var candidates = [];

  for (let i = 0; i < data.length; i++) {
    // if rating property is above 'popular' threshold
    // place in candidates array
  }

  // return newest programs
  return candidates.sort((a, b) => a.date.localeCompare(b.date)).slice(0, 20);

}

module.exports = {
  deriveTrending: deriveTrending
}