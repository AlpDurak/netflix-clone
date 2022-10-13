
# Netflix Clone made by Alp Durak

This project was made purely because of boredom but seemed to turn out not bad, if you want to contribute or just use the clone this guide will help you understand it.

[Go To Online Demo](https://netflix-clone-alpdurak.vercel.app/browse)

## How to use

> install required packages
```
yarn install
```

> start the development server
```
yarn dev
```
(all scripts are next.js scripts you can learn about them in their documentation)

## Learn about the Components

> ViewCard
```javascript
<Slider id="<a unique ID>">
    ...
</Slider>
```
```javascript
<div className={styles.showWrap}>
    <h1 style={{ marginLeft: "55px" }}>Trending Now</h1>
    <Slider id="1" className={styles.showList}>
        ...
    </Slider>
</div>
```

> ViewCard
```javascript
<ViewCard src={"<thumbnail of the show>"} />
```
```javascript
// 50% of the show is watched
<ViewCard watched={50} src={"<16:9 thumbnail of the show>"} />
```

> RankCard
```javascript
// Top 3
<RankCard rating={3} src={"<9:16 thumbnaik of the show>"} />
```

That's it you're all set :)
