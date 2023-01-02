export const greetingByHour = () => {
  const current_hour = new Date().getHours();
  if (current_hour >= 5 && current_hour < 12) {
    return "בוקר טוב";
  } else if (current_hour >= 12 && current_hour < 18) {
    return "צהריים טובים";
  } else if (current_hour >= 18 && current_hour < 22) {
    return "ערב טוב";
  } else {
    return "לילה טוב";
  }
};
