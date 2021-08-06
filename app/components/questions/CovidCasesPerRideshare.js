import { useEffect } from 'react'
import CovidRideshareRatio from '../../components/CovidRideshareRatio'

export default function CovidCasesPerRideshare(props) {
  useEffect(() => {
    props.setContentIsLoading(false);
  });
  return (
    <div className="CovidCasesPerRideshare">
      <div className="center">
        <CovidRideshareRatio communityAreas={props.communityAreas} />
      </div>
    </div>
  );
}