export async function fetchAndParseXML() {
  try {
    const res = await fetch('https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml');
    const text = await res.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, 'text/xml');

    const itemElements = xmlDoc.querySelectorAll('item');
    const items = Array.from(itemElements).map(itemElement => {
      const title = itemElement.querySelector('title').textContent;
      const link = itemElement.querySelector('link').textContent;
      return { title, link };
    });

    return items;
  } catch (error) {
    console.error('Error fetching or parsing XML:', error);
    return [];
  }
}
