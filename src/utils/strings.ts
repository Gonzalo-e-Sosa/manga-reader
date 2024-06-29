export function isContentRating(value: string) {
  return (value === "safe" || value === "suggestive" || value === "erotica");
}