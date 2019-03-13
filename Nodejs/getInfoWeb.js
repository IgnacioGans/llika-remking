const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.loslaureleshostal.com/restaurante';
//https://www.loslaureleshostal.com/sitemap.xml
console.log('\033[2J');
rp(url)
  .then(function(html) {
  	// console.log("Url Web: " + url);
   //  console.log('H1-Titulo web: '+ $('h1', html).text()+'\n');
   //  console.log('Title-Titulo Pestaña: '+ $('title', html).text()+'\n');
   //  console.log('Node Drupal: '+ $('link[rel="shortlink"]', html).attr('href')+'\n');
   //  console.log('Meta-Description: '+ $('meta[name="description"]', html).attr('content'));
    // console.table(["apples", "oranges", "bananas"]);
   //  let infoUrl ="Url Web: " + url;
  	// let infoH1 = 'H1-Titulo web: '+ $('h1', html).text()+'\n';
  	// let infoTitle ='Title-Titulo Pestaña: '+ $('title', html).text()+'\n';
  	// let infoNodeDrupal='Node Drupal: '+ $('link[rel="shortlink"]', html).attr('href')+'\n';
  	 let infoMetaDescription='Meta-Description: '+ $('meta[name="description"]', html).attr('content');
  	// let infoArray=[infoUrl,infoH1,infoTitle,infoNodeDrupal,infoMetaDescription];
   //  console.table([['nombre ','remking',],['nombre ','remking',],['nombre ','remking',]]);

    let infoUrl =["Url Web: ", url];
  	let infoH1 =['H1-Titulo web: ',  $('h1', html).text()];
  	let infoTitle =['Title-Titulo Pestaña: ', $('title', html).text()];
  	let infoNodeDrupal =['Node Drupal: ', $('link[rel="shortlink"]', html).attr('href')];
  	//let infoMetaDescription =['Meta-Description: ', $('meta[name="description"]', html).attr('content')];
  	let infoArray=[infoUrl,infoH1,infoTitle,infoNodeDrupal,infoMetaDescription];
    // console.table([['nombre ','remking',],['nombre ','remking',],['nombre ','remking',]]);
    console.table([infoUrl,infoNodeDrupal,infoH1,infoTitle]);
    console.log($('meta[name="description"]', html).attr('content'))
  })
  .catch(function(err) {
    //handle error
  });

/*

H1-Titulo web:

Title - Titulo: https://www.loslaureleshostal.com/

Meta-Description: Hostal los Laureles es una empresa Hotelera De Tres Estrellas Que Brinda Calidad Y Una Experiencia Acogedora




*/

const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.loslaureleshostal.com/restaurante';
//https://www.loslaureleshostal.com/sitemap.xml
console.log('\033[2J');
rp(url)
  .then(function(html) {
  	// console.log("Url Web: " + url);
   //  console.log('H1-Titulo web: '+ $('h1', html).text()+'\n');
   //  console.log('Title-Titulo Pestaña: '+ $('title', html).text()+'\n');
   //  console.log('Node Drupal: '+ $('link[rel="shortlink"]', html).attr('href')+'\n');
   //  console.log('Meta-Description: '+ $('meta[name="description"]', html).attr('content'));
    // console.table(["apples", "oranges", "bananas"]);
   //  let infoUrl ="Url Web: " + url;
  	// let infoH1 = 'H1-Titulo web: '+ $('h1', html).text()+'\n';
  	// let infoTitle ='Title-Titulo Pestaña: '+ $('title', html).text()+'\n';
  	// let infoNodeDrupal='Node Drupal: '+ $('link[rel="shortlink"]', html).attr('href')+'\n';
  	 let infoMetaDescription='Meta-Description: '+ $('meta[name="description"]', html).attr('content');
  	// let infoArray=[infoUrl,infoH1,infoTitle,infoNodeDrupal,infoMetaDescription];
   //  console.table([['nombre ','remking',],['nombre ','remking',],['nombre ','remking',]]);

    let infoUrl =["Url Web: ", url];
  	let infoH1 =['H1-Titulo web: ',  $('h1', html).text()];
  	let infoTitle =['Title-Titulo Pestaña: ', $('title', html).text()];
  	let infoNodeDrupal =['Node Drupal: ', $('link[rel="shortlink"]', html).attr('href')];
  	//let infoMetaDescription =['Meta-Description: ', $('meta[name="description"]', html).attr('content')];
  	let infoArray=[infoUrl,infoH1,infoTitle,infoNodeDrupal,infoMetaDescription];
    // console.table([['nombre ','remking',],['nombre ','remking',],['nombre ','remking',]]);
    console.table([infoUrl,infoNodeDrupal,infoH1,infoTitle]);
    console.log($('meta[name="description"]', html).attr('content'))
  })
  .catch(function(err) {
    //handle error
  });

