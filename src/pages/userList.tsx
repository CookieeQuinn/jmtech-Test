import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  email: string;
}

export default function UserList() {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
      render: (text) => text,
    },
    {
      title: 'Age',
      key: 'age',
      dataIndex: 'age',
      render: (age) => age,
    },
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
      render: (text) => text,
    },
  ];
  const dataSource: DataType[] = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      email: 'huyanbing@qq.com',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      email: 'huyanzhu@qq.com',
    },
  ];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns}></Table>
    </div>
  );
}
