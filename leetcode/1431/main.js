const kidsWithCandies = (candies, extraCandies) => {
    let max = 0
    for (const candie of candies) {
      max = Math.max(max, candie)
    }
    for (let i = 0; i < candies.length; i++) {
      candies[i] = candies[i] + extraCandies >= max
    }
    return candies
  };
  