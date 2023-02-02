import { useEffect, useState } from 'react';

import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth} from './helpers/dataFilter';
import { TableArea } from './components/TableArea/index';

export const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  
  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) )
  }, [list, currentMonth]);

  return (
    <C.Container>
       <C.Header>
          <C.HeaderText>
            ismael
          </C.HeaderText>
       </C.Header>
       <C.Body>
        <TableArea list={filteredList} />
       </C.Body>
    </C.Container>
  );
};
