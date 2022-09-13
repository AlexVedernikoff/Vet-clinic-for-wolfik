import { Button, Collapse } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import css from './PetSidebar.module.scss';

interface Pets {
  id: number;
  name: string;
}

// Вымышленные данные
const petsData: Pets[] = [
  { id: 1, name: 'Belka' },
  { id: 2, name: 'Strelka' },
  { id: 3, name: 'Bulka' },
  { id: 4, name: 'Keks' },
  { id: 5, name: 'Pumba' },
  { id: 6, name: 'Pikachu' },
  { id: 7, name: 'Rex' },
];

const { Panel } = Collapse;

// Функция создания панели
const createPanel = (id: number, name: string): JSX.Element => (
  <Panel header={name} key={id} className={css.panel}>
    <Button
      className={css.addpet}
      type="primary"
      icon={<EditOutlined />}
      style={{ marginRight: 3 }}
    >
      Редактировать
    </Button>
    <Button type="primary" icon={<DeleteOutlined />}>
      Удалить
    </Button>
  </Panel>
);

// JSX Element
const PetSidebar = (): JSX.Element => (
  <aside className={css.sidebar}>
    <div className={css.header}>
      <span className={css.label}>Ваши питомцы</span>
      <Button shape="circle" icon={<PlusOutlined />} />
    </div>
    <Collapse accordion expandIconPosition="end">
      {petsData.map((pet: Pets) => createPanel(pet.id, pet.name))}
    </Collapse>
  </aside>
);

export default PetSidebar;
