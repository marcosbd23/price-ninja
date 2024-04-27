
# Price Ninja

Price Ninja is a project aimed at creating a web page that extracts product information from various popular websites, such as PcComponentes or Última Informática. Its primary goal is to provide users with an intuitive interface to visualize price changes for each product over time. Additionally, it will offer a detailed price history, including the option to display prices with IGIC instead of IVA for users.


## Installation

**1. Clone the repository**

```bash
git clone https://github.com/marcosbd23/price-ninja.git
```

**2. Setup Database**

- Run `data/price-ninjadb.sql` to setup the database with some initial data

**3. Configure environment files**
- Rename `.env.example` files to `.env` on the `backend` and `frontend` folders
- Configure each file with the proper data needed

**4. Install dependencies**

- Install backend dependencies and start app
```bash
cd backend
npm install
npm run dev
```

- Install frontend dependencies and start app
```bash
cd frontend
npm install
npm run dev
```

**5. Scrape new products (OPTIONAL)**

> [!WARNING]  
> The API has a rate limit, so when creating products with the scraped information, it may be blocked. Disable it if you intend to add many products
- If u want to scrape new products you can use the script on the backend folder with
```bash
npm run scraper
```
## API documentation

[Documentation](https://documenter.getpostman.com/view/16447291/2sA3BuUo5S)
## Demo

[![Image from Gyazo](https://i.gyazo.com/7e72d9142aa4cab2625b04a7f63b66d8.gif)](https://gyazo.com/7e72d9142aa4cab2625b04a7f63b66d8)
## Tech Stack

**Client:** NextJS, TailwindCSS

**Server:** Node, Express


## Lessons Learned

I've learned the basics of NextJS, such as folder structure, dynamic routing, and how server-side components work, along with fetching from the server. On the backend side, I've gained a lot of knowledge about REST API best practices, including implementing caching, rate limiting, paginated responses, and filtering

Something I'm aware I've fallen short on is managing repository branches effectively, as well as handling project issues. I could have organized these aspects better to enhance team workflow. Additionally, I would have liked to delve deeper into GitHub Actions for implementing CI/CD, which is something I'll consider for future projects.
## Authors

- [@marcosbd23](https://www.github.com/marcosbd23) REST API, Scraper, implementation product search
- [@adexe03](https://www.github.com/adexe03) Page design, components
