import {Bag} from './Bag';
import {Weapon} from './Weapon';
import {Job} from './Job';

export interface Character {
  id: number;
  name: string;
  xp: number;
  pv: number;
  bag: Bag;
  weapons: Weapon[];
  jobs: Job[];
}