/*

H1-Titulo web:

Title - Titulo: https://www.loslaureleshostal.com/

Meta-Description: Hostal los Laureles es una empresa Hotelera De Tres Estrellas Que Brinda Calidad Y Una Experiencia Acogedora




*/


const sitemaps = require('sitemap-stream-parser');
const rp = require('request-promise');
const $ = require('cheerio');
const fs = require('fs');
console.log('\033[2J');
let urls = ['https://www.loslaureleshostal.com/sitemap.xml','https://www.loslaureleshostal.com/en/sitemap.xml'];
all_urls = [];
sitemaps.parseSitemaps(urls, function(url) { all_urls.push(url); }, function(err, sitemaps) {
    all_urls.forEach(function(EachUrl){
    	rp(EachUrl)
			.then(function(html) {
				let infoUrl=EachUrl;
				let infoH1 = $('h1', html).text();
				let infoTitle =$('title', html).text();
				let infoMetaDescription=$('meta[name="description"]', html).attr('content');
				let infoNodeDrupal =$('link[rel="shortlink"]', html).attr('href');
				//let infoMetaDescription =['Meta-Description: ', $('meta[name="description"]', html).attr('content')];
				let infoArray=[infoUrl,infoH1,infoTitle,infoNodeDrupal,infoMetaDescription];
				//console.log(infoArray);

				let RemoveProtocolUrl = infoUrl.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '');
				infoUrl =RemoveProtocolUrl.replace('/','-');
				infoUrl = infoUrl.replace('/','-');
				infoUrl = infoUrl.replace('.','-');
				let Namefile= infoUrl+".txt";	
				//console.log(Namefile)
				return infoArray
				
			}).then(function(data){
				//console.log(data)		
				fs.appendFile("data.txt", data.join('\r\n'), function(err) {
			       if(err) {
			           return console.log(err);
			       }
			       console.log("The file was saved!");
			 	}); 
			})
			.catch(function(err) {
			//handle error
			});
    });
  
});
const sitemaps = require('sitemap-stream-parser');
const rp = require('request-promise');
const $ = require('cheerio');
const fs = require('fs');
console.log('\033[2J');
let urls = ['https://www.loslaureleshostal.com/sitemap.xml','https://www.loslaureleshostal.com/en/sitemap.xml'];
all_urls = [];
sitemaps.parseSitemaps(urls, function(url) { all_urls.push(url); }, function(err, sitemaps) {
    all_urls.forEach(function(EachUrl){
    	rp(EachUrl)
			.then(function(html) {
				let infoUrl=EachUrl;
				let infoH1 = $('h1', html).text();
				let infoTitle =$('title', html).text();
				let infoMetaDescription=$('meta[name="description"]', html).attr('content');
				let infoNodeDrupal =$('link[rel="shortlink"]', html).attr('href');
				//let infoMetaDescription =['Meta-Description: ', $('meta[name="description"]', html).attr('content')];
				let infoArray=[infoUrl,infoH1,infoTitle,infoNodeDrupal,infoMetaDescription];
				//console.log(infoArray);

				let RemoveProtocolUrl = infoUrl.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '');
				infoUrl =RemoveProtocolUrl.replace('/','-');
				infoUrl = infoUrl.replace('/','-');
				infoUrl = infoUrl.replace('.','-');
				let Namefile= infoUrl+".txt";	
				//console.log(Namefile)
				return infoArray
				
			}).then(function(data){
				//console.log(data)		
				fs.appendFile("data.txt", data.join('\r\n'), function(err) {
			       if(err) {
			           return console.log(err);
			       }
			       console.log("The file was saved!");
			 	}); 
			})
			.catch(function(err) {
			//handle error
			});
    });
  
});
const sitemaps = require('sitemap-stream-parser');
const rp = require('request-promise');
const $ = require('cheerio');
const fs = require('fs');
console.log('\033[2J');
let urls = ['https://www.loslaureleshostal.com/sitemap.xml','https://www.loslaureleshostal.com/en/sitemap.xml'];
all_urls = [];
sitemaps.parseSitemaps(urls, function(url) { all_urls.push(url); }, function(err, sitemaps) {
    all_urls.forEach(function(EachUrl){
    	rp(EachUrl)
			.then(function(html) {
				let infoUrl=EachUrl;
				let infoH1 = $('h1', html).text();
				let infoTitle =$('title', html).text();
				let infoMetaDescription=$('meta[name="description"]', html).attr('content');
				let infoNodeDrupal =$('link[rel="shortlink"]', html).attr('href');
				//let infoMetaDescription =['Meta-Description: ', $('meta[name="description"]', html).attr('content')];
				let infoArray=[infoUrl,infoH1,infoTitle,infoNodeDrupal,infoMetaDescription];
				//console.log(infoArray);

				let RemoveProtocolUrl = infoUrl.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '');
				infoUrl =RemoveProtocolUrl.replace('/','-');
				infoUrl = infoUrl.replace('/','-');
				infoUrl = infoUrl.replace('.','-');
				let Namefile= infoUrl+".txt";	
				//console.log(Namefile)
				return infoArray
				
			}).then(function(data){
				console.log(data)

				fs.writeFile("data.txt", data.join('\r\n'), function(err) {
			       if(err) {
			           return console.log(err);
			       }
			       console.log("The file was saved!");
			 	}); 
			})
			.catch(function(err) {
			//handle error
			});
    });

  
});
const sitemaps = require('sitemap-stream-parser');
const fs = require('fs');
 
