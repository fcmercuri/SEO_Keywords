//creating classes

class Keyword {
  constructor(
    // Defines parameters:
    name,
    searchVolume,
    category,
    position,
    impressions,
    focusTarget
  ) {
    // Define properties:
    this.name = name;
    this.searchVolume = searchVolume;
    this.category = category;
    this.currentKpis = {
      first: position,
      second: impressions,
    };
    this.focusTarget = focusTarget;
  }
  // Add methods like normal functions:
  updateTarget(status) {
    this.focusTarget = status;
  }
  newCurrentKpis(kpisFirst, kpisSecond) {
    this.currentKpis.first = kpisFirst;
    this.currentKpis.second = kpisSecond;
  }
  newCategory(level) {
    this.Category = level;
  }
}

export default Keyword;

