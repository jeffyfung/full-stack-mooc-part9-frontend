import { CoursePart } from '../../types';

const Part = ({ part }: { part: CoursePart }) => {
  const titleStyle = { fontWeight: 'bold' };
  const descriptionStyle = { fontStyle: 'italic' };

  switch (part.type) {
    case 'normal':
      return (
        <div>
          <span style={titleStyle}>
            {part.name} {part.exerciseCount}
          </span>
          <br />
          <span style={descriptionStyle}>{part.description}</span>
        </div>
      );
    case 'groupProject':
      return (
        <div>
          <span style={titleStyle}>
            {part.name} {part.exerciseCount}
          </span>
          <br />
          project exercises {part.groupProjectCount}
        </div>
      );
    case 'submission':
      return (
        <div>
          <span style={titleStyle}>
            {part.name} {part.exerciseCount}
          </span>
          <br />
          <span style={descriptionStyle}>{part.description}</span>
          <br />
          submit to {part.exerciseSubmissionLink}
        </div>
      );
    case 'special':
      return (
        <div>
          <span style={titleStyle}>
            {part.name} {part.exerciseCount}
          </span>
          <br />
          <span style={descriptionStyle}>{part.description}</span>
          required skills:{' '}
          {part.requirements.map((req, idx) => (
            <span key={idx}>
              {req}
              {idx === part.requirements.length - 1 ? '' : ', '}
            </span>
          ))}
        </div>
      );
    default:
      return assertNever(part);
  }
};

const assertNever = (value: never): never => {
  throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`);
};

export default Part;
