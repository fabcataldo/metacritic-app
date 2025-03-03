export async function getLatestGames() {
  const LATEST_GAMES =
    "https://api.rawg.io/api/games?key=75a3c4bfe07343b8bde59a4b013e6f1e&page=1&page_size=20";

  const rawData = await fetch(LATEST_GAMES);
  const json = await rawData.json();

  const { results } = json;

  return results.map((item) => {
    const { slug, released, background_image, rating, name } = item;

    return {
      released,
      rating,
      slug,
      name,
      image: background_image,
    };
  });
}

export async function getGameDetails(slug) {
  const GAME_DETAILS = `https://api.rawg.io/api/games/${slug}?key=75a3c4bfe07343b8bde59a4b013e6f1e&page=1&page_size=20`;

  const rawData = await fetch(GAME_DETAILS);
  const json = await rawData.json();

  const data = json;

  const { released, background_image, description, name } = data;

  const reviews = getGameReviews(slug);

  return {
    released,
    score: data.rating,
    slug,
    name,
    description,
    image: background_image,
    reviews,
  };
}

export async function getGameReviews(slug) {
  const GAME_DETAILS = `https://api.rawg.io/api/games/${slug}/reviews?key=75a3c4bfe07343b8bde59a4b013e6f1e&page=1&page_size=20`;

  const rawData = await fetch(GAME_DETAILS);
  const json = await rawData.json();

  const data = json;

  const reviews = data.results.map((review) => {
    const { text, rating, created } = review;

    let username = review.user?.username;

    return { text, rating, created, username };
  });

  return reviews;
}
