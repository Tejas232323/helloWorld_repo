import axios from 'axios';
import cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';

async function downloadImages() {
  console.log('Downloading images...');

  const options = {
    method: 'GET',
    url: 'https://zillow56.p.rapidapi.com/search_url',
    params: {
      url: 'https://www.zillow.com/homes/for_sale/2_p/?searchQueryState=%7B%22pagination%22%3A%7B%22currentPage%22%3A2%7D%2C%22mapBounds%22%3A%7B%22west%22%3A-112.39143704189931%2C%22east%22%3A-110.78468655361806%2C%22south%22%3A32.79032628812945%2C%22north%22%3A33.7227901388417%7D%2C%22isMapVisible%22%3Atrue%2C%22filterState%22%3A%7B%22con%22%3A%7B%22value%22%3Afalse%7D%2C%22apa%22%3A%7B%22value%22%3Afalse%7D%2C%22mf%22%3A%7B%22value%22%3Afalse%7D%2C%22ah%22%3A%7B%22value%22%3Atrue%7D%2C%22sort%22%3A%7B%22value%22%3A%22globalrelevanceex%22%7D%2C%22land%22%3A%7B%22value%22%3Afalse%7D%2C%22manu%22%3A%7B%22value%22%3Afalse%7D%2C%22apco%22%3A%7B%22value%22%3Afalse%7D%7D%2C%22isListVisible%22%3Atrue%7D',
      page: '3'
    },
    headers: {
      'X-RapidAPI-Key': 'cbfde87e86msh83ff215cfb2fd27p1cdc32jsn5ef3d31c9096',
      'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const html = response.data;

    const $ = cheerio.load(html);

    // Extract image URLs
    const imageUrls: string[] = [];
    $('img').each((index, element) => {
      const src = $(element).attr('src');
      if (src !== undefined) {
        imageUrls.push(src);
      }
    });
    console.log('Image URLs:', imageUrls);
    // Download images
    const downloadDirectory = './downloads';
    if (!fs.existsSync(downloadDirectory)) {
      fs.mkdirSync(downloadDirectory);
    }

    for (let index = 0; index < imageUrls.length; index++) {
      const imageUrl = imageUrls[index];
      try {
        const imageResponse = await axios.get(imageUrl, { responseType: 'stream' });
        const filePath = path.join(downloadDirectory, `image_${index}.jpg`);
        const imageFile = fs.createWriteStream(filePath);
        imageResponse.data.pipe(imageFile);
        console.log(`Image ${index + 1} downloaded successfully`);
      } catch (error) {
        console.error(`Error downloading image ${index + 1}:`, error);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
downloadImages();
