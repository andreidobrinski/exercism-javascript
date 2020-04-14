const EARTH_YEAR_IN_SECONDS = 31557600;

const ORBIT_MULTIPLIER = {
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'earth': 1.0,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132,
};

export const age = (planet, ageInSeconds) => {
  const orbitLength = ORBIT_MULTIPLIER[planet] * EARTH_YEAR_IN_SECONDS;
  return Number((ageInSeconds / orbitLength).toFixed(2));
};
