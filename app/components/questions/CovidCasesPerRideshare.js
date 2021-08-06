import { useEffect } from 'react'
import HomeDemo from '../../components/HomeDemo'

export default function CovidCasesPerRideshare(props) {
  useEffect(() => {
    props.setContentIsLoading(false);
  });
  return (
    <div className="CovidCasesPerRideshare">
      <div className="center">
        <HomeDemo communityAreas={props.communityAreas} />
      </div>
    </div>
  );
}