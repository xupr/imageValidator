var fs = require('fs');
var path = require('path');

var validators = {
	'.bmp': '424d',
	'.fits': '53494d504c45',
	'.gif': '47494638',
	'.gks': '47 4b 53 4d',
	'.rgb': '01da',
	'.itc': 'f10040bb',
	'.jpg': 'ffd8ffe0',
	'.nif': '49494e31',
	'.pm': '56494557',
	'.png': '89504e47',
	'.[e]ps': '2521',
	'.ras': '59a66a95',
	'.tif': '4d4d002a',
	'.tif': '49492a00',
	'.xcf': '67696d70207863662076',
	'.fig': '23464947',
	'.xpm': '2f2a2058504d202a2f'
};

fs.readdir(process.argv[2], function(err, files){
	if(err) console.log(err);
	else{
		for (var i = files.length - 1; i >= 0; i--) {
			fs.readFile(process.argv[2]+'/'+files[i], function(err, buffer, validator){
				if(err) console.log(err);
				else{
					if(buffer.toString('hex').substring(0, this.validator.length) === this.validator){
						console.log(this.file);
					}
				}
			}.bind({validator: validators[path.extname(files[i])], file: files[i]}));
		};
	}
});