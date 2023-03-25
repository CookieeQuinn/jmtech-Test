import { useParams } from 'umi';
import styles from './index.less';

export default function User() {
  const param = useParams();
  //   const { id } = useParams();
  return <div>param:{{ param }}</div>;
  //   return <div>id:{{ id }}</div>;
}
