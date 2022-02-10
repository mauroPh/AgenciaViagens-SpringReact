import './styles.css';
import{ReactComponent as Arrow}from 'assets/img/arrow.svg';

function Pagination(){

    return(
        <div className="agviagens-pagination-container">
    <div className="agviagens-pagination-box">
        <button className="agviagens-pagination-button" disabled={true} >
            <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="agviagens-pagination-button" disabled={false} >
            <Arrow className="agviagens-flip-horizontal" />
        </button>
    </div>
</div>

    );
}
export default Pagination;