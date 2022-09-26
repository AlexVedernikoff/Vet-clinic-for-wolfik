import {
  DeleteFilled,
  EditFilled,
  MenuUnfoldOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { Button } from 'antd';
import css from './PetSidebar.module.scss';
import ButtonCustom from '../button/Button';

interface Pets {
  id: number;
  name: string;
  checked: boolean;
}

const petListItem = (pet: Pets, cb: (id: number) => void): JSX.Element => (
  <li key={pet.id}>
    <div
      className={pet.checked ? css['pet-checked'] : css.pet}
      onClick={() => cb(pet.id)}
      aria-hidden="true"
    >
      <div className={css['pet-avatar']}>
        <span>0</span>
      </div>
      <span className={css['pet-name']}>{pet.name}</span>
      <RightOutlined className={pet.checked ? css.open : css.closed} />
    </div>
    {pet.checked && (
      <div className={css.buttons}>
        <Button className={css.edit} icon={<EditFilled />} type="primary">
          Редактировать
        </Button>
        <Button className={css.delete} icon={<DeleteFilled />} type="primary">
          Удалить
        </Button>
      </div>
    )}
  </li>
);

const PetSidebar = (): JSX.Element => {
  const [petsData, setPetsData] = useState([
    { id: 1, name: 'Привет как дела че делаешь когда в армию?', checked: false },
    { id: 2, name: 'Клубничка', checked: false },
    { id: 3, name: 'Вредина', checked: false },
    { id: 4, name: 'Кекич', checked: false },
  ]);

  const updatePetsData = (id: number) => {
    const newPetsData = petsData.map((pet) => (pet.id === id
      ? { ...pet, checked: !pet.checked }
      : { ...pet, checked: false }));
    setPetsData(newPetsData);
  };

  return (
    <aside className={css.petsidebar}>
      <header className={css.header}>
        {window.screen.width > 768 ? (
          <span className={css.title}>Ваши питомцы</span>
        ) : (
          <MenuUnfoldOutlined className={css.title} onClick={() => {}} />
        )}
        <button type="button" className={css.addpet} aria-label="Add pet" />
      </header>
      <ul className={css.petlist}>
        {petsData.map((pet) => petListItem(pet, updatePetsData))}
      </ul>
    </aside>
  );
};

export default PetSidebar;
