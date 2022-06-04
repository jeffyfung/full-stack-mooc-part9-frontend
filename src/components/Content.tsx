import { CoursePart } from '../types';
import Part from './Part';

const Content = ({ courseParts }: { courseParts: CoursePart[] }) => {
  return (
    <div>
      {courseParts.map((part, idx) => (
        <div key={idx}>
          <Part part={part} />
          {idx !== courseParts.length - 1 && <br />}
        </div>
      ))}
    </div>
  );
};

export default Content;
