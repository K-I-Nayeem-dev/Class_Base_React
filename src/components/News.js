import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {

    static defaultProps = {
        pageSize : 8,
        country : 'in',
        category : 'business',
    }

    static PropTypes = {
        category: PropTypes.string,
        pageSize : PropTypes.number,
        country : PropTypes.string,
    }


    // articles =  [
    //     {
    //     "source": {
    //     "id": "wired",
    //     "name": "Wired"
    //     },
    //     "author": "Andrew Williams",
    //     "title": "The iPhone 12 Isn't the Only Phone to Fail France's Radiation Test",
    //     "description": "Samsung, Motorola, and other phone makers have exceeded the limits that caused France to ban the iPhone 12. In fact, all phones emit radiation—should you be worried? Here’s everything you need to know.",
    //     "url": "https://www.wired.com/story/the-iphone-12-isnt-the-only-phone-to-fail-frances-radiation-test/",
    //     "urlToImage": "https://media.wired.com/photos/650e0ac70f7144c814be032e/191:100/w_1280,c_limit/The-iPhone-12-Isn't-the-Only-Phone-to-Fail-France's-Radiation-Test-Gear.jpg",
    //     "publishedAt": "2023-09-23T13:00:00Z",
    //     "content": "Last week, Apples iPhone 12 was banned by a French regulatory body. The charge? The phone emits too much radiation.\r\nIf you browse the German or UK versions of Amazon, youll find plenty of iPhone 12s… [+3130 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Android Central"
    //     },
    //     "author": "jerry.hildenbrand@futurenet.com (Jerry Hildenbrand)",
    //     "title": "Forget Apple and Samsung - the Garmin Venu 3 is the best wearable if you're in a wheelchair",
    //     "description": "Garmin's Venu 3 is the first wearable that doesn't treat people in a wheelchair as an afterthought.",
    //     "url": "https://www.androidcentral.com/wearables/garmin-venu-3-best-smartwatch-if-youre-wheelchair-bound",
    //     "urlToImage": "https://cdn.mos.cms.futurecdn.net/ZyoCdfDsYxkEMwu5CmwMSK-1200-80.jpg",
    //     "publishedAt": "2023-09-23T15:00:40Z",
    //     "content": "I never really saw a need for a smartwatch, and any novelty they had to offer quickly wore off. I found myself looking for some sort of justification for why I spent money on this thing, no matter wh… [+4536 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Android Central"
    //     },
    //     "author": "patrick.farmer@futurenet.com (Patrick Farmer)",
    //     "title": "Best phone deals of the week — historic Pixel 7 Pro discounts, Prime Day 2.0, and more",
    //     "description": "In this new weekly column, I'll be gathering five of the best phone deals that I found across the web this week.",
    //     "url": "https://www.androidcentral.com/phones/best-phone-deals-of-the-week-historic-pixel-7-pro-discounts-prime-day-20-and-more",
    //     "urlToImage": "https://cdn.mos.cms.futurecdn.net/6pGdVPTcXHQtwXsJTVTvT-1200-80.jpg",
    //     "publishedAt": "2023-09-23T14:00:39Z",
    //     "content": "(Image credit: Android Central)\r\nIn this weekly column, resident deal expert Patrick Farmer rounds up the five best phone deals of the week, from sweet trade-in opportunities to record-smashing disco… [+1237 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "business-insider",
    //     "name": "Business Insider"
    //     },
    //     "author": "Sarah Jackson",
    //     "title": "Apple customers are starting to receive their new $60 'FineWoven' iPhone cases — and the early reviews are rough",
    //     "description": "Apple users say the FineWoven iPhone cases scratch easily and already look worn despite being relatively new, and they expect better for $60.",
    //     "url": "https://www.businessinsider.com/apple-finewoven-iphone-cases-poor-reception-early-reviews-2023-9",
    //     "urlToImage": "https://i.insider.com/650e03e223ce9d001908a49d?width=1200&format=jpeg",
    //     "publishedAt": "2023-09-23T09:33:01Z",
    //     "content": "Apple customers say the company's new $60 FineWoven iPhone cases retain scratches and stains easily and look faded after even a short period of use.Apple\r\n<ul>\n<li>Apple recently announced new FineWo… [+3143 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "business-insider",
    //     "name": "Business Insider"
    //     },
    //     "author": "Haley Tenore",
    //     "title": "Apple exec Eddy Cue is such a big sports fan that he has a grid of 9 TVs at home for watching games",
    //     "description": "One of the perks of a cushy Apple compensation package is that you can afford to splurge on things — like a fancy at-home setup for watching sports.",
    //     "url": "https://www.businessinsider.com/apple-eddy-cue-sports-fan-tv-screen-grid-setup-2023-9",
    //     "urlToImage": "https://i.insider.com/650ddadae453d50019f7e103?width=1200&format=jpeg",
    //     "publishedAt": "2023-09-23T10:01:01Z",
    //     "content": "Apple exec Eddy Cue celebrating at a Golden State Warriors basketball game.Photo by Scott Strazzante/San Francisco Chronicle via Getty Images\r\n<ul>\n<li>Eddy Cue might be Apple's senior vice president… [+3106 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "business-insider",
    //     "name": "Business Insider"
    //     },
    //     "author": "Jennifer Streaks",
    //     "title": "4 steps I use to keep control of my spending when inflation makes everything more expensive",
    //     "description": "Jennifer Streaks has adjusted her budget and limits discretionary spending to combat the impact of inflation.",
    //     "url": "https://www.businessinsider.com/personal-finance/spending-tips-combat-inflation-prices-2023-9",
    //     "urlToImage": "https://i.insider.com/64f217971e6afd00196a38dd?width=1200&format=jpeg",
    //     "publishedAt": "2023-09-23T11:15:01Z",
    //     "content": "Our experts answer readers' investing questions and write unbiased product reviews (here's how we assess investing products). Paid non-client promotion: In some cases, we receive a commission from ou… [+4379 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Boing Boing"
    //     },
    //     "author": "Boing Boing's Shop",
    //     "title": "Save $109 on this refurbished Apple iPad Pro, where power meets portability",
    //     "description": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\n\n\n\nTL;DR: Get your geek on with this refurbished Apple iPad Pro and accessories bundle for only $269.99 (Reg. — Read the…",
    //     "url": "https://boingboing.net/2023/09/23/save-109-on-this-refurbished-apple-ipad-pro-where-power-meets-portability.html",
    //     "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/09/image_processing20230413-72-dtq8ur.png?fit=1200%2C800&ssl=1",
    //     "publishedAt": "2023-09-23T15:00:00Z",
    //     "content": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\r\nTL;DR: Get your geek on with this refurbished Apple iPad Pr… [+3531 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Xataka.com"
    //     },
    //     "author": "Yúbal Fernández",
    //     "title": "39 comandos básicos para dar tus primeros pasos en el Terminal de macOS",
    //     "description": "Te traemos una guía con los comandos básicos esenciales para dar tus primeros pasos en el Terminal de macOS, la consola de comandos del sistema operativo de Apple. Todos los sistemas operativos de sobremesa tienen su consola de comandos, con la que puedes rea…",
    //     "url": "https://www.xataka.com/basics/39-comandos-basicos-para-dar-tus-primeros-pasos-terminal-macos",
    //     "urlToImage": "https://i.blogs.es/61a543/terminal/840_560.jpeg",
    //     "publishedAt": "2023-09-23T10:00:52Z",
    //     "content": "Te traemos una guía con los comandos básicos esenciales para dar tus primeros pasos en el Terminal de macOS, la consola de comandos del sistema operativo de Apple. Todos los sistemas operativos de so… [+8134 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "the-washington-post",
    //     "name": "The Washington Post"
    //     },
    //     "author": "Evan Hill, Joseph Menn",
    //     "title": "Egyptian presidential hopeful targeted by Predator spyware",
    //     "description": "Researchers say the attempted hack, using a rare “zero-day” exploit, was probably conducted by the Egyptian government.",
    //     "url": "https://www.washingtonpost.com/investigations/2023/09/23/predator-egypt-hack-spyware-iphone/",
    //     "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CS6M7GCPLVDZRLADZ65SPSOD3U.JPG&w=1440",
    //     "publishedAt": "2023-09-23T17:54:42Z",
    //     "content": "Comment on this story\r\nComment\r\nA prominent Egyptian opposition politician who plans to challenge President Abdel Fatah El-Sisi in elections expected early next year was targeted with a previously un… [+7617 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "heise online"
    //     },
    //     "author": "Christine Bruns",
    //     "title": "Containerstapel und „nur“ ein 5-fach-Zoom: Die Fotonews der Woche (KW 38/2023)",
    //     "description": "Auf der Photopia stapeln sich die Container, während eine Nasa-Sonde gegen einen Sonnensturm kämpft und drei neue Kameras ganz unterschiedliche Kunden umwerben.",
    //     "url": "https://www.heise.de/news/Containerstapel-und-nur-ein-5-fach-Zoom-Die-Fotonews-der-Woche-KW-38-2023-9314384.html",
    //     "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/0/7/6/9/3/DSC_4118-d49a7716d8083137.jpg",
    //     "publishedAt": "2023-09-23T06:14:00Z",
    //     "content": "Inhaltsverzeichnis\r\nWährend wir hier unten auf der Erde sitzen und die restlichen warmen Tage des Jahres genießen, schickt die Nasa ihre Sonde Parker Solar durch die Feuertaufe und nicht durch irgend… [+7234 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "9to5Mac"
    //     },
    //     "author": "Michael Potuck",
    //     "title": "watchOS 10 widgets: How the new Apple Watch UI works",
    //     "description": "The new watchOS release comes with some big changes headlined by a new smart and customizable widget-based UI. Follow along for a closer look at how to use the Apple Watch widgets, edit them, and more in watchOS 10.\n\n\n\n more…",
    //     "url": "https://9to5mac.com/2023/09/23/use-apple-watch-widgets-watchos-10/",
    //     "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/06/use-apple-watch-widgets-watchos-10.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //     "publishedAt": "2023-09-23T18:00:00Z",
    //     "content": "The new watchOS release comes with some big changes headlined by a new smart and customizable widget-based UI. Follow along for a closer look at how to use the Apple Watch widgets, edit them, and mor… [+2405 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "9to5Mac"
    //     },
    //     "author": "Chance Miller",
    //     "title": "Apple exec touts hidden iOS 17 search engine setting during Google testimony",
    //     "description": "John Giannandrea, Apple’s senior vice president of ML and AI strategy, took the stand this week to testify in the ongoing Department of Justice antitrust suit against Google. During his testimony, Giannandrea specifically pointed to a little-known new feature…",
    //     "url": "https://9to5mac.com/2023/09/23/apple-exec-touts-hidden-ios-17-search-engine-setting-during-google-testimony/",
    //     "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/new-search-setting.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //     "publishedAt": "2023-09-23T15:05:09Z",
    //     "content": "John Giannandrea, Apple’s senior vice president of ML and AI strategy, took the stand this week to testify in the ongoing Department of Justice antitrust suit against Google. During his testimony, Gi… [+2194 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "9to5Mac"
    //     },
    //     "author": "Rikka Altland",
    //     "title": "Hands-on with Apple’s new Blue Titanium iPhone 15 Pro [Galley]",
    //     "description": "Apple officially launched the new iPhone 15 series today. Everyone in particular is ranting and raving about just how great the Natural Titanium style is – our very own Chance Miller included. Meanwhile, I am just absolutely delighted by the new Blue Titanium…",
    //     "url": "https://9to5mac.com/2023/09/22/iphone-15-pro-blue-titanium-first-impressions/",
    //     "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/iPhone-15-Pro-Blue-lead.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //     "publishedAt": "2023-09-23T00:00:27Z",
    //     "content": "Apple officially launched the new iPhone 15 series today. Everyone in particular is ranting and raving about just how great the Natural Titanium style is our very own Chance Miller included. Meanwhil… [+2682 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "9to5Mac"
    //     },
    //     "author": "Benjamin Mayo",
    //     "title": "iPhone 15 charging slowly? How to fast charge iPhone with USB-C",
    //     "description": "The charging situation for the and iPhone 15 Pro this year has changed. Apple’s proprietary Lightning port has been replaced with USB-C, so now you can charge your phone with almost any and USB-C power adapter that you can find online. But what exactly do you…",
    //     "url": "https://9to5mac.com/2023/09/23/iphone-15-charging-slowly-fast-charge-iphone-usb-c/",
    //     "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/usb-c-iphone-15.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //     "publishedAt": "2023-09-23T09:18:34Z",
    //     "content": "The charging situation for the iPhone 15 and iPhone 15 Pro this year has changed. Apple’s proprietary Lightning port has been replaced with USB-C, so now you can charge your phone with almost any USB… [+2410 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "9to5Mac"
    //     },
    //     "author": "Chance Miller",
    //     "title": "iPhone 15 Pro Max back glass cracks within seconds in new durability test [Video]",
    //     "description": "The iPhone 15 Pro and iPhone 15 Pro Max feature an all-new chassis design made out of what Apple says is grade 5 titanium. A drop test video yesterday raised early concerns about the durability of this new design, particularly as related to the new curved edg…",
    //     "url": "https://9to5mac.com/2023/09/23/iphone-15-pro-max-back-glass-cracks-video-test/",
    //     "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/iphone-15-pro-max-crack.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //     "publishedAt": "2023-09-23T15:41:04Z",
    //     "content": "The iPhone 15 Pro and iPhone 15 Pro Max feature an all-new chassis design made out of what Apple says is grade 5 titanium. A drop test video yesterday raised early concerns about the durability of th… [+2148 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "9to5Mac"
    //     },
    //     "author": "Benjamin Mayo",
    //     "title": "iPhone 15 Plus takes the crown in battery life test, beating all previous iPhone models",
    //     "description": "Following the iPhone 15 release on Friday, the first battery test results are coming in. Apple touted the efficiency of the 3nm A17 Pro chip, so anticipation was high for the iPhone 15 Pro and Pro Max to take the top spot. \n\n\n\nIndeed, the Pro Max outlasted al…",
    //     "url": "https://9to5mac.com/2023/09/23/iphone-15-battery-life-test/",
    //     "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/iphone-15-battery-life-test.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //     "publishedAt": "2023-09-23T19:12:42Z",
    //     "content": "Following the iPhone 15 release on Friday, the first battery test results are coming in. Apple touted the efficiency of the 3nm A17 Pro chip, so anticipation was high for the iPhone 15 Pro and Pro Ma… [+2054 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "9to5Mac"
    //     },
    //     "author": "Michael Potuck",
    //     "title": "How to make and use iPhone Messages stickers with iOS 17",
    //     "description": "The Messages app gets a number of valuable upgrades with iOS 17. One of the big changes is the ability to create and place stickers including emoji, custom ones, and Live Stickers anywhere in a message. Follow along for how to make and use iPhone Messages sti…",
    //     "url": "https://9to5mac.com/2023/09/23/how-to-make-use-iphone-messages-stickers-ios-17/",
    //     "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/06/how-to-use-iphone-messages-stickers-with-ios-17.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //     "publishedAt": "2023-09-23T13:35:00Z",
    //     "content": "The Messages app gets a number of valuable upgrades with iOS 17. One of the big changes is the ability to create and place stickers including emoji, custom ones, and Live Stickers anywhere in a messa… [+2878 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "9to5Mac"
    //     },
    //     "author": "Derek Wise",
    //     "title": "iPhone 15 Pro Max vs. DSLR photos: Real world camera comparison",
    //     "description": "With every generation, the iPhone sees improvements to its camera system. Whether that was the introduction of the 48 megapixel main sensor last generation or the switch to 24 megapixel HEIF images this generation. With the iPhone 15 Pro Max, on paper, the ca…",
    //     "url": "https://9to5mac.com/2023/09/23/iphone-15-pro-max-vs-dslr-photo-comparison/",
    //     "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/Featured-iPhone-15-Pro-Max-DSLR.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //     "publishedAt": "2023-09-23T15:07:07Z",
    //     "content": "With every generation, the iPhone sees improvements to its camera system. Whether that was the introduction of the 48 megapixel main sensor last generation or the switch to 24 megapixel HEIF images t… [+8194 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Android Police"
    //     },
    //     "author": "Stephen Radochia",
    //     "title": "Apple Watch Series 9 vs. Google Pixel Watch: Which is better for you?",
    //     "description": "It will largely depend on which phone you own, but there are some important differences",
    //     "url": "https://www.androidpolice.com/apple-watch-series-9-vs-google-pixel-watch/",
    //     "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/09/apple-watch-series-9.jpg",
    //     "publishedAt": "2023-09-23T14:00:26Z",
    //     "content": "<ul><li> Apple Watch Series 9 \r\nImpressive features and battery life\r\nThe Apple Watch Series 9 offers a bright new display with enhanced tracking and fitness features. It's powered by the S9 SiP, whi… [+11671 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Android Police"
    //     },
    //     "author": "Rajesh Pandey",
    //     "title": "Google Pixel 8's amazing new camera features shown off in leaked teaser video",
    //     "description": "Video boost, Magic Editor, and a pro camera mode",
    //     "url": "https://www.androidpolice.com/google-pixel-8-amazing-new-camera-features-leaked-teaser-video/",
    //     "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/09/the-w8-is-almost-over-_-made-by-google-on-october-4-2023-0-12-screenshot.png",
    //     "publishedAt": "2023-09-23T14:36:37Z",
    //     "content": "Summary\r\n<ul><li> Google's Pixel 8 series is expected to bring a significant improvement in camera quality, raising the bar for flagship Android phones. </li><li> Leaked information suggests that the… [+2936 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Android Police"
    //     },
    //     "author": "Chethan Rao",
    //     "title": "Google Pixel 8 and 8 Pro launch day colors have leaked in their entirety",
    //     "description": "Have your pick among Sky Blue, Peony Rose, and others",
    //     "url": "https://www.androidpolice.com/google-pixel-8-8-pro-colors-render-leak/",
    //     "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/09/pixel-8-pixel-8-pro-teaser-images-6.jpg",
    //     "publishedAt": "2023-09-23T08:04:50Z",
    //     "content": "Summary\r\n<ul><li> The Pixel 8 color options include Pink (Peony Rose), Gray, and Obsidian (Black), while the Pixel 8 Pro will come in Obsidian, Porcelain, and Sky Blue. </li><li> Google is expected t… [+3847 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Genbeta.com"
    //     },
    //     "author": "Eva Rodriguez",
    //     "title": "Proyecto Gutenberg tiene 5.000 audiolibros nuevos que puedes escuchar gratis. Los ha hecho con inteligencia artificial",
    //     "description": "Si te gusta la lectura gratis, seguro que ya conoces el Proyecto Gutenberg, que tiene a su disposición miles de libros electrónicos, principalmente de dominio público. Pues bien, si entras a su sección de audiolibros, vas a encontrar 5.000 nuevas obras dispon…",
    //     "url": "https://www.genbeta.com/actualidad/proyecto-gutenberg-tiene-5-000-audiolibros-nuevos-que-puedes-escuchar-gratis-ha-hecho-inteligencia-artificial",
    //     "urlToImage": "https://i.blogs.es/6acfb2/libros/840_560.jpeg",
    //     "publishedAt": "2023-09-23T10:00:52Z",
    //     "content": "Si te gusta la lectura gratis, seguro que ya conoces el Proyecto Gutenberg, que tiene a su disposición miles de libros electrónicos, principalmente de dominio público. Pues bien, si entras a su secci… [+2910 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Thekitchn.com"
    //     },
    //     "author": "Diane McMartin",
    //     "title": "The 12 Best Costco Wines, According to Our Wine Expert",
    //     "description": "Number 8 is a must-have for entertaining.\nREAD MORE...",
    //     "url": "https://www.thekitchn.com/best-costco-wine-23580086",
    //     "urlToImage": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/stock%2Fshutterstock_1540637465",
    //     "publishedAt": "2023-09-23T14:30:00Z",
    //     "content": "We independently select these products—if you buy from one of our links, we may earn a commission. All prices were accurate at the time of publishing.\r\nFall and a return to routine makes doing a big … [+5592 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "AppleInsider"
    //     },
    //     "author": "news@appleinsider.com (Malcolm Owen)",
    //     "title": "Apple AI chief refers to iOS 17 Safari search feature in Google antitrust testimony",
    //     "description": "Apple AI chief John Giannandrea pointed out the quiet feature addition to Safari's search in iOS 17 as part of his testimony during Google's DoJ antitrust lawsuit.The Department of Justice is in the middle of an antitrust trial with Google over allegations it…",
    //     "url": "https://appleinsider.com/articles/23/09/23/apple-ai-chief-refers-to-ios-17-safari-search-feature-in-google-antitrust-testimony",
    //     "urlToImage": "https://photos5.appleinsider.com/gallery/56491-114764-50359-98968-48651-95009-46580-90806-hhehader-xl-xl-xl-xl.jpg",
    //     "publishedAt": "2023-09-23T16:39:38Z",
    //     "content": "Apple AI chief John Giannandrea pointed out the quiet feature addition to Safari's search in iOS 17 as part of his testimony during Google's DoJ antitrust lawsuit. \r\nThe Department of Justice is in t… [+1595 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "AppleInsider"
    //     },
    //     "author": "news@appleinsider.com (Christine McKee)",
    //     "title": "Get Apple's new USB-C AirPods Pro 2 for $199.99, a $50 discount off retail",
    //     "description": "Apple may have just released AirPods Pro 2 with a USB-C charging case, but a price war has already erupted, driving the cost down to $199.99.You can pick up the latest AirPods Pro 2 with USB-C at Amazon.com and BestBuy.com for $199.99, reflecting a $50 price …",
    //     "url": "https://appleinsider.com/articles/23/09/23/get-apples-new-usb-c-airpods-pro-2-for-19999-a-50-discount-off-retail",
    //     "urlToImage": "https://photos5.appleinsider.com/gallery/56486-114736-airpods-pro-usb-c-deal-xl.jpg",
    //     "publishedAt": "2023-09-23T01:25:11Z",
    //     "content": "Apple may have just released AirPods Pro 2 with a USB-C charging case, but a price war has already erupted, driving the cost down to $199.99.\r\nYou can pick up the latest AirPods Pro 2 with USB-C at A… [+771 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "AppleInsider"
    //     },
    //     "author": "news@appleinsider.com (Malcolm Owen)",
    //     "title": "A new third-party MacBook repair tool is good for Right to Repair",
    //     "description": "A tool has been created to help independent repair outfits fix a common issue with the MacBook Pro and MacBook Air, one that would normally be fixed by Apple because of software elements.Fixing a sleep sensor issue [YouTube/Louis Rossmann]Apple has been under…",
    //     "url": "https://appleinsider.com/articles/23/09/23/a-new-third-party-macbook-repair-tool-is-good-for-right-to-repair",
    //     "urlToImage": "https://photos5.appleinsider.com/gallery/56490-114763-fix-mbp-tilt-xl.jpg",
    //     "publishedAt": "2023-09-23T13:32:14Z",
    //     "content": "Fixing a sleep sensor issue [YouTube/Louis Rossmann]\r\nA tool has been created to help independent repair outfits fix a common issue with the MacBook Pro and MacBook Air, one that would normally be fi… [+3472 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "AppleInsider"
    //     },
    //     "author": "news@appleinsider.com (Chip Loder)",
    //     "title": "Optimizing Metal: Ways to improve code made for Apple's graphics framework",
    //     "description": "There is a vast array of ways to optimize your Metal graphics code to get top performance. Here's how to get started getting your code into better shape for the Metal framework.Apple GPU architecture\r\nApple GPUs are Tile-Based Deferred Renderers - which means…",
    //     "url": "https://appleinsider.com/inside/xcode/tips/optimizing-metal-ways-to-improve-code-made-for-apples-graphics-framework",
    //     "urlToImage": "https://photos5.appleinsider.com/gallery/55783-114021-lede-xl.jpg",
    //     "publishedAt": "2023-09-23T17:45:09Z",
    //     "content": "There is a vast array of ways to optimize your Metal graphics code to get top performance. Here's how to get started getting your code into better shape for the Metal framework.\r\nApple GPUs are Tile-… [+6289 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Cheezburger.com"
    //     },
    //     "author": "bradpdickson, bradpdickson",
    //     "title": "Update: 'The company is going to lose $8M': Boss dismisses financial officer's advice and pays the price",
    //     "description": "Some business leaders prioritize sales above all else, offering hefty incentives to their sales teams for acquiring new clients at unserviceable rates. These leaders and their cronies will then cash out once the numbers have been sufficiently plumped up like …",
    //     "url": "https://cheezburger.com/22348805/update-the-company-is-going-to-lose-8m-boss-dismisses-financial-officers-advice-and-pays-the-price",
    //     "urlToImage": "https://i.chzbgr.com/original/22348805/h571192DD/malicious-compliance-revenge-work-workplace-horrible-bosses-employment-in-the-workplace-22348805",
    //     "publishedAt": "2023-09-23T13:00:00Z",
    //     "content": "Some business leaders prioritize sales above all else, offering hefty incentives to their sales teams for acquiring new clients at unserviceable rates. These leaders and their cronies will then cash … [+926 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Gizmodo.jp"
    //     },
    //     "author": "お買いものサポーター",
    //     "title": "旅の必需品揃ってるかい？トラベルポーチやネックピローなど、旅行グッズまとめ【Amazonタイムセール祭り】",
    //     "description": "Amazon（アマゾン）では、2023年9月22日9時から9月24日23時59分まで「Amazon Fashion×秋のお出かけタイムセール祭り」を開催中。\n\n現在、エレコムのトラベルポーチやネックピロー、AirTagなど、快適な旅行をサポートしてくれるアイテムがお買い得に登場しています。",
    //     "url": "https://www.gizmodo.jp/2023/09/amazon-timesale-fes-2023-0923-1.html",
    //     "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/09/23/GIZ1.jpg?w=1280&h=630&f=jpg",
    //     "publishedAt": "2023-09-23T04:45:00Z",
    //     "content": "Amazon202392299242359Amazon Fashion×\r\nAirTag\r\n8,00010\r\n202392312\r\nKindle200Kindle Unlimited299\r\nAppleAirTag \r\nApple AirPods Pro2SHURE\r\nAmazon\r\nAmazon Fashion×9242359\r\nSource:Amazon Fashion×"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Lifehacker.jp"
    //     },
    //     "author": "山科拓郎",
    //     "title": "iPhone、Apple Watch、AirPodsを同時にワイヤレスで充電できるワイヤレス充電器「Trios Charge」",
    //     "description": "「Trios Charge」は、乱雑になりがちなデスク上をスッキリさせる3in1ワイヤレス充電器。iPhone、Apple Watch、AirPodsを同時にワイヤレスで充電可能です。折りたたみ式で携帯に便利＆重さわずか133g。MagSafe技術採用でデバイスのズレを防ぎ、安全性も確保しています。高級感のあるデザインとタッチセンサー付きのライト機能も搭載。日常はもちろん、旅行や出張時にも大活躍！",
    //     "url": "https://www.lifehacker.jp/article/machi-ya-trioscharge-start-702274/",
    //     "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/09/17/TriosCharge00.gif?w=1280&h=630&f=jpg",
    //     "publishedAt": "2023-09-23T00:45:00Z",
    //     "content": "iPhoneApple WatchAirPods \r\nmachi-yaTrios Charge3in1\r\n3\r\nImage: FOREST FIELD\r\nTrios ChargeiPhoneQiApple WatchAirPods3\r\nImage: FOREST FIELD\r\nImage: FOREST FIELD\r\n133g1\r\nMagSafe\r\nImage: FOREST FIELD\r\n7.… [+161 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Journal du geek"
    //     },
    //     "author": "Olivier",
    //     "title": "Google veut toujours qu’Apple adopte le RCS",
    //     "description": "Puisque Apple ne supporte toujours le RCS — le protocole de messagerie qui succède au bon vieux SMS —, Google continue de prendre l'opinion publique à témoin. Le principal promoteur du RCS fait de nouveau pression sur le réfractaire, ce qui ne changera probab…",
    //     "url": "https://www.journaldugeek.com/2023/09/23/google-veut-toujours-quapple-adopte-le-rcs/",
    //     "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/09/rcs-ipager.jpg",
    //     "publishedAt": "2023-09-23T12:00:32Z",
    //     "content": "Puisque Apple ne supporte toujours le RCS le protocole de messagerie qui succède au bon vieux SMS , Google continue de prendre l'opinion publique à témoin. Le principal promoteur du RCS fait de nouve… [+2425 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Journal du geek"
    //     },
    //     "author": "Journal du Geek",
    //     "title": "Ultra résistant, cet antivirus est une malédiction pour les cybercriminels",
    //     "description": "Le meilleur antivirus pour Mac est en ce moment proposé à un prix défiant toute concurrence. Grâce à une remise folle de -60%, valable uniquement ce week-end, vous pouvez offrir à votre ordinateur Apple une protection de haute qualité contre toutes les \nUltra…",
    //     "url": "https://www.journaldugeek.com/bon-plan/ultra-resistant-cet-antivirus-est-une-malediction-pour-les-cybercriminels/",
    //     "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/10/masque-homme.jpeg",
    //     "publishedAt": "2023-09-23T07:16:02Z",
    //     "content": "Le meilleur antivirus pour Mac est en ce moment proposé à un prix défiant toute concurrence. Grâce à une remise folle de -60%, valable uniquement ce week-end, vous pouvez offrir à votre ordinateur Ap… [+5062 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Journal du geek"
    //     },
    //     "author": "Thomas Estimbre",
    //     "title": "Spotify : le prix de la version HiFi risque de faire grincer des dents",
    //     "description": "Évoquée depuis des années, la formule HiFi de Spotify devrait bientôt pointer le bout de son nez. Malheureusement, il faudra payer (très) cher.\nSpotify : le prix de la version HiFi risque de faire grincer des dents",
    //     "url": "https://www.journaldugeek.com/2023/09/23/spotify-le-prix-de-la-version-hifi-risque-de-faire-grincer-des-dents/",
    //     "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/01/spotify-logo-musique.jpg",
    //     "publishedAt": "2023-09-23T07:30:28Z",
    //     "content": "Évoquée depuis des années, la formule HiFi de Spotify devrait bientôt pointer le bout de son nez. Malheureusement, il faudra payer (très) cher.Cela fait plus de deux ans que Spotfy évoque le lancemen… [+2728 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Theregister.com"
    //     },
    //     "author": "Simon Sharwood",
    //     "title": "VR headsets to shift 30 million units a year by 2027, vastly behind wearables",
    //     "description": "The eyes don’t have it, but you're all ears\nAnalyst firm IDC has forecast strong growth for virtual reality headwear, but even stronger growth for more modest wearables, with the latter to vastly outsell the former for years to come.…<!--#include virtual='/da…",
    //     "url": "https://www.theregister.com/2023/09/23/idc_vr_wearables_predictions/",
    //     "urlToImage": "https://regmedia.co.uk/2020/04/22/shutterstock_virtual_reality_at_work.jpg",
    //     "publishedAt": "2023-09-23T07:50:08Z",
    //     "content": "Analyst firm IDC has forecast strong growth for virtual reality headwear, but even stronger growth for more modest wearables, with the latter to vastly outsell the former for years to come.\r\nBut befo… [+2130 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Theregister.com"
    //     },
    //     "author": "Thomas Claburn",
    //     "title": "Europe wants easy default browser selection screens. Mozilla is already sounding the alarm on dirty tricks",
    //     "description": "Can you blame it?\nEurope's Digital Markets Act, which goes into effect next year, will require that companies designated as gatekeepers provide users of most popular operating systems with browser choice screens that ask them to select a default browser.…",
    //     "url": "https://www.theregister.com/2023/09/23/mozilla_browser_choice_screens/",
    //     "urlToImage": "https://regmedia.co.uk/2023/09/23/shutterstock_firefox_mozilla.jpg",
    //     "publishedAt": "2023-09-23T11:15:07Z",
    //     "content": "Europe's Digital Markets Act, which goes into effect next year, will require that companies designated as gatekeepers provide users of most popular operating systems with browser choice screens that … [+4112 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Applesfera.com"
    //     },
    //     "author": "Fran Bouzas",
    //     "title": "“Te lo juro por Snoopy”: así fue el proceso creativo detrás de la esfera más compleja de la historia del Apple Watch",
    //     "description": "Snoopy, el inmortal Beagle que lleva con nosotros desde 1950, ha sido testigo de la revolución tecnológica que ha transformado nuestras vidas. En una época en la que Apple solo era una fruta y los relojes inteligentes no eran aún ni un sueño lejano, ahí estab…",
    //     "url": "https://www.applesfera.com/curiosidades/te-juro-snoopy-asi-fue-proceso-creativo-detras-esfera-compleja-historia-apple-watch",
    //     "urlToImage": "https://i.blogs.es/954b4e/maxresdefault/840_560.jpeg",
    //     "publishedAt": "2023-09-23T15:45:06Z",
    //     "content": "Snoopy, el inmortal Beagle que lleva con nosotros desde 1950, ha sido testigo de la revolución tecnológica que ha transformado nuestras vidas. En una época en la que Apple solo era una fruta y los re… [+4772 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Applesfera.com"
    //     },
    //     "author": "Jesús Quesada",
    //     "title": "Teléfono Apple iPhone 15 VS Samsung Galaxy S23: características, diferencias y precios",
    //     "description": "Apple acaba de actualizar sus nuevos teléfonos \"inteligentes\" para lo que queda de 2023 y gran parte de 2024. La nueva generación está compuesta de cuatro modelos diferentes: iPhone 15 y iPhone 15 Plus como opciones más \"modestas\", y iPhone 15 Pro y iPhone 15…",
    //     "url": "https://www.applesfera.com/seleccion/telefono-apple-iphone-15-vs-samsung-galaxy-s23-caracteristicas-diferencias-precios",
    //     "urlToImage": "https://i.blogs.es/291008/samsung-galaxy-s23-vs-iphone-15/840_560.jpeg",
    //     "publishedAt": "2023-09-23T17:00:54Z",
    //     "content": "Apple acaba de actualizar sus nuevos teléfonos \"inteligentes\" para lo que queda de 2023 y gran parte de 2024. La nueva generación está compuesta de cuatro modelos diferentes: iPhone 15 y iPhone 15 Pl… [+8890 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Applesfera.com"
    //     },
    //     "author": "Miguel López",
    //     "title": "Baldur's Gate 3 da el salto a macOS y confirma una nueva era de juegos en el Mac: estos son los requisitos para jugar",
    //     "description": "Siempre siento buenas vibraciones cuando puedo hablar de juegos AAA recientes (o al menos relativamente recientes) en Mac. El chip A17 Pro de los nuevos iPhone 15 Pro han dado un paso enorme para que los grandes estudios entren de nuevo en la plataforma de Ap…",
    //     "url": "https://www.applesfera.com/juegos-os-x/baldurs-gate-3-da-salto-a-macos-confirma-nueva-era-juegos-mac-estos-requisitos-para-jugar",
    //     "urlToImage": "https://i.blogs.es/6eb980/captura-de-pantalla-2023-09-23-a-las-8.28.42/840_560.jpeg",
    //     "publishedAt": "2023-09-23T09:00:53Z",
    //     "content": "Siempre siento buenas vibraciones cuando puedo hablar de juegos AAA recientes (o al menos relativamente recientes) en Mac. El chip A17 Pro de los nuevos iPhone 15 Pro han dado un paso enorme para que… [+1872 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "MakeUseOf"
    //     },
    //     "author": "Katie Rees",
    //     "title": "A Look Back at the First 15 Years of Android",
    //     "description": "The first Android phone launched in September 2008, and since then the OS has developed to be the world's most popular mobile platform.",
    //     "url": "https://www.makeuseof.com/15-years-of-android/",
    //     "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/08/android-anniversary.jpg",
    //     "publishedAt": "2023-09-23T11:00:27Z",
    //     "content": "In 2008, the first Android smartphone launched. Since then, it's become one of the biggest names in the tech industry, with billions of customers worldwide. You'll see Android software in some of the… [+8739 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "XDA Developers"
    //     },
    //     "author": "Nimish Sawant",
    //     "title": "iPhone 15 vs iPhone 14 Pro: Get the new or stick with the old?",
    //     "description": "Confused about whether to pick up the iPhone 15 or stick with last year's iPhone 14 Pro? Read on to see which phone is right for you.",
    //     "url": "https://www.xda-developers.com/iphone-15-vs-iphone-14-pro/",
    //     "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/09/iphone-15-1.png",
    //     "publishedAt": "2023-09-23T19:30:27Z",
    //     "content": "<ul><li> iPhone 15 \r\nThe Apple iPhone 15 comes with A16 Bionic chipset, a 6.1-inch OLED display, and a 48MP primary camera. Among the new features here are a USB Type-C port and Dynamic Island. There… [+8853 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "XDA Developers"
    //     },
    //     "author": "Chris Hachey",
    //     "title": "iPhone 15 Plus vs Samsung Galaxy S23+: Which middle-of-the-series phone is best?",
    //     "description": "Find out whether the iPhone 15 Plus is worth upgrading to or if you should get the Samsung Galaxy S23+",
    //     "url": "https://www.xda-developers.com/iphone-15-plus-vs-samsung-galaxy-s23/",
    //     "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/09/iphone-15-plus-black.png",
    //     "publishedAt": "2023-09-23T14:00:28Z",
    //     "content": "<ul><li> iPhone 15 Plus \r\nThe iPhone 15 Plus is the middle model in the new iPhone 15 series. It has a very good camera and a brilliant screen that's up to 2,000 nits. The chipset is powerful, as it … [+11098 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "XDA Developers"
    //     },
    //     "author": "Mahmoud Itani",
    //     "title": "5 reasons I'm upgrading to an iPhone 15 Pro Max from an iPhone 14 Pro",
    //     "description": "I had been aiming to wait for the iPhone 16 Pro, but some reasons have changed my mind. Here's why I'm upgrading to iPhone 15 Pro Max from a 14 Pro.",
    //     "url": "https://www.xda-developers.com/reasons-upgrading-iphone-15-pro-max/",
    //     "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/09/iphone-15-pro-max-apple-watch-202305750.jpg",
    //     "publishedAt": "2023-09-23T17:01:29Z",
    //     "content": "A few weeks ago, I expressed how I didn't care about the iPhone 15 series and that I was planning to hold on to my iPhone 14 Pro for an additional year. Though, following the official reveal of the i… [+4611 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "XDA Developers"
    //     },
    //     "author": "Ruben Circelli",
    //     "title": "iPhone 15 vs iPhone 14: Is the upgrade worth it?",
    //     "description": "Apple's iPhone 15 is finally here, but is it worth upgrading to from last year's base model iPhone?",
    //     "url": "https://www.xda-developers.com/iphone-15-vs-iphone-14-is-upgrade-worth-it/",
    //     "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/09/iphone-15-1.png",
    //     "publishedAt": "2023-09-23T10:01:29Z",
    //     "content": "<ul><li> iPhone 15 \r\nThe latest iPhone from Apple comes with a more powerful A16 Bionic chip, the Dynamic Island instead of a notch, and finally, a switch to USB-C, among other features. Put simply, … [+11807 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Golem.de"
    //     },
    //     "author": "Marc Stöckel",
    //     "title": "Predator-Spyware: Staatstrojaner wurde über iOS-Schwachstellen eingeschleust",
    //     "description": "Intellexa hat die jüngst von Apple gepatchten Schwachstellen in iOS ausgenutzt, um eine Zero-Day-Exploit-Kette für iPhones zu entwickeln. (Trojaner, Virus)",
    //     "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fpredator-spyware-staatstrojaner-wurde-ueber-ios-schwachstellen-eingeschleust-2309-177918.html&referer=https%3A%2F%2Ft.co%2F8a2a6f7c5c",
    //     "urlToImage": null,
    //     "publishedAt": "2023-09-23T11:12:02Z",
    //     "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Ritholtz.com"
    //     },
    //     "author": "Barry Ritholtz",
    //     "title": "MiB: Armen Panossian, Oaktree Capital Management",
    //     "description": "This week, we speak with Armen Panossian, managing director and head of performing credit at Oaktree Capital Management, which has $179 billion in assets under management. He oversees the firm’s liquid and private credit strategies, and also serves as a portf…",
    //     "url": "https://ritholtz.com/2023/09/mib-armen-panossian/",
    //     "urlToImage": "https://ritholtz.com/wp-content/uploads/2023/02/Mib-tile.png",
    //     "publishedAt": "2023-09-23T14:00:36Z",
    //     "content": "This week, we speak with Armen Panossian, managing director and head of performing credit at Oaktree Capital Management, which has $179 billion in assets under management. He oversees the firms liqui… [+2156 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Xataka Android"
    //     },
    //     "author": "Iván Ramírez",
    //     "title": "WhatsApp se está convirtiendo en la súper app que quiere Elon Musk y no nos hemos dado ni cuenta",
    //     "description": "Puede que Mark Zuckerberg nunca termine liándose a mamporrazos con Elon Musk, pero la batalla se libra en la tienda de aplicaciones: la carrera por ver quién logra lanzar la superapp definitiva. Elon Musk lo quiere hacer con Twitter, ahora X, y Zuckerberg lle…",
    //     "url": "https://www.xatakandroid.com/aplicaciones-android/whatsapp-se-esta-convirtiendo-super-app-que-quiere-elon-musk-no-nos-hemos-dado-cuenta",
    //     "urlToImage": "https://i.blogs.es/070470/whatsappsuper/840_560.jpeg",
    //     "publishedAt": "2023-09-23T16:00:53Z",
    //     "content": "Puede que Mark Zuckerberg nunca termine liándose a mamporrazos con Elon Musk, pero la batalla se libra en la tienda de aplicaciones: la carrera por ver quién logra lanzar la superapp definitiva. Elon… [+7184 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Android Authority"
    //     },
    //     "author": "Rita El Khoury",
    //     "title": "Android 1.0 didn’t impress me 15 years ago, but look at us now",
    //     "description": "It's been 15 years since Android 1.0 launched on the T-Mobile G1. The operating system was very basic, but it quickly grew into an unavoidable behemoth.",
    //     "url": "https://www.androidauthority.com/android-15-years-anniversary-3366640/",
    //     "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2023/09/android-15-year-birthday-3-scaled.jpg",
    //     "publishedAt": "2023-09-23T14:00:34Z",
    //     "content": "Happy 15-year anniversary, Android! It hasnt been an easy start to the journey, but you have evolved so much over the years and look at you now! More than 2 billion people use you every day and rely … [+6204 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "BGR"
    //     },
    //     "author": "Chris Smith",
    //     "title": "iOS 17’s Messages app has a brilliant gesture you need to learn",
    //     "description": "The public iOS 17 release has been out for a few days. I’m still getting used to some of the new features that Apple added …\nThe post iOS 17’s Messages app has a brilliant gesture you need to learn appeared first on BGR.",
    //     "url": "https://bgr.com/tech/ios-17s-messages-app-has-a-brilliant-gesture-you-need-to-learn/",
    //     "urlToImage": "https://bgr.com/wp-content/uploads/2023/06/apple-wwdc-2023-ios-17-reality-97.jpg?quality=82&strip=all",
    //     "publishedAt": "2023-09-23T14:33:00Z",
    //     "content": "The public iOS 17 release has been out for a few days. I’m still getting used to some of the new features that Apple added to the iPhone operating system. I have not tried any of the iOS 17 betas, wh… [+2452 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Espinof.com"
    //     },
    //     "author": "Jorge Loser",
    //     "title": "Dura sólo 4 horas y la puedes ver Disney+: una ácida comedia satírica de terror racial y ciencia ficción que gustará a los fans de Jordan Peele",
    //     "description": "Se ha estrenado de tapadillo en Disney+ la serie ‘La otra chica negra’ (The Other Black Girl), una nueva producción de Hulu basada en la novela homónima de 2021 de Zakiya Dalila Harris, que se centra en espacios laborales que esconden algo extraño, con un com…",
    //     "url": "https://www.espinof.com/criticas/dura-solo-4-horas-puedes-ver-disney-acida-comedia-satirica-terror-racial-ciencia-ficcion-que-gustara-a-fans-jordan-peele",
    //     "urlToImage": "https://i.blogs.es/679e91/black1-cf-cropped-970-0-2864-2160/840_560.jpeg",
    //     "publishedAt": "2023-09-23T15:00:54Z",
    //     "content": "Se ha estrenado de tapadillo en Disney+ la serie La otra chica negra (The Other Black Girl), una nueva producción de Hulu basada en la novela homónima de 2021 de Zakiya Dalila Harris, que se centra e… [+5371 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Techdirt"
    //     },
    //     "author": "Leigh Beadon",
    //     "title": "This Week In Techdirt History: September 17th – 23rd",
    //     "description": "Five Years Ago This week in 2018, Ajit Pai was whining about California’s net neutrality effort, while a court ordered the FCC to hand over data on bogus public comments about net neutrality, and Congress failed to invite a single consumer advocate to its upc…",
    //     "url": "https://www.techdirt.com/2023/09/23/this-week-in-techdirt-history-september-17th-23rd/",
    //     "urlToImage": "https://www.techdirt.com/wp-content/themes/techdirt/assets/images/td-rect-logo-white.png",
    //     "publishedAt": "2023-09-23T20:00:00Z",
    //     "content": "from the such-as-it-was dept\r\nFive Years Ago\r\nThis week in 2018, Ajit Pai was whining about California’s net neutrality effort, while a court ordered the FCC to hand over data on bogus public comment… [+1855 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "MacRumors"
    //     },
    //     "author": "MacRumors Staff",
    //     "title": "Top Stories: iOS 17, iPhone 15, and New Apple Watches Released",
    //     "description": "There may not have been a media event this week, but that doesn't mean things weren't incredibly busy in the Apple world. The week kicked off with the official release of iOS 17 and related updates, and then there was a daily trickle of media reviews for all …",
    //     "url": "https://www.macrumors.com/2023/09/23/top-stories-iphone-15-release/",
    //     "urlToImage": "https://images.macrumors.com/t/4NK9cvIG4oLMo1tw1v2ysbRVt0M=/1600x/article-new/2023/09/top-stories-23sep2023.jpg",
    //     "publishedAt": "2023-09-23T13:00:00Z",
    //     "content": "There may not have been a media event this week, but that doesn't mean things weren't incredibly busy in the Apple world. The week kicked off with the official release of iOS 17 and related updates, … [+4099 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Les Numériques"
    //     },
    //     "author": "Loïc Babord",
    //     "title": "Test Huawei Watch 4 Pro : une montre connectée en titane qui en impose",
    //     "description": "Toujours plus axée sur la santé, la montre connectée Watch 4 Pro Huawei avance de solides arguments pour se faire une place parmi les références du segment : boîtier titane, verre saphir, grand écran rond Oled, eSim… Des atouts séduction qui ne font pas total…",
    //     "url": "https://www.lesnumeriques.com/montre-connectee/huawei-watch-4-pro-p73442/test.html",
    //     "urlToImage": "https://cdn.lesnumeriques.com/optim/test/21/213381/d3fc9869-huawei-watch-4-pro-une-montre-connectee-en-titane-qui-en-impose__1200_630__390-560-2176-1498_wtmk.jpg",
    //     "publishedAt": "2023-09-23T05:00:00Z",
    //     "content": "Un Harmony OS simple à prendre en main\r\nPrincipalement tactile, linterface de la Huawei Watch 4 Pro est simple à utiliser. Le fonctionnement du système Harmony OS ressemble à celui de Wear OS et des … [+1621 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Xatakamovil.com"
    //     },
    //     "author": "Eva Rodriguez",
    //     "title": "La pantalla de mi iPhone 15 se ha quedado congelada con el logo de Apple en la configuración inicial: así puedes solucionarlo",
    //     "description": "Apple ha cumplido sus plazos habituales entre la Keynote y la comercialización de sus nuevos teléfonos y los iPhone 15 ya están disponibles. Si hiciste la reserva en las primeras horas, probablemente ya lo tengas en tu poder. Y si ya te has puesto manos a la …",
    //     "url": "https://www.xatakamovil.com/apple/pantalla-mi-iphone-15-se-ha-quedado-congelada-logo-apple-configuracion-inicial-asi-puedes-solucionarlo",
    //     "urlToImage": "https://i.blogs.es/f1b1e9/iphone-15/840_560.jpeg",
    //     "publishedAt": "2023-09-23T08:00:52Z",
    //     "content": "Apple ha cumplido sus plazos habituales entre la Keynote y la comercialización de sus nuevos teléfonos y los iPhone 15 ya están disponibles. Si hiciste la reserva en las primeras horas, probablemente… [+3172 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Xatakamovil.com"
    //     },
    //     "author": "Eva Rodriguez",
    //     "title": "Adiós al Lightning, un cable tan odiado como amado: qué hacer con el montón de cables que ya no valdrán",
    //     "description": "Estoy escribiendo estas líneas sabedora de que en un par de días me llegará mi nuevo iPhone 15 Pro. Se van a cumplir dos años desde que adquirí el iPhone 13 Pro, mi plazo de renovación para tener lo último y además rentabilizarlo. Mientras veo a mucha gente f…",
    //     "url": "https://www.xatakamovil.com/movil-y-sociedad/memoria-lightning-buen-conector-al-que-toca-decirle-adios-que-hacer-monton-cables-que-no-me-valdran",
    //     "urlToImage": "https://i.blogs.es/0d927a/mika-baumeister-g2lgibbzeem-unsplash/840_560.jpeg",
    //     "publishedAt": "2023-09-23T16:00:53Z",
    //     "content": "Estoy escribiendo estas líneas sabedora de que en un par de días me llegará mi nuevo iPhone 15 Pro. Se van a cumplir dos años desde que adquirí el iPhone 13 Pro, mi plazo de renovación para tener lo … [+4977 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Xatakamovil.com"
    //     },
    //     "author": "plokiko",
    //     "title": "Dónde comprar los iPhone 15, 15 Plus, 15 Pro y 15 Pro Max más baratos: comparativa ofertas con Movistar, Vodafone, Orange y Yoigo",
    //     "description": "Los nuevos iPhone 15 de 2023 ya están oficialmente en venta, y las compañías telefónicas los han incluido en sus catálogos de móviles a plazos con diferentes ventajas aparentes que vamos a descifrar, para poder comparar en igualdad de condiciones todas estas …",
    //     "url": "https://www.xatakamovil.com/apple/donde-comprar-iphone-15-15-plus-15-pro-15-pro-max-baratos-comparativa-ofertas-movistar-vodafone-orange-yoigo",
    //     "urlToImage": "https://i.blogs.es/bb3240/comparativa-precios-a-plazos-iphone-15-de-2023/840_560.jpeg",
    //     "publishedAt": "2023-09-23T11:00:53Z",
    //     "content": "Los nuevos iPhone 15 de 2023 ya están oficialmente en venta, y las compañías telefónicas los han incluido en sus catálogos de móviles a plazos con diferentes ventajas aparentes que vamos a descifrar,… [+5933 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Enriquedans.com"
    //     },
    //     "author": "Enrique Dans",
    //     "title": "Microsoft, su Surface… y el futuro del tablet computing",
    //     "description": "Mi experiencia con el tablet computing viene de muchos años atrás: en el año 2003, cuando mi laptop aún con las pegatinas antirrobo de UCLA comenzó a quedarse corto, adquirí un Compaq TC1000 con un procesador Transmeta Crusoe, una máquina que había recibido m…",
    //     "url": "https://www.enriquedans.com/2023/09/microsoft-su-surface-y-el-futuro-del-tablet-computing.html",
    //     "urlToImage": "https://www.enriquedans.com/wp-content/uploads/2023/09/Microsoft-Surface-Przemyslaw-Marczynski-Unsplash.jpeg",
    //     "publishedAt": "2023-09-23T11:38:15Z",
    //     "content": "Mi experiencia con el tablet computing viene de muchos años atrás: en el año 2003, cuando mi laptop aún con las pegatinas antirrobo de UCLA comenzó a quedarse corto, adquirí un Compaq TC1000 con un p… [+6705 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Caschys Blog"
    //     },
    //     "author": "Felix Frank",
    //     "title": "Homey Pro 2023: Smart-Home-Zentrale mit Matter-Anbindung ausprobiert",
    //     "description": "Ich hatte seinerzeit bereits Erfahrungen mit dem „alten“ Homey Pro gesammelt und euch im Blog auch die Homey Bridge vorgestellt. Letztere konnte mich aufgrund des Abo-Modells, der fehlenden Anbindung ans Apple-Home-Universum und der mangelnden Zukunftsfähigke…",
    //     "url": "https://stadt-bremerhaven.de/homey-pro-2023-smart-home-zentrale-mit-matter-anbindung-ausprobiert/",
    //     "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/09/IMG_4700.jpeg",
    //     "publishedAt": "2023-09-23T10:00:13Z",
    //     "content": "Ich hatte seinerzeit bereits Erfahrungen mit dem „alten“ Homey Pro gesammelt und euch im Blog auch die Homey Bridge vorgestellt. Letztere konnte mich aufgrund des Abo-Modells, der fehlenden Anbindung… [+8804 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Frandroid"
    //     },
    //     "author": "Clément Gareau",
    //     "title": "L’iPhone 13 mérite t-il d’être acheté en 2023 ?",
    //     "description": "Après deux années complètes sur le marché, l'iPhone 13 reste encore et toujours au catalogue d'Apple. Après deux générations de smartphones, le prix du modèle a chuté et il devient une bonne affaire. L'iPhone 13 vaut-il le coup d'être acheté en 2023 ?",
    //     "url": "https://www.frandroid.com/guide-dachat/smartphones/1793601_est-ce-que-liphone-13-vaut-le-coup",
    //     "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/09/iphone-13-en-2023.jpg",
    //     "publishedAt": "2023-09-23T08:00:51Z",
    //     "content": "Après deux années complètes sur le marché, l'iPhone 13 reste encore et toujours au catalogue d'Apple. Après deux générations de smartphones, le prix du modèle a chuté et il devient une bonne affaire.… [+5737 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Frandroid"
    //     },
    //     "author": "Grégoire Huvelin",
    //     "title": "Décoloration de l’iPhone 15 Pro, Fiat Topolino et Bosch sous enquête – Tech’spresso",
    //     "description": "Vous n’avez pas eu le temps de suivre l’actualité hier ? Voici ce qui a marqué le vendredi 22 septembre : l'iPhone 15 Pro peut légèrement se décolorer, on connaît le prix de la Fiat Topolino et Bosch fait l'objet d'une enquête. Pour ne manquer aucune actualit…",
    //     "url": "https://www.frandroid.com/actualites-generales/1810171_decoloration-de-liphone-15-pro-fiat-topolino-et-bosch-sous-enquete-techspresso",
    //     "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/09/apple-event-september-12-1-2-15-screenshot-1.jpg",
    //     "publishedAt": "2023-09-23T06:04:58Z",
    //     "content": "Vous navez pas eu le temps de suivre lactualité hier? Voici ce qui a marqué le vendredi 22 septembre : l'iPhone 15 Pro peut légèrement se décolorer, on connaît le prix de la Fiat Topolino et Bosch fa… [+1456 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Frandroid"
    //     },
    //     "author": "Axel Savoye",
    //     "title": "Ninebot F2E : cette puissante trottinette électrique baisse son prix de 100 €",
    //     "description": "Acteur majeur du marché des trottinettes électriques, Ninebot a présenté cette année sa dernière gamme F2 Series comprenant trois modèles qui s'ajoutent à un catalogue d'une quinzaine de références. La Ninebot KickScooter F2E est le modèle de base de cette no…",
    //     "url": "https://www.frandroid.com/bons-plans/1800163_ninebot-f2e-cette-puissante-trottinette-electrique-baisse-son-prix-de-100-e",
    //     "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/04/ninebot-segway-kickscooter-f2-e-powered.jpg",
    //     "publishedAt": "2023-09-23T09:08:10Z",
    //     "content": "Acteur majeur du marché des trottinettes électriques, Ninebot a présenté cette année sa dernière gamme F2 Series comprenant trois modèles qui s'ajoutent à un catalogue d'une quinzaine de références. … [+3990 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Frandroid"
    //     },
    //     "author": "Marie Lizak",
    //     "title": "Essai Fiat 600e : une 500 électrique, en mieux (ou presque)",
    //     "description": "Quelques mois après avoir pu la découvrir en avant-première, nous voilà désormais au volant de cette nouvelle Fiat 600 électrique. La grande sœur de la 500 partage ses dessous avec les Peugeot e-2008 et autres Jeep Avenger, mais qu’apporte-t-elle vraiment de …",
    //     "url": "https://www.frandroid.com/marques/fiat/1802773_essai-fiat-600e-une-500-electrique-en-mieux-ou-presque",
    //     "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/09/4l4a0900-scaled.jpg",
    //     "publishedAt": "2023-09-23T12:01:19Z",
    //     "content": "Si vous pensez avoir déjà entendu le nom de Fiat 600e (600 électrique), rassurez-vous, cest tout à fait normal. Et pour cause, cest en 1955 que ce dernier est utilisé pour la toute première fois par … [+19902 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Lifehacker.ru"
    //     },
    //     "author": "Макс Вильтовский",
    //     "title": "iOS 17 позволяет превращать iPhone в тамагочи с помощью приложения Pixel Pals",
    //     "description": "Можно устраивать на своём экране «звериные» вечеринки с цифровыми питомцами друзей.",
    //     "url": "https://lifehacker.ru/prilozhenie-pixel-pals-2/",
    //     "urlToImage": "https://cdn.lifehacker.ru/wp-content/uploads/2023/09/image_1695458300-1024x512.png",
    //     "publishedAt": "2023-09-23T08:49:53Z",
    //     "content": "Apple iOS 17, . Pixel Pals  iPhone .\r\n . . .\r\n , , , PixelQuest Eternal Scroll. .\r\n: @ChristianSelig / \r\n«» . Pixel Pals .\r\n Pixel Pals , Premium-. 10 (960 ) 1,5 (144 ) ."
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Srad.jp"
    //     },
    //     "author": "headless",
    //     "title": "インド政府、スマートフォンやカーナビにインドの衛星測位システムNavICサポートを義務付ける方針",
    //     "description": "インド政府ではスマートフォンやカーナビゲーションシステムについて、インドの衛星測位システム NavIC (Navigation with Indian Constellation) サポートを義務付ける方針だという\n(Neowin の記事、\nBW Businessworld の記事、\nIndia Today の記事、\nTimes of India の記事)。\n\nインド政府ではスマートフォンメーカーへ NavIC サポートを推奨しているが、5Gスマートフォンでは 2025 年 1 月 1 日から、その他のスマートフ…",
    //     "url": "https://science.srad.jp/story/23/09/23/0239253/",
    //     "urlToImage": "https://srad.jp/static/topics/earth_64.png",
    //     "publishedAt": "2023-09-23T02:59:00Z",
    //     "content": "NavIC (Navigation with Indian Constellation) \r\n(Neowin BW Businessworld India Today Times of India )NavIC 5G 2025 1 1 2025 12 NavIC NavIC \r\n(ISRO) NavIC 7 12 NavIC Apple iPhone 15 Pro NavIC"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Srad.jp"
    //     },
    //     "author": "headless",
    //     "title": "チタニウムボディのiPhone 15 Pro、iPhone 14 Proよりも落下に弱いとの実験結果",
    //     "description": "iPhone 15 Proシリーズでは筐体の素材がiPhone 14 Proシリーズのステンレスからチタニウムに変更されて1割近く軽量化しているが、AppleTrack による落下テストでは iPhone 15 Pro のバックパネルやスクリーンが破損しやすいという結果が出ている\n(動画、\n9to5Mac の記事)。\n\niPhone 14 Pro のステンレス製フレームがフラットなデザインなのに対し、iPhone 15 Proでは角が丸められたデザインになっている。そのため、落下時にはガラスが衝撃を受けやすくなっ…",
    //     "url": "https://apple.srad.jp/story/23/09/23/050213/",
    //     "urlToImage": "https://srad.jp/static/topics/iphone_64.png",
    //     "publishedAt": "2023-09-23T05:21:00Z",
    //     "content": "iPhone 15 ProiPhone 14 Pro1AppleTrack iPhone 15 Pro \r\n(9to5Mac )iPhone 14 Pro iPhone 15 Pro2m 4.5m 6m iPhone 14 Pro 6m \r\niPhone 15 Pro/Pro MaxiPhone (HT207123)"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Ifanr.com"
    //     },
    //     "author": "莫崇宇",
    //     "title": "体验 iOS 17 五天之后，我找到了 N 个小细节，还有一个小彩蛋",
    //     "description": "iOS 17 到底值不值得升级？#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
    //     "url": "https://www.ifanr.com/1562994",
    //     "urlToImage": "https://s3.ifanr.com/wp-content/uploads/2023/09/Standby3.gif",
    //     "publishedAt": "2023-09-23T12:24:59Z",
    //     "content": "iPhone 15 iOS 17 \r\n iOS 17 \r\nStandbyiPhone \r\n iPhone Standby/\r\niPhone 14 Pro Apple Watch \r\niPhone \r\niPhone app app \r\nAndroid 14 iOS 17\r\niOS 17 -\r\n iOS 17 \r\nQQ \r\nMac iOS macOS \r\niMessage Check in\r\niPh… [+680 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Ifanr.com"
    //     },
    //     "author": "张明悦",
    //     "title": "早报｜iPhone 15 发售日门店大排长龙 / GPT-4 正式接入 Win11 / 国庆假期增开 200 列夜间高铁 | 未来周报",
    //     "description": "·微软 Surface 四大产品线更新\n·日本电视台收购吉卜力工作室\n·菜鸟或成阿里首个启动上市的业务集团#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
    //     "url": "https://www.ifanr.com/1562956",
    //     "urlToImage": "https://s3.ifanr.com/images/ep/uploads/230922/e31c8f37-8edf-403e-b1fe-c624abc2bb43.jpeg",
    //     "publishedAt": "2023-09-23T00:30:51Z",
    //     "content": "iPhone 15 \r\niPhone 15 Apple Store \r\n iPhone \r\n iPhone 15 Pro 400 600 iPhone 15 Pro Max 800 1500 \r\niPhone15 9 15 iPhone 15 ProiPhone 15 Pro Max 1 \r\n iPhone 15 512%\r\niPhone 15 10 iPhone 15 iPhone 14 25… [+1209 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "01net.com"
    //     },
    //     "author": "Geoffroy Ondet",
    //     "title": "iOS 17 : comment télécharger des cartes hors ligne dans Apple Plans",
    //     "description": "La dernière mise à jour du système d’exploitation de l’iPhone introduit, avec beaucoup de retard, une fonction très pratique pour utiliser Apple Plans hors ligne.",
    //     "url": "https://www.01net.com/astuces/ios-17-comment-telecharger-des-cartes-hors-ligne-dans-apple-plans.html",
    //     "urlToImage": "https://www.01net.com/app/uploads/2023/09/Apple-Plan-iOS-17.jpg",
    //     "publishedAt": "2023-09-23T14:11:17Z",
    //     "content": "La dernière mise à jour du système dexploitation de liPhone introduit, avec beaucoup de retard, une fonction très pratique pour utiliser Apple Plans hors ligne.Dix ans après Google Maps, lapplication… [+2963 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "01net.com"
    //     },
    //     "author": "Florian Bayard",
    //     "title": "Que faire de vos vieux câbles Lightning ?",
    //     "description": "L'iPhone 15 vient de passer à l'USB-C. Tôt ou tard, tous les câbles Lightning accumulés dans vos tiroirs seront inutiles. On fait le tour des solutions disponibles pour libérer un peu d'espace chez vous maintenant que le port Lightning tire sa révérence.",
    //     "url": "https://www.01net.com/actualites/iphone-15-usb-c-faire-vieux-cables-lightning.html",
    //     "urlToImage": "https://www.01net.com/app/uploads/2023/09/cables-lightning-iphone.jpg",
    //     "publishedAt": "2023-09-23T05:51:16Z",
    //     "content": "L’iPhone 15 vient de passer à l’USB-C. Tôt ou tard, tous les câbles Lightning accumulés dans vos tiroirs seront inutiles. On fait le tour des solutions disponibles pour libérer un peu d’espace chez v… [+6998 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Touchlab.jp"
    //     },
    //     "author": "Nakimo",
    //     "title": "【4%還元】Rebatesで「Apple公式サイト：Mac製品キャンペーン」が開催中",
    //     "description": "「Rebates(リーベイツ)」で、Apple公式サイトのMac製品を対象とした4%のポイント還元キャンペーンが開催されています。 【リンク】Rebates – Apple公式サイトのMac製品が4%ポイント […]\nThe post 【4%還元】Rebatesで「Apple公式サイト：Mac製品キャンペーン」が開催中 first appeared on Touch Lab - タッチ ラボ.©2019 \"Touch Lab - タッチ ラボ\".",
    //     "url": "https://touchlab.jp/2023/09/rebates_apple_2023sept23/",
    //     "urlToImage": "https://touchlab.jp/wp-content/uploads/2023/09/rebates_mac_2023sept_0.jpg",
    //     "publishedAt": "2023-09-23T04:31:12Z",
    //     "content": "「Rebates(リーベイツ)」で、Apple公式サイトのMac製品を対象とした4%のポイント還元キャンペーンが開催されています。\n【リンク】Rebates – Apple公式サイトのMac製品が4%ポイント還元 (9/25まで)\n\n楽天が運営する「Rebates(リーベイツ)」は、700以上のブランドやオンラインショップでいつも通り買い物をするだけで、楽天ポイントが貰えるサービスです。\nApp… [+626 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Touchlab.jp"
    //     },
    //     "author": "Nakimo",
    //     "title": "【6,000円OFF】10年以上使える長寿命「Anker 521 Portable Power Station」がクーポンセール中",
    //     "description": "楽天お買い物マラソンで、ポータブル電源「Anker 521 Portable Power Station」が6,000円OFF+ポイントで販売されています。 このポータブル電源の主な特徴は次のとおり： リン酸鉄リチウムイ […]\nThe post 【6,000円OFF】10年以上使える長寿命「Anker 521 Portable Power Station」がクーポンセール中 first appeared on Touch Lab - タッチ ラボ.©2019 \"Touch Lab - タッチ ラボ\".",
    //     "url": "https://touchlab.jp/2023/09/anker_521_portable_power_station_2023sept23/",
    //     "urlToImage": "https://touchlab.jp/wp-content/uploads/2023/01/anker_521_20.jpg",
    //     "publishedAt": "2023-09-23T03:28:53Z",
    //     "content": "楽天お買い物マラソンで、ポータブル電源「Anker 521 Portable Power Station」が6,000円OFF+ポイントで販売されています。\nこのポータブル電源の主な特徴は次のとおり：\n<ul>\n<li>リン酸鉄リチウムイオン(LFP)採用</li>\n<li>10年以上使える長寿命</li>\n<li>最大6台同時充電(合計398W)</li>\n<li>正弦波 ACアウトレット</… [+980 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "GSMArena.com"
    //     },
    //     "author": "Ro",
    //     "title": "iPhone 15 series shatters sales records in China",
    //     "description": "Despite the homegrown competition in China, Apple's new iPhone 15 series managed to outpace the iPhone 14 family from last year. According to one of the country's biggest online retailers, JD.com, which has partnered with more than 4,000 Apple resellers, the …",
    //     "url": "https://www.gsmarena.com/iphone_15_series_shatters_sales_records_in_china-news-60004.php",
    //     "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/09/apple-promo-videos/-952x498w6/gsmarena_000.jpg",
    //     "publishedAt": "2023-09-23T13:00:01Z",
    //     "content": "Despite the homegrown competition in China, Apple's new iPhone 15 series managed to outpace the iPhone 14 family from last year. According to one of the country's biggest online retailers, JD.com, wh… [+615 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "GSMArena.com"
    //     },
    //     "author": "Sagar",
    //     "title": "Realme teases smartphone with a periscope camera",
    //     "description": "Realme launched the Realme X3 SuperZoom in May 2020 with a periscope telephoto camera, but after that, the company didn't launch any smartphone with a regular telephoto or a periscope telephoto unit. However, Realme posted an image on X suggesting the return …",
    //     "url": "https://www.gsmarena.com/realme_periscope_telephoto_camera_smartphone_teaser-news-60005.php",
    //     "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/09/realme-periscope-telephoto-camera-smartphone-teaser/-952x498w6/gsmarena_001.jpg",
    //     "publishedAt": "2023-09-23T21:30:01Z",
    //     "content": "Realme launched the Realme X3 SuperZoom in May 2020 with a periscope telephoto camera, but after that, the company didn't launch any smartphone with a regular telephoto or a periscope telephoto unit.… [+1046 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "PCWorld"
    //     },
    //     "author": "DealPost Team",
    //     "title": "Stay powered up while you travel with $30 off this foldable charger",
    //     "description": "When you’re traveling, you need to be able to rely on your devices to navigate and communicate responsibly. So what happens when you run out of battery in a new country? A whole lot of inconvenience.\r\n\n\n\n\nDon’t let that happen to you. With the Adam Elements M…",
    //     "url": "https://www.pcworld.com/article/2079843/2079843.html",
    //     "urlToImage": "https://www.pcworld.com/wp-content/uploads/2023/09/PCWorld-Adam-Elements-Mag-3-Magnetic-3-in-1-Foldable-Travel-Charging-Station.jpeg?quality=50&strip=all&w=1024",
    //     "publishedAt": "2023-09-23T10:00:00Z",
    //     "content": "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nWhen you’re travelin… [+1128 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Educatorstechnology.com"
    //     },
    //     "author": "Med Kharbach, PhD",
    //     "title": "The Ultimate Guide to Teacher Appreciation Gifts That Make the Grade",
    //     "description": "Teacher appreciation gifts are the topic of our blog post today When it comes to showing gratitude to the educators who mold our future generations, sometimes a simple “thank you” just doesn’t cut it. That’s where teacher appreciation gifts come in. But let’s…",
    //     "url": "https://www.educatorstechnology.com/2023/09/teacher-appreciation-gifts.html",
    //     "urlToImage": "https://www.educatorstechnology.com/wp-content/uploads/2023/09/1-3.jpg",
    //     "publishedAt": "2023-09-23T00:12:45Z",
    //     "content": "Teacher appreciation gifts are the topic of our blog post today\r\nWhen it comes to showing gratitude to the educators who mold our future generations, sometimes a simple “thank you” just doesn’t cut i… [+6160 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Creative Bloq"
    //     },
    //     "author": "joe.foley@futurenet.com (Joseph Foley)",
    //     "title": "The delightful new Snoopy Apple Watch face took a lot of work",
    //     "description": "148 animations and a special 'Snoopy decision engine'.",
    //     "url": "https://www.creativebloq.com/news/apple-watch-snoopy",
    //     "urlToImage": "https://cdn.mos.cms.futurecdn.net/45qVbqNTQfUcJPBFAoFgoa-1200-80.jpg",
    //     "publishedAt": "2023-09-23T05:00:50Z",
    //     "content": "Apple Watch users could already customise their wearable to give it the face of say a Rolex or Patek Phillippe using an app. There were even official Nike and Mickey Mouse faces. But until this week,… [+2990 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Creative Bloq"
    //     },
    //     "author": "beth.nicholls@futurenet.com (Beth Nicholls)",
    //     "title": "With $100 off, I might finally buy the Galaxy Watch5",
    //     "description": "A smartwatch for an even smarter price.",
    //     "url": "https://www.creativebloq.com/news/galaxy-watch-5-deal",
    //     "urlToImage": "https://cdn.mos.cms.futurecdn.net/xTwaXedqW4J7UZxeQ5xFZZ-1200-80.jpg",
    //     "publishedAt": "2023-09-23T00:00:00Z",
    //     "content": "Galaxy Watch 5 (40mm) BT GPS AluminiumWas: \r\n$279.99\r\nNow: $179.99 at Best BuySave: $100Overview: The Galaxy Watch 5 is the younger sibling to the Galaxy Watch 5 Pro, and both have since been replace… [+692 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Creative Bloq"
    //     },
    //     "author": "joe.foley@futurenet.com (Joseph Foley)",
    //     "title": "Early reviews of Apple's new iPhone cases are worrying",
    //     "description": "FineWoven doesn't look so fine.",
    //     "url": "https://www.creativebloq.com/news/apple-iphone-finewoven-cases",
    //     "urlToImage": "https://cdn.mos.cms.futurecdn.net/C5G8uMjuLepCSAnNCC4qC9-1200-80.jpg",
    //     "publishedAt": "2023-09-23T04:00:57Z",
    //     "content": "Apple's launch event for the iPhone 15 made much of its move to a more eco-friendly type of casing for the phone. It announced that it would no longer be making leather iPhone cases, replacing them w… [+2751 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Creative Bloq"
    //     },
    //     "author": "erlingur.einarsson@futurenet.com (Erlingur Einarsson)",
    //     "title": "ASUS Zenbook Pro 14 OLED review: good-looking performer is a MacBook Pro rival",
    //     "description": "The ASUS Zenbook Pro 14 continues ASUS' streak of offering powerful laptops with great screens for creatives.",
    //     "url": "https://www.creativebloq.com/reviews/asus-zenbook-pro-14-oled",
    //     "urlToImage": "https://cdn.mos.cms.futurecdn.net/PigucqeK6g6CBwiNvPcoNP-1200-80.jpg",
    //     "publishedAt": "2023-09-23T06:00:54Z",
    //     "content": "The ASUS Zenbook Pro 14 OLED comes burdened with not the weight of its components (it's fairly light at 1.6kg), but rather the expectation created by its close cousins, the Zenbooks Pro 16X, 15 and S… [+8877 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "La Vanguardia"
    //     },
    //     "author": "Beatriz Alcántara",
    //     "title": "Cómo ver Apple TV+ en un móvil o tablet Android",
    //     "description": "La disponibilidad de la app de Apple TV+ para Android varía dependiendo del dispositivo desde el que quieras acceder a la plataforma de streaming. La aplicación oficial sí se puede descargar para dispositivos con Android TV, como una smart TV, pero sigue sin …",
    //     "url": "https://www.lavanguardia.com/andro4all/android/como-ver-apple-tv-en-un-movil-o-tablet-android",
    //     "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/09/apple-tv-plus-movil-android.jpg?width=1200",
    //     "publishedAt": "2023-09-23T11:03:43Z",
    //     "content": "Así se ve la portada de Apple TV+ en un teléfono móvil Android, concretamente en el POCO F4 // Imagen: Beatriz Alcántara Gil.\r\nLa disponibilidad de la app de Apple TV+ para Android varía dependiendo … [+2656 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "La Vanguardia"
    //     },
    //     "author": "Christian Collado",
    //     "title": "Cuánto dinero tendrías ahora si, en lugar del iPhone, hubieras comprado acciones de Apple cada año desde 2007",
    //     "description": "El lanzamiento de un nuevo iPhone es el momento más importante de Apple cada año. Al fin y al cabo, su smartphone es el producto más relevante de la compañía en términos de ingresos y representa una parte significativa de sus beneficios totales anuales. Es po…",
    //     "url": "https://www.lavanguardia.com/andro4all/apple/cuanto-dinero-tendrias-ahora-si-en-lugar-del-iphone-hubieras-comprado-acciones-de-apple-cada-ano-desde-2007",
    //     "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/09/iphone-14.1695044404.8488.jpg?width=1200",
    //     "publishedAt": "2023-09-23T14:01:58Z",
    //     "content": "El iPhone 14, uno de los últimos smartphones lanzados por Apple\r\nEl lanzamiento de un nuevo iPhone es el momento más importante de Apple cada año. Al fin y al cabo, su smartphone es el producto más r… [+2146 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "La Vanguardia"
    //     },
    //     "author": "Daniel García",
    //     "title": "Google ataca a Apple y a iMessage en un nuevo anuncio",
    //     "description": "Google disfruta de la publicidad agresiva contra Apple. Ya lo hemos visto en anteriores comerciales, como cuando el Pixel y el iPhone se juntan, pero el siguiente objetivo de ataque no ha sido el teléfono insignia de Apple, sino contra una de sus aplicaciones…",
    //     "url": "https://www.lavanguardia.com/andro4all/apple/google-ataca-a-apple-y-a-imessage-en-un-nuevo-anuncio",
    //     "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/09/ipager-google-joke.jpg?width=1200",
    //     "publishedAt": "2023-09-23T09:33:28Z",
    //     "content": "Google ha cargado con mucha sátira contra Apple en su último spot, comparándolos con un mensáfono\r\nGoogle disfruta de la publicidad agresiva contra Apple. Ya lo hemos visto en anteriores comerciales,… [+2288 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "La Vanguardia"
    //     },
    //     "author": "Edgar Otero",
    //     "title": "Cómo controlar ChatGPT con la voz y hablar con él",
    //     "description": "ChatGPT se ha convertido en una sensación, especialmente entre los usuarios más fanáticos de la tecnología. Si bien es cierto que el uso del chatbot ha caído notablemente, todavía son miles y miles de personas los que sacan partido a esta plataforma en su día…",
    //     "url": "https://www.lavanguardia.com/andro4all/tecnologia/como-controlar-chatgpt-con-la-voz-y-hablar-con-el",
    //     "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/06/chatgpt-ios.jpeg?width=1200",
    //     "publishedAt": "2023-09-23T03:30:10Z",
    //     "content": "ChatGPT en un iPhone.\r\nChatGPT se ha convertido en una sensación, especialmente entre los usuarios más fanáticos de la tecnología. Si bien es cierto que el uso del chatbot ha caído notablemente, toda… [+6032 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "La Vanguardia"
    //     },
    //     "author": "Pablo Hernando Illán",
    //     "title": "Qué hacer si te roban el móvil en el extranjero",
    //     "description": "Vamos a explicarte paso por paso qué hacer si te roban el móvil en el extranjero. Esta situación es frustrante, no solo porque no tengamos nuestro móvil, sino porque manejarse fuera de nuestras fronteras resulta más complicado que dentro. De todos modos, hay …",
    //     "url": "https://www.lavanguardia.com/andro4all/operadoras/que-hacer-si-te-roban-el-movil-en-el-extranjero",
    //     "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/09/que-hacer-si-te-roban-el-movil-en-el-extranjero.jpg?width=1200",
    //     "publishedAt": "2023-09-23T16:00:40Z",
    //     "content": "Me han robado el móvil fuera de España, ¿qué hago?\r\nVamos a explicarte paso por paso qué hacer si te roban el móvil en el extranjero. Esta situación es frustrante, no solo porque no tengamos nuestro … [+6843 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "La Vanguardia"
    //     },
    //     "author": "Esteban García Marcos",
    //     "title": "Las 9 mejores películas del fin del mundo o apocalípticas y dónde verlas en streaming",
    //     "description": "El fin del mundo es algo que nos ha obsesionado desde hace mucho tiempo. Sobre todo con la entrada del Mundo Contemporáneo. Esto se debe a que los seres humanos hemos dejado una huella tan profunda en el planeta que nos planteamos constantemente hasta cuándo …",
    //     "url": "https://www.lavanguardia.com/andro4all/series/las-mejores-peliculas-del-fin-del-mundo-o-apocalipticas-y-donde-verlas-en-streaming",
    //     "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/09/mejores-peliculas-apocalipticas.png?width=1200",
    //     "publishedAt": "2023-09-23T19:01:06Z",
    //     "content": "Las películas del fin del mundo son realmente entretenidas\r\nEl fin del mundo es algo que nos ha obsesionado desde hace mucho tiempo. Sobre todo con la entrada del Mundo Contemporáneo. Esto se debe a … [+7224 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Clubic"
    //     },
    //     "author": "/auteur/407247-merouan-goumiri.html",
    //     "title": "iPhone 15 : comment préserver la batterie de votre nouveau smartphone (et être tranquille)",
    //     "description": "Voici une fonctionnalité qui pourrait intéresser les premiers acheteurs d'iPhone 15. Votre smartphone vous remerciera sans doute plus tard.",
    //     "url": "https://www.clubic.com/actualite-485812-iphone-15-comment-preserver-la-batterie-de-votre-nouveau-smartphone-et-etre-tranquille.html",
    //     "urlToImage": "https://pic.clubic.com/v1/images/2143462/raw",
    //     "publishedAt": "2023-09-23T08:00:00Z",
    //     "content": "Voici une fonctionnalité qui pourrait intéresser les premiers acheteurs d'iPhone 15. Votre smartphone vous remerciera sans doute plus tard.\r\nNous y sommes : les iPhone 15 et iPhone 15 Plus sont dispo… [+3541 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Clubic"
    //     },
    //     "author": "/auteur/473520-camille-coirault.html",
    //     "title": "Ce que révèle le premier démontage d'un iPhone 15 Pro",
    //     "description": "La chaîne YouTube spécialiste du démontage de smartphone PBKreviews s'est penchée sur le dernier bijou d'Apple pour en découvrir les secrets de sa conception. Quelques différences sont à noter par rapport à la génération précédente.",
    //     "url": "https://www.clubic.com/actualite-485824-ce-que-revele-le-premier-demontage-d-un-iphone-15-pro.html",
    //     "urlToImage": "https://pic.clubic.com/v1/images/2140861/raw",
    //     "publishedAt": "2023-09-23T15:00:00Z",
    //     "content": "La chaîne YouTube spécialiste du démontage de smartphone PBKreviews s'est penchée sur le dernier bijou d'Apple pour en découvrir les secrets de sa conception. Quelques différences sont à noter par ra… [+2535 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Nextpit.de"
    //     },
    //     "author": "Stefan Möllenhoff",
    //     "title": "Apple Watch Ultra 2 im ersten Test: eine Fingerspitze voraus",
    //     "description": "Die Watch Ultra 2 wird nicht nur günstiger, sondern auch besser – nämlich bei Prozessor, Display und Bedienung. Außerdem eliminiert Apple eine Schwäche.",
    //     "url": "https://www.nextpit.de/apple-watch-ultra-2-test",
    //     "urlToImage": "https://fscl01.fonpit.de/userfiles/7687254/image/Apple_Watch_Ultra_2/nextpit_Apple_Watch_Ultra_2_Set_Up.jpg",
    //     "publishedAt": "2023-09-23T13:00:01Z",
    //     "content": "Wäre da nicht das neue Watchface, die Apple Watch Ultra 2 wäre von ihrer Vorgängerin nicht zu unterscheiden. Doch die wirklichen Neuerungen verbergen sich unter der Haube: Mit dem neuen Apple S9 und … [+12228 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Tomshw.it"
    //     },
    //     "author": "Andrea Maiellano",
    //     "title": "Resident Evil Village, Capcom annuncia la data di uscita, e il prezzo, per iPhone e iPad",
    //     "description": "Al Tokyo Game Show, Capcom ha comunicato i dettagli in merito a prezzo, uscita e compatibilità di Resident Evil Village per dispositivi Apple",
    //     "url": "https://www.tomshw.it/videogioco/resident-evil-village-capcom-annuncia-la-data-di-uscita-e-il-prezzo-per-iphone-e-ipad/",
    //     "urlToImage": "https://www.tomshw.it/images/images/2022/10/resident-evil-village-252902.jpg",
    //     "publishedAt": "2023-09-23T15:30:38Z",
    //     "content": "News Resident Evil Village, Capcom annuncia la data di uscita, e il prezzo, per iPhone e iPad\r\nTom's Hardware vive grazie al suo pubblico. Quando compri qualcosa dai nostri link, potremmo guadagnare … [+2137 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Tomshw.it"
    //     },
    //     "author": "Dario De Vita",
    //     "title": "Risparmia fino a 200€ sugli smartphone ricondizionati grazie a questo coupon",
    //     "description": "Una vasta selezione di smartphone ricondizionati è compatibile con questo coupon, per uno sconto extra del 10%.",
    //     "url": "https://www.tomshw.it/smartphone/risparmia-fino-a-200e-sugli-smartphone-ricondizionati-grazie-a-questo-coupon/",
    //     "urlToImage": "https://www.tomshw.it/images/images/2023/09/smartphone-ricondizionati-su-ebay-288718.jpg",
    //     "publishedAt": "2023-09-23T18:00:47Z",
    //     "content": "Apple Risparmia fino a 200 sugli smartphone ricondizionati grazie a questo coupon\r\nTom's Hardware vive grazie al suo pubblico. Quando compri qualcosa dai nostri link, potremmo guadagnare una commissi… [+4082 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Tomshw.it"
    //     },
    //     "author": "Giulia Serena",
    //     "title": "Dove vedere Milan – Verona in TV e streaming",
    //     "description": "Ecco dove vedere in TV e streaming Milan - Verona, che si terrà sabato 23 settembre alle ore 15:00 presso lo Stadio San Siro di Milano.",
    //     "url": "https://www.tomshw.it/altro/dove-vedere-milan-verona-in-tv-e-streaming/",
    //     "urlToImage": "https://www.tomshw.it/images/images/2023/09/offerte-288572.jpg",
    //     "publishedAt": "2023-09-23T08:00:54Z",
    //     "content": "Streaming e Web Service Dove vedere Milan – Verona in TV e streaming\r\nTom's Hardware vive grazie al suo pubblico. Quando compri qualcosa dai nostri link, potremmo guadagnare una commissione. Scopri d… [+3308 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Tomshw.it"
    //     },
    //     "author": "Lucia Lasorsa",
    //     "title": "Dove vedere Sassuolo – Juventus in TV e streaming",
    //     "description": "Non perdetevi la partita di oggi: scoprite dove vederla leggendo il nostro articolo.",
    //     "url": "https://www.tomshw.it/altro/dove-vedere-sassuolo-juventus-in-tv-e-streaming/",
    //     "urlToImage": "https://www.tomshw.it/images/images/2023/09/sassuolo-juventus-288642.jpg",
    //     "publishedAt": "2023-09-23T10:00:32Z",
    //     "content": "Streaming e Web Service Dove vedere Sassuolo – Juventus in TV e streaming\r\nTom's Hardware vive grazie al suo pubblico. Quando compri qualcosa dai nostri link, potremmo guadagnare una commissione. Sco… [+3407 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Idownloadblog.com"
    //     },
    //     "author": "Cody Lee",
    //     "title": "The best iPhone 15 cases you can buy right now",
    //     "description": "If you have picked up, or plan on picking up, the new iPhone 15, you're probably going to want to snag a case for it. Even with the durability and repairability improvements for the new handsets, a single drop or significant scratch can be devastating for you…",
    //     "url": "https://www.idownloadblog.com/2023/09/23/best-iphone-15-cases/",
    //     "urlToImage": "https://media.idownloadblog.com/wp-content/uploads/2023/09/best-iphone-15-cases.jpg",
    //     "publishedAt": "2023-09-23T18:00:18Z",
    //     "content": "If you have picked up, or plan on picking up, the new iPhone 15, youre probably going to want to snag a case for it. Even with the durability and repairability improvements for the new handsets, a si… [+4371 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Everydaycarry.com"
    //     },
    //     "author": "Lukas",
    //     "title": "Always with me",
    //     "description": "submitted by Lukas<ul><li>Garmin Fenix 6x Pro</li><li>RovyVon A1 Mini XP-G3 S5</li><li>Keysmart Nano Clip</li><li>Pilot G2 Retractable Pen</li><li>Victorinox Huntsman</li><li>Apple AirPods Pro</li><li>Orbitkey Multitool</li><li>Orbitkey Active</li><li>Apple A…",
    //     "url": "https://everydaycarry.com/posts/47634/always-with-me",
    //     "urlToImage": "https://cdn.everydaycarry.com/thumbnails/23-08-05/164ce8d922ef43.jpg",
    //     "publishedAt": "2023-09-23T15:00:00Z",
    //     "content": "Disclosure : Everyday Carry is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertis… [+28 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Googlewatchblog.de"
    //     },
    //     "author": "Jens",
    //     "title": "Pixel vs iPhone: Die Smartphones werden beste Freunde – Google bringt neue sehenswerte Spots (Videos)",
    //     "description": "Googles Marketing lässt die Pixel-Smartphones und das iPhone zu Freunden werden. Allerdings zeigt sich schnell, dass der eine Freund etwas geschickter, stärker und besser ist :-)Pixel vs iPhone: Die Smartphones werden beste Freunde – Google bringt neue sehens…",
    //     "url": "https://www.googlewatchblog.de/?p=210649",
    //     "urlToImage": "https://www.googlewatchblog.de/wp-content/uploads/iphone-pixel.jpg",
    //     "publishedAt": "2023-09-23T18:30:22Z",
    //     "content": "Google darf sich mit den Pixel-Smartphones schon seit einiger Zeit über steigende Verkaufszahlen und eine wachsende Akzeptanz erfreuen, denn die Geräte haben sich mittlerweile auch als Marke etablier… [+3093 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Googlewatchblog.de"
    //     },
    //     "author": "Jens",
    //     "title": "Google Play Store Aktion: Diese 60 Android-Apps, Spiele, Icon Packs & Live Wallpaper gibt es heute Gratis",
    //     "description": "Zum Start in das Wochenende gibt es im Google Play Store viele vorübergehend kostenlose Apps, Spiele, Icon Packs und Live Wallpaper - schaut mal herein.Google Play Store Aktion: Diese 60 Android-Apps, Spiele, Icon Packs & Live Wallpaper gibt es heute GratisKe…",
    //     "url": "https://www.googlewatchblog.de/?p=210773",
    //     "urlToImage": "https://www.googlewatchblog.de/wp-content/uploads/apps-23.09.2023.jpg",
    //     "publishedAt": "2023-09-23T08:00:31Z",
    //     "content": "Zum Start in das Wochenende gibt es im Google Play Store viele vorübergehend kostenlose Apps, Spiele, Icon Packs und Live Wallpaper – schaut mal herein. Heute berichten wir über den Apple iPager, zei… [+2355 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Nextpit.de"
    //     },
    //     "author": "Edwin Kee",
    //     "title": "Nicht verpassen: Diese Spiele & Apps für Android & iOS sind nur jetzt gratis",
    //     "description": "Spart Euch das Herumgestöber im Google Play Store und Apple App Store – nextpit verrät Euch, welche Apps gerade kurzzeitig kostenlos zu haben sind.",
    //     "url": "https://www.nextpit.de/kostenlose-apps-2023-02-38",
    //     "urlToImage": "https://fscl01.fonpit.de/userfiles/7687254/image/NextPit_Apps.jpg",
    //     "publishedAt": "2023-09-23T08:00:00Z",
    //     "content": "© nextpit\r\nZum Abschluss dieser Woche möchten wir Euch helfen, Eure Smartphones mit frischen Apps zu befeuern sei es durch neue Spiele oder hilfreiche Werkzeuge. Das Beste daran: Wenn Ihr schnell sei… [+8157 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "el-mundo",
    //     "name": "El Mundo"
    //     },
    //     "author": "EFE",
    //     "title": "Visita sorpresa del CEO de Apple, Tim Cook, a Madrid: come con Dabiz Muñoz y asiste al concierto de Guitarricadelafuente en la tienda de Sol",
    //     "description": "El consejero delegado (CEO) de la empresa estadounidense Apple, Tim Cook, ha visitado este sábado Madrid en plena campaña de lanzamiento del nuevo móvil de la tecnológica, el...",
    //     "url": "https://www.elmundo.es/economia/2023/09/23/650f224ae9cf4a53648b457d.html",
    //     "urlToImage": "https://phantom-elmundo.unidadeditorial.es/10872c524c9bc46f55a79249eae60035/resize/1200/f/jpg/assets/multimedia/imagenes/2023/09/23/16954908248432.jpg",
    //     "publishedAt": "2023-09-23T17:41:22Z",
    //     "content": "El consejero delegado (CEO) de la empresa estadounidense Apple, Tim Cook, ha visitado este sábado Madrid en plena campaña de lanzamiento del nuevo móvil de la tecnológica, el iPhone 15, que salió aye… [+694 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "el-mundo",
    //     "name": "El Mundo"
    //     },
    //     "author": "C. LUIS",
    //     "title": "Por qué la venta de móviles en Europa vive su peor momento",
    //     "description": "La venta de móviles se desploma. El mercado de smartphones en Europa ha caído un 12% en el segundo trimestre de 2023 con respecto al mismo periodo del año pasado, informa la...",
    //     "url": "https://www.elmundo.es/economia/empresas/2023/09/23/650db7f5fdddffb50f8b45b7.html",
    //     "urlToImage": "https://phantom-elmundo.unidadeditorial.es/264e4adf62d61d2cd259ddee146b9127/crop/0x0/3028x2019/resize/1200/f/jpg/assets/multimedia/imagenes/2023/09/22/16953980278116.jpg",
    //     "publishedAt": "2023-09-23T00:39:46Z",
    //     "content": "La venta de móviles se desploma. El mercado de smartphonesen Europa ha caído un 12% en el segundo trimestre de 2023 con respecto al mismo periodo del año pasado, informa la consultora Counterpoint Re… [+2242 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "marca",
    //     "name": "Marca"
    //     },
    //     "author": "FERNANDO ÁLVAREZ",
    //     "title": "Tebas busca más de un millón de móviles en España con aplicaciones piratas para ver fútbol",
    //     "description": "LaLiga tiene localizadas 46.000 IP&apos;s diferentes en todo el mundo desde las que se retransmiten, de forma ilegal, partidos de fútbol de Primera y Segunda división, además de ot",
    //     "url": "https://www.marca.com/futbol/primera-division/2023/09/23/650eb5aee2704e25208b45ae.html",
    //     "urlToImage": "https://phantom-marca.unidadeditorial.es/a659172a5156d37854fb6fa95661599a/resize/1200/f/jpg/assets/multimedia/imagenes/2023/09/23/16954627166752.jpg",
    //     "publishedAt": "2023-09-23T10:02:56Z",
    //     "content": "LaLiga tiene localizadas 46.000IP's diferentes en todo el mundo desde las que se retransmiten, de forma ilegal, partidos de fútbol de Primera y Segunda división, además de otros eventos como Fórmula … [+2655 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "DIE WELT"
    //     },
    //     "author": "Sascha Lehnartz",
    //     "title": "Der beste Diktator von allen",
    //     "description": "In Peking ist man empört über Annalena Baerbocks Xi-Kommentar, die CDU versucht sich mit neuem Anstrich aus der Midlife-Crisis zu retten – und die Linke setzt auf das Ende von Schulnoten, Nachsitzen und Hausaufgaben. Darum geht es im satirischen Wochenrückbli…",
    //     "url": "https://www.welt.de/podcasts/article247611404/Satirischer-Wochenrueckblick-Der-beste-Diktator-von-allen.html",
    //     "urlToImage": "https://img.welt.de/img/podcasts/mobile244603002/1141356217-ci16x9-w1200/DWO-Podcast-Teaser-KOPDBDT-waswar-lehnartz-2zu3.jpg",
    //     "publishedAt": "2023-09-23T06:43:52Z",
    //     "content": "Hier hören Sie den satirischen Wochenrückblick von Kick-off:\r\nAbonnieren Sie den Podcast unter anderem bei Spotify, Apple Podcasts, Amazon Music oder direkt per RSS-Feed.\r\nUkraine-Krieg, Ampelregieru… [+841 chars]"
    //     }
    //     ]

    constructor(){
        super();
        this.state = {
            articles: [],
            dataLoading: false,
            page:1,
            btn: false,
        }

    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3f2027e161094ecdb46d1531bf75bb27&page=1&pageSize=${this.props.pageSize}`;
        this.setState({dataLoading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles , totalResults: parsedData.totalResults , dataLoading:false});
    }

    handleOnNext = async ()=>{

        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3f2027e161094ecdb46d1531bf75bb27&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({dataLoading:true})
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log('Next');
            console.log(Math.ceil(this.state.totalResults/20))
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                dataLoading:false
            })
        }
    }

    handleOnprev = async ()=>{
        console.log('Prev')
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3f2027e161094ecdb46d1531bf75bb27&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({dataLoading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log('Next')
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            btn: false,
            dataLoading:false
        })
    }


    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                    <h1 className='text-center'>This Is News Items</h1>
                    <div className='text-center'>
                    {this.state.dataLoading && <Spinner/>}
                    </div>
                    <div className="row">
                        {!this.state.dataLoading && this.state.articles.map((elemets)=>{
                            return(
                                <div className="col-lg-4" key={elemets.url}>
                                    <NewsItem title={elemets.title} description={elemets.description ? elemets.description : 'Click to Read this News'} ImageUrl={elemets.urlToImage ? elemets.urlToImage : 'https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc='} readMore="Read More" newsUrl={elemets.url}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-between pb-3">
                <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handleOnprev}> &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleOnNext}>Next &rarr; </button>
            </div>
        </>
        )
    }
}

export default News