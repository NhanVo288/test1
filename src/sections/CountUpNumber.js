import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import Odometer from "odometer";
import "odometer/themes/odometer-theme-default.css"; 

export default function CountUpNumber({
  value = 0,
  duration = 2000, 
  format = "(,ddd)", 
  ...props
}) {
  const odometerRef = useRef(null);
  const odometerInstanceRef = useRef(null);

  useEffect(() => {
    if (odometerRef.current && !odometerInstanceRef.current) {
      odometerInstanceRef.current = new Odometer({
        el: odometerRef.current,
        value: 0,
        format,
        duration,
      });
    }
  }, [format, duration]);

  useEffect(() => {
    if (odometerInstanceRef.current) {
      odometerInstanceRef.current.update(value);
    }
  }, [value]);

  return (
    <span
      ref={odometerRef}
      {...props}
    >
      {/* Odometer sẽ render số vào đây */}
    </span>
  );
}

CountUpNumber.propTypes = {
  value: PropTypes.number.isRequired,
  duration: PropTypes.number,
  format: PropTypes.string,
  style: PropTypes.object
};
