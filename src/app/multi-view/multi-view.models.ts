export class UniProtMapping {
  accession: string;
  name: string;
  identifier: string;
  mappings: Mapping[];
  description: string;
}

class Mapping {
  entity_id: number;
  chain_id: string;
  struct_asym_id: string;
  start: Range;
  end: Range;
  unp_start: number;
  unp_end: number;
  pdb_start: number;
  pdb_end: number;
}

class Range {
  author_residue_number: number;
  author_insertion_code: string;
  residue_number: number;
}
