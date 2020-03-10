import React, { useEffect, useState } from 'react';

interface LinkProps {
  className?: string;
}

const Link: React.FC<LinkProps> = ({
  className
}) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter == 0) {
      setCounter(counter + 1);
    }
  });
  return (
    <div
      className={className}
      onClick={() => setCounter(counter + 1)}
    >
      {counter}
    </div>
  );
}

export default Link;