import WorkOutGen from '../components/WorkOutGen';
import styles from '../styles/WorkOutGen.module.scss';

function HomePage() {

  const params = WorkOutGen();

  return (
    <div>
      <WorkOutGen/>
    </div>
  );
}

export default HomePage;
