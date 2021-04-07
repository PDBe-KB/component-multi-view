PDBe-KB Multi-View Component
=

[![Build Status](https://www.travis-ci.com/PDBe-KB/component-multi-view.svg?branch=main)](https://www.travis-ci.com/PDBe-KB/component-multi-view)
[![codecov](https://codecov.io/gh/PDBe-KB/component-multi-view/branch/main/graph/badge.svg?token=XYSKQV18FH)](https://codecov.io/gh/PDBe-KB/component-multi-view)
[![Maintainability](https://api.codeclimate.com/v1/badges/1852ac5538a63c058263/maintainability)](https://codeclimate.com/github/PDBe-KB/component-multi-view/maintainability)

This repository is for the codebase of a lightweight Angular v7 web component that lists all the UniProt accessions for a PDB entry, i.e. PDB chains may belong to different UniProt accessions. 

This component is used on the PDBe-KB Aggregated Views of Proteins to display a table of all the UniProt accessions and processed protein identifiers (PRO id) for a particular PDB entry.

### Example:

<img src="https://raw.githubusercontent.com/PDBe-KB/component-multi-view/main/pdbe-kb-multi-view.png">

## Quick Start

Get the code and install dependencies
```
git clone https://github.com/PDBe-KB/component-multi-view.git
cd component-multi-view
npm i
```

Running the app
```
ng serve
```

Running tests
```
ng test
```

## Dependencies

The main template (i.e. `index.html` by default) should also have the following CSS imports:
```angular2html
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/ebi-global.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.3/fonts.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/theme-pdbe-green.css" type="text/css" media="all"/>
```

## Basic usage

The component can be added to any Angular v7 apps.

#### 1.) Import the component:

Import the component in `app.module.ts` by default.
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiViewComponent } from './multi-view/multi-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### 2.) Add the component to a template:
```angular2html
<app-multi-view [data]="data" [pdbId]="accession"></app-multi-view>
```

The data model for the input data is described in 
`src/app/multi-view/multi-view.models.ts`

##### Example input data

```angular2html
[
  {
    'accession': 'P29373',
    'name': 'RABP2_HUMAN',
    'identifier': 'RABP2_HUMAN',
    'mappings': [
      {
        'entity_id': 1,
        'chain_id': 'A',
        'struct_asym_id': 'A',
        'start': {
          'author_residue_number': 1,
          'author_insertion_code': '',
          'residue_number': 1
        },
        'end': {
          'author_residue_number': 137,
          'author_insertion_code': '',
          'residue_number': 137
        },
        'unp_start': 2,
        'unp_end': 138,
        'pdb_start': 1,
        'pdb_end': 137
      }
    ],
    'description': 'Cellular retinoic acid-binding protein 2'
  }
]
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PDBe-KB/component-multi-view/tags).

## Authors

* **Mihaly Varadi** - *Initial implementation* - [mvaradi](https://github.com/mvaradi)

See also the list of [contributors](https://github.com/PDBe-KB/component-multi-view/contributors) who participated in this project.

## License

This project is licensed under the EMBL-EBI License - see the [LICENSE](LICENSE) file for details

## Acknowledgements

We would like to thank the [PDBe team](https://www.pdbe.org) and the [PDBe-KB partner resources](https://github.com/PDBe-KB/pdbe-kb-manual/wiki/PDBe-KB-Annotations) for their feedback and contributions.