let urls = ['https://www.loslaureleshostal.com/sitemap.xml','https://www.loslaureleshostal.com/en/sitemap.xml'];
 
all_urls = [];
let inforXML= sitemaps.parseSitemaps(urls, function(url) { all_urls.push(url); }, function(err, sitemaps) {
    console.log(all_urls);
    console.log('All done!');
    console.log(all_urls.length)

  fs.writeFile("rk-file.txt", all_urls.join('\r\n'), function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved!");
  }); 
});

const fs = require('fs');
const Handlebars = require('handlebars');

const source = '<div>{{title}}</div>';
const template = Handlebars.compile(source);

const contents = template({title: 'Wohooo!'});

fs.writeFile('contents.html', contents, err => {
    if (err) {
        return console.error(`Autsch! Failed to store template: ${err.message}.`);
    }

    console.log('Saved template!');
});

//https://stackoverflow.com/questions/39962913/write-file-from-a-template-in-node-js

var sitemaps = require('sitemap-stream-parser');
 
var urls = ['https://www.loslaureleshostal.com/sitemap.xml','https://www.loslaureleshostal.com/en/sitemap.xml'];
 
all_urls = [];
sitemaps.parseSitemaps(urls, function(url) { all_urls.push(url); }, function(err, sitemaps) {
    console.log(all_urls);
    console.log('All done!');
    console.log(all_urls.length)
});
