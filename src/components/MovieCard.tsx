import { Star, Clock } from 'react-feather';

import '../styles/movie-card.scss';

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
  link: string;
}

export function MovieCard(props: MovieCardProps) {
  console.log(props);
  return (
    <a
      href={props.link}
      target="_blank"
      title={`${props.title} - Click to open...`}
    >
      <div className="movie-card">
        <img
          src={props.poster}
          alt={props.title}
        />
        <div>
          <div className="movie-info">
            <span>{props.title}</span>
            <div className="meta">
              <div>
                <Star /> {props.rating}
              </div>

              <div>
                <Clock /> {props.runtime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}