import { useEffect } from 'react';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import List from '@mui/material/List';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../features/quizSlice';
import { RootState } from '../../store';
import { SortableItem } from '../components/SortableItem';

interface Props {
  index: number;
  initial: string[];
}

function SortableList({ index, initial }: Props) {
  const dispatch = useDispatch();
  const items = useSelector((s: RootState) => s.quiz.answers[index]) || initial;

  // первичная запись порядка в Redux
  useEffect(() => {
    dispatch(setAnswer({ index, items: initial }));
  }, [dispatch, index, initial]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldI = items.indexOf(active.id as string);
      const newI = items.indexOf(over.id as string);
      dispatch(setAnswer({ index, items: arrayMove(items, oldI, newI) }));
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <List>
          {items.map((it) => (
            <SortableItem key={it} item={it} />
          ))}
        </List>
      </SortableContext>
    </DndContext>
  );
}

export default SortableList;
