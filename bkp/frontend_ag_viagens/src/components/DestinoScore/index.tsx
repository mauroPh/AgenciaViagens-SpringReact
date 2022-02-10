import MovieStars from 'components/MovieStars';
import './styles.css';

function DestinoScore(){

const score=3.5;
const count=13;
return(
    <div className="agviagens-score-container">
    <p className="agviagens-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
    <MovieStars />
        <p className="agviagens-score-count">{count} avaliações</p>
</div>
);

}
export default DestinoScore