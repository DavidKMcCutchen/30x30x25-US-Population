export interface Population {
  data:   Data[];
  source: Source[];
}

export interface Data {
  "ID Nation":   string;
  Nation:        string;
  "ID Year":     number;
  Year:          string;
  Population:    number;
  "Slug Nation": string;
}

  export const emptyData = {
    "ID Nation": '',
    Nation: '',
    "ID Year": 0,
    Year: '',
    Population: 0,
    "Slug Nation": ''
  }

export interface Source {
  measures:      string[];
  annotations:   Annotations;
  name:          string;
  substitutions: any[];
}

export interface Annotations {
  source_name:        string;
  source_description: string;
  dataset_name:       string;
  dataset_link:       string;
  table_id:           string;
  topic:              string;
}