export class UniProtMapping {
  accession: string; // UniProt accession of PRO identifier
  name: string; // Name of the protein
  identifier: string; // Identifier of the protein
  mappings: Mapping[];
  description: string; // Description of the protein
}

class Mapping {
  entity_id: number; // PDB entity identifier
  chain_id: string; // PDB chain identifier
  struct_asym_id: string; // PDB asymmetric unit identifier
  start: Range;
  end: Range;
  unp_start: number; // First UniProt residue index
  unp_end: number; // Last UniProt residue index
  pdb_start: number; // First PDB residue index
  pdb_end: number; // Last PDB residue index
}

class Range {
  author_residue_number: number; // PDB author residue number
  author_insertion_code: string; // PDB author insertion code
  residue_number: number; // PDB residue number
}
