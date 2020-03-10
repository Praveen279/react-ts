import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { msToTime } from 'src/utils/utils';
import {
   StatusBarDiv,
   TextContent,
   TopText,
   BottomText,
   CallTimer,
   PhoneNumber,
   CallStatus,
   TimerSpan
} from './ConnnectionStatusBar.styled';

function ConnectionStatusBar({ key, connection }) {
   const [type, setType] = useState(connection.getStatus().type);
   const [duration, setDuration] = useState(msToTime(connection.getStatusDuration()));
   const [endpoint, setEndpoint] = useState(connection.getEndpoint());

   useEffect(() => {
      const interval = setInterval(() => {
         setType(connection.getStatus().type);
         setDuration(msToTime(connection.getStatusDuration()));
         setEndpoint(connection.getEndpoint());
      }, 500);
      return () => {
         clearInterval(interval);
      };
   }, [connection, key]);
   return (
      <StatusBarDiv type={type}>
         <TextContent>
            <TopText>
               <PhoneNumber>{endpoint.phoneNumber}</PhoneNumber>
            </TopText>
            <BottomText>
               <CallTimer>
                  <TimerSpan>{duration}</TimerSpan>
               </CallTimer>
               <CallStatus>{type}</CallStatus>
            </BottomText>
         </TextContent>
      </StatusBarDiv>
   );
}

ConnectionStatusBar.propTypes = {
   connection: PropTypes.shape({
      getStatusDuration: PropTypes.func,
      getStatus: PropTypes.func,
      getEndpoint: PropTypes.func
   }).isRequired,
   key: PropTypes.string.isRequired
};

export default ConnectionStatusBar;
