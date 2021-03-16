import characters from './person';
import Team from './team';

const team = new Team();
team.addAll(...characters);
const char = team.toArray();

for (const key of char) {
  console.log(key);
}
