export const baseUrl = "https://image.tmdb.org/t/p/original/";

export const formatReleaseDate = (releaseDate) => {
    const date = new Date(releaseDate);
    return date.toLocaleDateString("en-US", {
      timeZone: "UTC",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };