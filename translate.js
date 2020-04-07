const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const dir = fs.readdirSync(path.join('./markdown')).filter((data)=> {
	return data !== '.DS_Store'
});

let markdown = [];

dir.forEach((idx)=>{
	const data = fs.readFileSync(path.join(__dirname,`./markdown/${idx}`), (err, data)=>{
		if(err) throw err;
		return data;
	});
	const temp = matter(data);
	markdown.push(temp);
});

const markdownJSON = JSON.stringify(markdown);

fs.writeFile(path.join(__dirname,'./db.json'),markdownJSON, err => {
	if(err) throw err;
})