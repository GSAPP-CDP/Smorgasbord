import fs from 'fs'
import axios from 'axios'
import glob from 'glob'

const MODULES_DIR = "content/modules"



// TODO MAKE ASYNC/AWAIT


function modulecontentlookup(modulecontent, filepath) {
  let filtered = modulecontent.filter(m => {
    return filepath === m.path.replace("/modules/", "") + m.extension 
  });

  console.log(filtered);

  if(filtered.length > 0) {
    return filtered[0];
  } else {
    return null;
  }
}


function generate_module_data(files, callback) {


  
    var module_data = {};

    const dbb = /\[\[(.*)\]\]/g;


    let filecounter = 0; 
    // we could use promises, or we could do this! hacky but works

    files.forEach(f => {

      var filepath = f.replace(MODULES_DIR + '/', '').replace('.md', '');

      fs.readFile(f, 'utf8', (err, data) => {
        let result = data.matchAll(dbb);
        var double_links = [...result].map(m => { return m[1].trim(); })

        module_data[filepath] = {};
        module_data[filepath].double_links = double_links;

        filecounter++;
        if(filecounter == files.length) { callback(module_data); }

      });
    })


}


/*
 2. parse index.md YAML to generate sequence structure, if exists [TODO/OPTIONAL]
 3. parse filename prefixes to generate sequence structure
 */
function generate_sequence_data(modulecontent, files, callback) {

  const regordinal = /(\d+)-.*/;

  glob(MODULES_DIR + '/*', function(err, sequences) {

    var sequences_data = {};

    sequences.forEach(s => {

      var seqdata = {};
      var seqpath = s.replace(MODULES_DIR + '/', '')


      seqdata.contentdata =  modulecontentlookup(modulecontent, seqpath + "/index.md")


      if(seqpath.match(regordinal)) {
        seqdata.ordinal = parseInt(seqpath.match(regordinal)[1]);
      } else {
        seqdata.ordinal = 9999; // autogenerate ordinals, later TODO
      }

      seqdata.path= seqpath
      seqdata.slug = seqpath.split(/\d+-/).pop(0)

      var subfiles = files.filter(f => {
        return f.match(s);
      }).map(f => {
        return f.split('/').pop(0);
      });


      seqdata.modules = []

      subfiles.forEach(subfile => {

        let subfiledata = { file: subfile }
        
        if(subfile.match(regordinal)) {
          subfiledata.ordinal = parseInt(subfile.match(regordinal)[1]);
        } else if(subfile === 'index.md') {
          subfiledata.ordinal = 0;
        } else {
          subfiledata.ordinal = 9999; // autogenerate ordinals, later TODO
        }

        subfiledata.contentdata =  modulecontentlookup(modulecontent, seqpath + "/" + subfile)

        seqdata.modules.push(subfiledata)

      })

      //var seqpath = s.replace(MODULES_DIR + '/', '')
      //
      //
      sequences_data[s] = seqdata;

 
      /* SUBFILES TO ORDINAL
      //
      // subfiles contains all the nested subfiles inside each folder (s)
      // take each file, extract the ordinal (if it exists, add to ordinal, split, etc)k
      // make into format:
      //     sequences: [
        "intro-to-gh": {
            modules: [ ... ],
        },
        "advanced-gis": {
            modules: [ ... ],
        },
    ],

*/


    });

    callback(sequences_data)
  })


}



function process_content(modulecontent, callback) { 

  var data = {};

  glob(MODULES_DIR + '/**/*.md', function(err, files) {

    generate_module_data(files, module_data => {

      data.modules = module_data;

      generate_sequence_data(modulecontent, files, sequence_data => {

        data.sequences = sequence_data;

        callback(data);

      })


    });
  });

}

export default async function (moduleOptions) {

  const { $content } = require('@nuxt/content')
  const modulecontent = await $content('modules', { deep: true }).without(['body']).fetch()

  const { nuxt } = this

  nuxt.hook('ready', async nuxt => {
    console.log('Nuxt is ready - PROCESS_CONTENT')

    process_content(modulecontent, data => {
        fs.writeFile('data/content.json', JSON.stringify(data, null, 2), 'utf-8', (err) => {
          if (err) return console.log('An error happened', err)
        });

    })
  })
}

