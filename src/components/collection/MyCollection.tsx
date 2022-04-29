import { useState } from 'react'
import './MyCollection.css'


// Denna gör samma sak som [ ...array ]
function shallowCopy(array: Array<string>): Array<string> {
  let copy: Array<string> = [];
  array.forEach((item) => copy.push(item));
  return copy;
}

interface Fish {
	name: string;
	id: number;
}
let baseId = 1;
function createId(): number {
	return baseId++
}

const MyCollection = () => {
  const [fishData, setFishData] = useState<Fish[]>([
    "guppy", "fighter", "guldfisk", "clownfisk", "neon",
  ].map(name => ({ id: createId(), name: name }) ));
  const [newFishName, setNewFishName] = useState<string>('')
  const [selectedId, setSelectedId] = useState<number>(-1)


  const addFish = () => {
	  let name: string = newFishName.toUpperCase()
	  let fish: Fish = { id: createId(), name: name }
	  setFishData( [ ...fishData, fish ] )
  }

	return (
    <div className='fish-collection'>
      My fishes
      <div className='fish-list'>
        My present fishes
        <ul>
          {fishData.map((fish) => (
            <li key={fish.id} onClick={() => setSelectedId(fish.id)} className={selectedId === fish.id ? 'selected' : ''}>
              {fish.name}
            </li>
          ))}
        </ul>
      </div>
      <div className='add-fish'>
        <p> Add a new fish </p>
        <input
          type='text'
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNewFishName(event.target.value)
          }
        />
        <button onClick={addFish}> Swim! </button>
      </div>
    </div>
  );
}

export default MyCollection
