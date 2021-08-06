import { useEffect } from 'react'

export default function Sample(props) {
  useEffect(() => {
    props.setContentIsLoading(false);
  });
  return (
    <div>
      <p>This question is still under development. Check back soon!</p>
    </div>
  );
}