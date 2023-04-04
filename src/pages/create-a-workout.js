import WorkOutGen from '../components/WorkOutGen';
import styles from '../styles/WorkOutGen.module.css';

function HomePage() {

  const params = WorkOutGen();

  return (
    <div>
      <div className={styles['work-out-gen']}>
        <div className={styles['difficulty-container']}>
          <button 
          onClick={()=>
            {params.difficulty === 'beginner' ? 
            handleParams('difficulty',''):handleParams('difficulty','beginner')}}
          className={params.difficulty === 'beginner'?styles['difficuly-button-unselected']:styles['difficuly-button-selected']}>
            Beginner
            </button>
          <button>Intermediate</button>
          <button>Expert</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
